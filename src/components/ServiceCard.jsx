import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top service-image" alt={typeof title === 'string' ? title : 'שירות'} />
        <div className="card-body">
          <h3 className="card-title">
            {title}
          </h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ServiceCard;