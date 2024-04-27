import React from 'react'
import './BookingHero.css'

const BookingHero = props => {
  return (
    <section id='bookinghero' className='bg-green'>
      <div className='super-container'>
        <div className='grid-container booking-hero-container'>
          <div className='hero-heading'>
            <h1 className='title text-yellow'>Little Lemon</h1>
            <h2 className='subtitle text-white'>Chicago</h2>
            <p className='lead-text text-white'>Find a table for any occasion.</p>
          </div>
          <div className="booking-hero-image">
            <img src='./images/restaurant.jpg' alt='Little Lemon Restaurant' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingHero;
