import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Create = ({ onAddItems, onClick }) => {
	const [content, setContent] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		if (!content) return;

		const newTodo = { content, done: false, id: Date.now() };

		onAddItems(newTodo);

		setContent('');

		onClick();
	};

	return (
		<div className='create'>
			<div className='head'>
				<h4>Add todo</h4>
				<FontAwesomeIcon
					icon={faTimes}
					className='close'
					onClick={onClick}
				/>
			</div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='new todo'
					value={content}
					onChange={e => setContent(e.target.value)}
				/>

				<button
					className='addTodo'
					style={{
						backgroundColor: 'rgba(15, 70, 252, 0.671)',
						color: '#fff',
						padding: '.4rem'
					}}
				>
					Add Todo
				</button>
			</form>
		</div>
	);
};

export default Create;
