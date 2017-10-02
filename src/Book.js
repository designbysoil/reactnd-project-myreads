import React, { Component } from 'react'

class Book extends Component {
	render() {
		const { book } = this.props
		console.log(book);
		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks && book.imageLinks.thumbnail) || ''})`}}></div>
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