import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
	'post/fetchPost',
	async function(_, {rejectWithValue, dispatch }) {
		try {
			const response = await fetch('/api/posts');

			if (!response.ok) {
				throw new Error('Ошибка сервера')
			}

			const data = await response.json();

			dispatch(addPosts(data));

		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const setError = (state, action) => {
	state.error = 'rejected';
	state.loading = false;
	state.status = 'error';
};

const updateState = (state, action) => {
	state.error = null;
	state.loading = false;
	state.status = 'update state'
}

const initialState = {
	posts: [],
	status: null,
	error: null,
	loading: false,
}

const postsSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		addPosts(state, action) {
			state.posts = action.payload;
		}
	},
	extraReducers: {
		[fetchPosts.pending]: (state, action) => {
			state.loading = true;
			state.error = null;
		},
		[fetchPosts.fulfilled]: updateState,
		[fetchPosts.rejected]: setError,
	}
});

export const { addPosts } = postsSlice.actions;
export default postsSlice.reducer;



