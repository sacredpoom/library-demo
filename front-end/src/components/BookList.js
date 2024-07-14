import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import '../styles/BookList.css';

// Our list of books consisting of book objects for display
// Use radio buttons to filter by genres
// Only display six books entries per page 
// Use Checkout for DELETE functionality
// Use Return Book for CREATE functionality

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('All'); // Default to show all genres
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 6;

    // retrieve all books
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/books/')
            .then(response => response.json())
            .then(data => {
                setBooks(data);
                setFilteredBooks(data);
            });
    }, []);

    // filter by GENRE
    useEffect(() => {
        filterBooksByGenre(selectedGenre);
    }, [books, selectedGenre]);

    const filterBooksByGenre = (genre) => {
        if (genre === 'All') {
            setFilteredBooks(books);
        } else {
            const filtered = books.filter(book => book.genre === genre);
            setFilteredBooks(filtered);
        }
        setCurrentPage(1); // Reset to first page when changing genre
    };

    // change genre selected 
    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

    return (
        <div className="book-list-container">
            <h2 className="book-list-title">Library Books</h2>
            <div className="genre-filter">
                <label>
                    <input
                        type="radio"
                        value="All"
                        checked={selectedGenre === 'All'}
                        onChange={handleGenreChange}
                    />
                    All
                </label>
                <label>
                    <input
                        type="radio"
                        value="Fiction"
                        checked={selectedGenre === 'Fiction'}
                        onChange={handleGenreChange}
                    />
                    Fiction
                </label>
                <label>
                    <input
                        type="radio"
                        value="Non-Fiction"
                        checked={selectedGenre === 'Non-Fiction'}
                        onChange={handleGenreChange}
                    />
                    Non-Fiction
                </label>
                <label>
                    <input
                        type="radio"
                        value="Sci-Fi"
                        checked={selectedGenre === 'Sci-Fi'}
                        onChange={handleGenreChange}
                    />
                    Sci-Fi
                </label>
                <label>
                    <input
                        type="radio"
                        value="Fantasy"
                        checked={selectedGenre === 'Fantasy'}
                        onChange={handleGenreChange}
                    />
                    Fantasy
                </label>
                <label>
                    <input
                        type="radio"
                        value="Mystery"
                        checked={selectedGenre === 'Mystery'}
                        onChange={handleGenreChange}
                    />
                    Mystery
                </label>
                <label>
                    <input
                        type="radio"
                        value="Romance"
                        checked={selectedGenre === 'Romance'}
                        onChange={handleGenreChange}
                    />
                    Romance
                </label>
            </div>
            <ul className="book-list">
                {currentBooks.map(book => (
                    <Book key={book.id} book={book} />
                ))}
            </ul>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <button onClick={handleNextPage} disabled={currentBooks.length < booksPerPage}>Next</button>
                <Link to="/return-book">
                    <button>Return Book</button>
                </Link>
            </div>
        </div>
    );
};

export default BookList;
