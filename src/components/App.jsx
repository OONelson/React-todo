import React, { useState } from 'react';
import Header from './Header.jsx';
import CreateArea from './CreateArea.jsx';
import Todos from './Todos.jsx';

const App = () => {
	const [items, setItems] = useState([]);
	const [open, setOpen] = useState(false);

	const handlePopup = () => {
		setOpen(true);
	};

	const handleClosePopup = () => {
		setOpen(show => !show);
	};
	const handleAddItems = item => {
		setItems(items => [...items, item]);
	};

	const handleDeleteItem = id => {
		setItems(items => items.filter(item => item.id !== id));
	};
	const handleToggle = id => {
		setItems(items =>
			items.map(item => (item.id === id ? { ...item, done: !item.done } : item))
		);
	};
	const handleClearList = () => {
		setItems([]);
	};
	return (
		<div className='app'>
			<Header />
			<Todos
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggle}
			/>
			{open && (
				<CreateArea
					onAddItems={handleAddItems}
					onClick={handleClosePopup}
				/>
			)}
			<div>
				{items.length > 0 && (
					<button
						className='addTodo'
						style={{ marginBottom: '.5rem' }}
						onClick={handleClearList}
					>
						Clear List
					</button>
				)}
				<button
					className='addTodo'
					onClick={handlePopup}
				>
					Add Todo
				</button>
			</div>
		</div>
	);
};

export default App;
