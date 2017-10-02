import React, { Component } from 'react'
import shelfs from './shelfs'

class BookShelfChanger extends Component {
	render() {
		const { book, onUpdateBook } = this.props
		return (
			<div className="book-shelf-changer">
				<select 
					value={book.shelf}
					onChange={(event) => {
						onUpdateBook(book, event.target.value.toString())
				}}>
					<option value="none" disabled>Move to...</option>
					{shelfs.map((shelf) => (
						<option value={shelf.id} key={shelf.id}>{shelf.title}</option>
					))}
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default BookShelfChanger