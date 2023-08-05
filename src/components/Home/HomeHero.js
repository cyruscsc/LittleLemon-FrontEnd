import React from "react";
import './HomeHero.css';

const HomeHero = props => {
  return (
    <section id="homehero">
      <div className='super-container'>
        <div className='hero-heading'>
          <h1 className='title hero-title'>Little Lemon</h1>
          <h2 className='subtitle hero-subtitle'>Chicago</h2>
          <p className='lead-text hero-lead-text'>A family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className="button-container">
          <a href="/booking" className="button">Reserve a Table</a>
        </div>
      </div>
    </section>
  );
}

export default HomeHero