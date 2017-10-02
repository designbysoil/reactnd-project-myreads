import React, { Component } from 'react'
import BookShelf from './BookShelf'
import shelfs from './shelfs'
import PropTypes from 'prop-types'

class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		onUpdateBook: PropTypes.func.isRequired 
	}
	
	render() {
		const { books, onUpdateBook } = this.props
		return (
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>
							{shelfs.map((shelf) => (
								<BookShelf 
									id={shelf.id} 
									key={shelf.id} 
									title={shelf.title} 
									books={books} 
									onUpdateBook={onUpdateBook}
								/>
							))}
						</div>
					</div>
				</div>
		)
	}
}

export default ListBooks