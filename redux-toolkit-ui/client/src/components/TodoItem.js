import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggelStatus } from '../redux/slice/todoSlice';

const TodoItem = ( {id, text, isCompleted, time} ) => {
	const dispatch = useDispatch();

	return (
		<div className='flex justify-between items-center my-2'>
			<div className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'
			onClick={ () => dispatch( toggelStatus({id}) ) } >
				Complete
			</div>
			<div className={`text-sm ${isCompleted ? 'line-through font-medium text-lime-400' : ''}`}>
				{`${time} ${text}`}
			</div>
			<div className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'
			onClick={ () => dispatch(deleteTodo({id}))} >
				Delete
			</div>
		</div>
	)
}

export default TodoItem
