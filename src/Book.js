import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

class Book extends Component {
	static PropTypes = {
		books: PropTypes.array.isRequired,
		onUpdateBook: PropTypes.func.isRequired
	}
	
	render() {
		const { book, onUpdateBook } = this.props
		console.log(book);
		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks && book.imageLinks.thumbnail) || ''})`}}></div>
					<BookShelfChanger book={book} onUpdateBook={onUpdateBook} />
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">
					{book.authors && book.authors.join(", ")}
				</div>
			</div>
		)
	}
}

export default Book