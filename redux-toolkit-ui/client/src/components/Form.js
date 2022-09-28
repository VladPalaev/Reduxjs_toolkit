import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/todoSlice';

const Form = () => {
	const [value, setValue] = useState('');
	const dispath = useDispatch();

	return (
		<form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
			<input
				type='text'
				value={value}
				autoFocus={true}
				onChange={(e) => setValue(e.target.value)}
				placeholder='Type something...'
				className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
			/>
			<button
				type='submit'
				onClick={ () => {
					dispath(addTodo({text: value}));
					setValue('')
				}}
				className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
			>
				Submit
			</button>
		</form>
	)
}

export default Form
