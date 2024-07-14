import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/ReturnBook.css';

// This component is used to CREATE new book objects to the database
// All fields in form must be filled out
// Date must be in specified format (yyyy-mm-dd) or will display fail message
// Optionally Return to Library to navigate back without creating new book object

const ReturnBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [published_date, setDate] = useState('');
    const [isbn, setIsbn] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/api/books/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, author, genre, published_date, isbn }),
        })
        .then(response => {
            if (response.ok) {
                alert('Book returned and added successfully!');
                navigate('/'); // Redirect to home page after successful submission
            } else {
                alert('Failed to add book. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error adding book:', error);
            alert('Failed to add book. Please try again.');
        });
    };

    return (
        <div className="container">
            <h2>Return Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Genre:</label>
                    <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Date (yyyy-mm-dd):</label>
                    <input type="text" value={published_date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>ISBN:</label>
                    <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
                </div>
                <button type="submit">Add Book</button>
                <Link to="/" className="return-link">Return to Library</Link>
            </form>
        </div>
    );
};

export default ReturnBook;
