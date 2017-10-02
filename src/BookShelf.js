import React, { Component } from 'react'
import BookGrid from './BookGrid'

class BookShelf extends Component {
	render() {
		const { title, id, books } = this.props
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{title}</h2>
				<div className="bookshelf-books">
					<BookGrid books={books.filter((book) => book.shelf === id)} />
				</div>
			</div>
		)
	}
}

export default BookShelf