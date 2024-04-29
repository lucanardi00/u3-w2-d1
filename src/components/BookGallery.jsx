import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import booksDataFantasy from '../books/fantasy.json';
import booksDataHistory from '../books/history.json';
import booksDataHorror from '../books/horror.json';
import booksDataRomance from '../books/romance.json';
import booksDataSciFi from '../books/scifi.json';

function BookGallery() {
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    let books = [];
    if (category === "all") {
      books = [
        ...booksDataFantasy,
        ...booksDataHistory,
        ...booksDataHorror,
        ...booksDataRomance,
        ...booksDataSciFi
      ];
    } else {
      switch (category) {
        case "fantasy":
          books = booksDataFantasy;
          break;
        case "history":
          books = booksDataHistory;
          break;
        case "horror":
          books = booksDataHorror;
          break;
        case "romance":
          books = booksDataRomance;
          break;
        case "sci-fi":
          books = booksDataSciFi;
          break;
        default:
          books = [];
      }
    }

    const lowercasedSearch = searchTerm.toLowerCase();
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(lowercasedSearch)
    );

    setFilteredBooks(filtered);
  }, [category, searchTerm]);

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="fantasy">Fantasy</option>
            <option value="history">History</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
          </select>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
      </div>
      <div className="row">
      {filteredBooks.length > 0 ? filteredBooks.map((book, index) => (
  <div className="col-sm-6 col-md-4 col-lg-3" key={`${book.asin}-${category}-${index}`}>
    <BookCard book={book} />
  </div>
)) : (
  <div className="col">
    <p>No books found.</p>
  </div>
)}
        )}
      </div>
    </div>
  );
}

export default BookGallery;
