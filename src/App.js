import React, { Component } from 'react';
import ListBooks from './ListBooks';
import * as BooksAPI from './utils/BooksAPI'
import './App.css';

const shelfs = [
  {
		id: "currentlyReading",
		title: "Currently Reading"
	},
	{
		id: "wantToRead",
		title: "Want to Read"
	},
  {
  	id: "read",
  	title:"Read"
  }
]

class BooksApp extends Component {
  state = {
    books: []
  }
  componentDidMount() {
  	BooksAPI.getAll().then((books) => {
  		this.setState({ books })
  	})
  }
  render() {
 
    return (
      <div className="app">
        <ListBooks books={this.state.books} shelfs={shelfs} />
      </div>
    );
  }
}

export default BooksApp;
