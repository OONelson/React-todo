/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ item, onToggleItem, onDeleteItem }) => {
	return (
		<div className='todo'>
			<input
				type='checkbox'
				value={item.done}
				onChange={() => onToggleItem(item.id)}
			/>
			<p
				style={
					item.done
						? {
								color: '#d9d9d9'
						  }
						: {}
				}
			>
				{item.content}
			</p>
			<FontAwesomeIcon
				icon={faTrashAlt}
				onClick={() => onDeleteItem(item.id)}
			/>
			{/* <FontAwesomeIcon icon={faTimes} /> */}
		</div>
	);
};

export default Todo;
