import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
	const [showEdit, toggleShowEdit] = useState(false);

	const handleDeleteClick = () => {
		onDelete(book.id);
	}

	const handleEditClick = () => {
		toggleShowEdit(!showEdit);
	}

	const handleEditSubmit = (id, newTitle) => {
		onEdit(id, newTitle)
		toggleShowEdit(false);
	}

	let content = <h3>{book.title}</h3>;
	if (showEdit) {
		content = <BookEdit book={ book } onEdit={ handleEditSubmit } />
	}

	return (
		<div className="book-show">
			<img
				alt="books"
				src={`https://picsum.photos/seed/${book.id}/300/200`} />
			<div className="actions">
				<button className="edit" onClick={ handleEditClick }>
					Edit
				</button>
				<button className="delete" onClick={ handleDeleteClick } >
					Delete
				</button>
			</div>
			<div>{ content }</div>
		</div>
	);
}

export default BookShow;