import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';



const initialState = {
	todos: [],
}

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: v4(),
				time: new Date().toISOString().split('T')[0],
				text: action.payload.text,
				isCompleted: false,
			};

			state.todos.push(todo);
		},
		toggelStatus: (state, action) => {
			const todoId = action.payload.id;
			const todo = state.todos.find( (todo) => todo.id === todoId);
			todo.isCompleted = !todo.isCompleted;
		}, 
		deleteTodo: (state, action) => {
			const dataDeleteTodo = action.payload.id;
			state.todos = state.todos.filter( (todo) => todo.id !== dataDeleteTodo );
		}
	}
});

export const { addTodo, toggelStatus, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;