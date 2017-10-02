import React, { Component } from 'react';
import ListBooks from './ListBooks';
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  }
  render() {
    return (
      <div className="app">
        <ListBooks books={this.state.books} />
      </div>
    );
  }
}

export default BooksApp;
