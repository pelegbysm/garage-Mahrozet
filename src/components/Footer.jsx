import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-3">
      <div className="contact-item">
        <i className="fas fa-phone"></i>
        <h3>מוסך מחרוזת</h3>
        <h4>טלפון: 050-425-1000</h4>
      </div>
      <div className="contact-item">
        <i className="fas fa-map-marker-alt"></i>
        <h4>כתובת: רחוב המחרוזת 35, תל אביב</h4>
      </div>
      <div className="builder">
        <h6>נבנה על ידי פלג בן יקר&copy;</h6>
      </div>
    </footer>
  );
};

export default Footer;