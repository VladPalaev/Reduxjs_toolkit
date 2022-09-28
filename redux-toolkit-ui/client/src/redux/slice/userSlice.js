import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	firstName: '',
	lastName: '',
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		updateInput(state, action) {
			const list = Object.keys(action.payload);
			state[list[0]] = action.payload[list[0]]; // Не плохая фича для того, чтобы не плодить много логики для каждого input-а
		}
	}
});

export const { updateInput } = userSlice.actions;
export default userSlice.reducer;