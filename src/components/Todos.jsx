import React from 'react';
import Todo from './Todo.jsx';

const Todos = ({ items, onDeleteItem, onToggleItem }) => {
	return (
		<ul className='todos'>
			{items.map(item => (
				<Todo
					item={item}
					onDeleteItem={onDeleteItem}
					onToggleItem={onToggleItem}
					key={item.id}
				/>
			))}
		</ul>
	);
};

export default Todos;
