import React from "react";
import { Link } from 'react-router-dom';
import './HomeHero.css';

const HomeHero = props => {
  return (
    <section id="homehero">
      <div className='super-container'>
        <div className="grid-container hero-container">
          <div className="hero-text-container">
            <div className='hero-heading'>
              <h1 className='title hero-title'>Little Lemon</h1>
              <h2 className='subtitle hero-subtitle'>Chicago</h2>
              <p className='lead-text hero-lead-text'>A family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className="button-container">
              <Link to="/booking" className="hero-button">Reserve a Table</Link>
            </div>
          </div>
          <div className="hero-image-container">
            <img src="./images/restaurant-food.jpg" alt="Restaurant Food" className="food-image"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
