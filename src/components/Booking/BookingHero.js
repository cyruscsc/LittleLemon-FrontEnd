import React from 'react'
import './BookingHero.css'

const BookingHero = props => {
  return (
    <section id='bookinghero'>
      <div className='super-container'>
        {/* <div className='grid-container hero-container'> */}
        <div>
          <div className='hero-heading'>
            <h1 className='title hero-title'>Little Lemon</h1>
            <h2 className='subtitle hero-subtitle'>Chicago</h2>
            <p className='lead-text hero-lead-text'>Find a table for any occasion.</p>
          </div>
          {/* <div className="hero-image-container">
            <img src='./images/restaurant.jpg' alt='Little Lemon Restaurant' />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default BookingHero;
