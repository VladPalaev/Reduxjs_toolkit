import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './slice/postSlice';
import todoSlice from './slice/todoSlice';
import userSlice from './slice/userSlice';


export default configureStore({
	reducer: {
		user: userSlice,
		todo: todoSlice,
		posts: postsSlice,
	}
});