import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookGrid extends Component {
	static PropTypes = {
		books: PropTypes.array.isRequired,
		onUpdateBook: PropTypes.func.isRequired
	}
	
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