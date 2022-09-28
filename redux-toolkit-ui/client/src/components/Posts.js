import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/slice/postSlice';
import PostItem from './PostItem'

const Posts = () => {
	const dispatch = useDispatch();
	const posts = useSelector( (state) => state.posts.posts );
	let { loading, error }= useSelector( (state) => state.posts );

	return (
		<div>
			<button
				className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
				onClick={ () => dispatch(fetchPosts())}
			>
				Get posts
			</button>
			{loading ? <h3>Loading...</h3> : null}
			{error ? <h3>Ошибка. Повторить еще раз?</h3> : null}
			{posts.map( (post) => <PostItem key={post.id} {...post}/>)}
		</div>
	)
}

export default Posts
