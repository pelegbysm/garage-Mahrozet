import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-center p-4">
      <img src="/images/logo.png" alt="לוגו מוסך מחרוזת" className="logo" />
      <div className="contact-buttons">
        <a href="tel:+972535800778" className="btn btn-outline-primary">
          הרימו טלפון
        </a>
        <a 
          href="https://wa.me/+972504251000" 
          className="btn btn-success" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i> שלח הודעה
        </a>
      </div>
      <p>מתמחים בהחלפת מנועים, גירים ומגדשי טורבו</p>
      <Navigation />
    </header>
  );
};

export default Header;