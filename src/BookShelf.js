import React, { Component } from 'react'
import BookGrid from './BookGrid'

class BookShelf extends Component {
	render() {
		const { title, id, books, onUpdateBook } = this.props
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{title}</h2>
				<div className="bookshelf-books">
					{/* Filter books by the shelf they are on */}
					<BookGrid books={books.filter((book) => book.shelf === id)} onUpdateBook={onUpdateBook} />
				</div>
			</div>
		)
	}
}

export default BookShelf