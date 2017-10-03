import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookGrid from './BookGrid'
import * as BooksAPI from './utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import searchTerms from './searchTerms'

class Search extends Component {
	state  = {
		searchResults: [],
		query: ''
	}

	// Check if the user's search query matches any of the allowed search terms
	allowedSearchTerm(searchQuery) {
		if(searchQuery) {
			for(const term of searchTerms) {
				const match = new RegExp(escapeRegExp(searchQuery), 'i')
				if(match.test(term)) {
					return term
				}
			}
			return null	
		}
	}

	updateQuery = (q) => {
		const searchQuery = q.trim()
		this.setState({ query: searchQuery })
		// Search only for allowed terms
		// Clear state when the search field is empty or query length is less than 3
		if(searchQuery === "" || searchQuery.length <= 2) {
			this.setState({ searchResults: [] })
		} else {
			const allowedSearchTerm = this.allowedSearchTerm(searchQuery);
			if(allowedSearchTerm) {
				BooksAPI.search(allowedSearchTerm).then((result) => {
					this.setState({ searchResults: result })	
				})	
			}
		}
	}

	inShelf(books, book) {
		for (const b of books) {
			if(b.id === book.id) {
				return b
			}
		}
		return null
	}

	render() {
		const { onUpdateBook, books } = this.props
		const { searchResults } = this.state
		let searchedBooks
		// get the books which are already shelfed
		// and capture their current shelf
		// for the rest make the shelf empty
		if(searchResults.length) {
			searchedBooks = searchResults.map((book) => {
				const shelfedBook = this.inShelf(books, book);
				if(shelfedBook) {
					book.shelf = shelfedBook.shelf
				} else {
					book.shelf = ''
				}
				return book
			})	
		}
		
				
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
            {/* 
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
            	type="text" 
            	placeholder="Search by title or author" 
            	onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
				</div>
				{searchedBooks && (<div className="search-books-results">
					<BookGrid books={searchedBooks} onUpdateBook={onUpdateBook} />
				</div>
				)}
			</div>
		)
	}
}

export default Search