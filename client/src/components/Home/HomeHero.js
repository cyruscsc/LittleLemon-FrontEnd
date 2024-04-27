import React from "react";
import { Link } from 'react-router-dom';
import './HomeHero.css';

const HomeHero = props => {
  return (
    <section id="homehero" className="bg-green">
      <div className='super-container'>
        <div className="grid-container home-hero-container">
          <div>
            <div className='hero-heading'>
              <h1 className='title text-yellow'>Little Lemon</h1>
              <h2 className='subtitle text-white'>Chicago</h2>
              <p className='lead-text hero-lead-text text-white'>A family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div>
              <Link to="/booking" className="button bold-18 homehero-button bg-yellow text-green">Reserve a Table</Link>
            </div>
          </div>
          <div className="home-hero-image">
            <img src="./images/restaurant-food.jpg" alt="Restaurant Food" className="food-image"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
