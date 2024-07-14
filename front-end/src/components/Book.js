import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Our book object { id, title, author, genre, published_date, isbn }

const Book = ({ book }) => {
    const [bookDetails, setBookDetails] = useState(null);

    useEffect(() => {
        // Fetch book details by ID
        fetch(`http://127.0.0.1:8000/api/books/${book.id}/`)
            .then(response => response.json())
            .then(data => setBookDetails(data))
            .catch(error => console.error('Error fetching book:', error));
    }, [book.id]);

    return (
        <li>
            <h3>{bookDetails ? bookDetails.title : 'Loading...'}</h3>
            <p>Author: {bookDetails ? bookDetails.author : 'Loading...'}</p>
            <p>Genre: {bookDetails ? bookDetails.genre : 'Loading...'}</p>
            <p>Published Date: {bookDetails ? bookDetails.published_date : 'Loading...'}</p>
            <Link to={`/checkout/${book.id}`}>Checkout</Link>
        </li>
    );
};

export default Book;