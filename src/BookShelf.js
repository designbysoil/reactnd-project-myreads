import React, { Component } from 'react'
import BookGrid from './BookGrid'
import PropTypes from 'prop-types'

class BookShelf extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		books: PropTypes.array.isRequired,
		onUpdateBook: PropTypes.func.isRequired
	}

	render() {
		const { id, title, books, onUpdateBook } = this.props
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