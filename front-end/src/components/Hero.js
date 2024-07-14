import React from 'react';
import '../styles/Hero.css';

// The worlds most boring Hero
const Hero = () => {
    return (
        <div className="hero">
            <h1 className="hero-title">Hi! Welcome to my demo.</h1>
            <p className="hero-description">My name is Joe Veneski, and my dream is to become a software developer. I would love to hone my skills and create innovative solutions with your organization, just give me a chance!</p>
            <br />
            <p className="hero-description">This web page displays in-stock books for a library. Users can browse books by genre, checkout (DESTROY) a book, or return (CREATE) a book!</p>
        </div>
    );
};

export default Hero;