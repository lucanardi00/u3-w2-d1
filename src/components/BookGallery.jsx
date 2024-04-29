import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, FormControl, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import BookCard from './BookCard';
import booksDataFantasy from '../books/fantasy.json';
import booksDataHistory from '../books/history.json';
import booksDataHorror from '../books/horror.json';
import booksDataRomance from '../books/romance.json';
import booksDataSciFi from '../books/scifi.json';

function BookGallery() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSelectBook = book => {
    setSelectedBook(book);
  };

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
    <Container>
      <Row className="mb-3">
        <Col>
          <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="fantasy">Fantasy</option>
            <option value="history">History</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
          </Form.Select>
        </Col>
        <Col>
          <FormControl
            type="text"
            placeholder="Search by title..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </Col>
      </Row>
      <Row>
        {filteredBooks.length > 0 ? filteredBooks.map((book, index) => (
          <Col sm={6} md={4} lg={3} key={`${book.asin}-${category}-${index}`}>
            <BookCard book={book} onClick={handleSelectBook}
              isSelected={selectedBook && book.asin === selectedBook.asin}/>
          </Col>
        )) : (
          <Col>
            <p>No books found.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default BookGallery;
