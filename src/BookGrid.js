import React, { Component } from 'react'
import Book from './Book'

class BookGrid extends Component {
	render() {
		const { books, onUpdateBook } = this.props
		return (
			<ol className="books-grid">
				{books.map((book) => (
					<li key={book.id}>
						<Book book={book} onUpdateBook={onUpdateBook} />
					</li>
				))}
			</ol>
		)
	}
}

export default BookGrid