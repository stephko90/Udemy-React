import './index.css';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
	const [books, setBooks] = useState([]);
	const [counter, incrCounter] = useState(0);

	const createBook = async (title) => {
		const response = await axios.post('http://localhost:3001/books', {
			title
		});

		const updatedBooks = [
			...books,
			response.data
		]

		setBooks(updatedBooks);
	};

	const editBook = async (id, title) => {
		await axios.put(`http://localhost:3001/books/${id}`, {title});
		incrCounter(counter+1);
	};

	const deleteBook = async (id) => {
		await axios.delete(`http://localhost:3001/books/${id}`);
		incrCounter(counter+1);
	};

	const fetchBooks = async () => {
		const response = await axios.get('http://localhost:3001/books');
		setBooks(response.data);
	};

	useEffect(() => {
		fetchBooks();
	}, [counter]);
	
	return (
		<div>
			<h1>Reading List</h1>
			<BookList books={ books } onDelete={ deleteBook } onEdit={ editBook } />
			<BookCreate onCreate={ createBook } />
		</div>
	)
}