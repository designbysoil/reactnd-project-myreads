import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import Search from './Search'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
  	// Get all the books from the given API
  	BooksAPI.getAll().then((books) => {
  		this.setState({ books })
  	})
  }

  changeBookShelf = (book, shelf) => {
  	BooksAPI.update(book, shelf).then(() => {
  		book.shelf = shelf
  		this.setState((state) => ({
  			books: state.books.filter((b) => b.id !== book.id).concat([book])
  		}))
  	})
  }

  render() {
 
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} onUpdateBook={this.changeBookShelf} />
        )} />
        <Route path="/search" render={() => (
          <Search books={this.state.books} onUpdateBook={this.changeBookShelf} />
        )} />
      </div>
    );
  }
}

export default BooksApp;
