import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';

// This component handles the checking out of books (DELETING from database)
// Optionally, return to library button to navigate back without deleting
// Not sure why I used inline styling on this page instead of making .css like the other
// pages, but we can say we are demonstrating both approaches

const Checkout = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  // retrieve book by ID
  useEffect(() => {
    fetch(`http://localhost:8000/api/books/${id}/`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [id]);

  // DELETE book from books when CHECKOUT
  const handleCheckout = () => {
    fetch(`http://localhost:8000/api/books/${id}/`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          alert('Book checked out successfully and deleted!');
          navigate('/'); // Redirect to home page after successful checkout
        } else {
          alert('Failed to check out book. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error checking out book:', error);
        alert('Failed to check out book. Please try again.');
      });
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2>Checkout Book:</h2>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Date: {book.date}</p>
      <p>ISBN: {book.isbn}</p>
      <button style={{ color: "purple" }} onClick={handleCheckout}>Checkout</button>
      <br />
      <br />
      <Link style={{ color: "cyan" }} to="/" className="return-link">Return to Library</Link>
    </div>
  );
};

export default Checkout;