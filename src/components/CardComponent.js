// CardComponent.js

import React from 'react';
import { Link } from 'react-router-dom';
import './CardComponent.css'; // Import your custom styles

const CardComponent = ({ imageUrl, title, description, route }) => {
  return (
    <div className='card'>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={route}>
        <button className="know-more-button">Know More</button>
      </Link>
    </div>
  );
};

export default CardComponent;

