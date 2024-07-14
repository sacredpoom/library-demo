import React from 'react';
import './styles/App.css';
import Hero from './components/Hero';
import BookList from './components/BookList';
import Checkout from './components/Checkout';
import ReturnBook from './components/ReturnBook';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Hero />
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/return-book/" element={<ReturnBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
