import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-center w-100">
            <li className="nav-item">
              <Link className="nav-link" to="/">דף בית</Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                מנועים
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/engines">החלפת מנועים לרכב פרטי</Link></li>
                <li><Link className="dropdown-item" to="/engines-rebuild">שיפוץ מנועים לרכב פרטי</Link></li>
                <li><Link className="dropdown-item" to="/truck-engines">החלפת מנועים למשאיות</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/transmission">גירים</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/turbo">מגדש טורבו</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/body-repair">מחלקת פחחות וצבע</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">השאר פרטים</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">אודות</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;