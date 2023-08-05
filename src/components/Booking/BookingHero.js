import React from 'react'
import './BookingHero.css'

const BookingHero = props => {
  return (
    <section id='bookinghero'>
      <div className='super-container'>
        <div className='hero-heading'>
          <h1 className='title hero-title'>Little Lemon</h1>
          <h2 className='subtitle hero-subtitle'>Chicago</h2>
          <p className='lead-text hero-lead-text'>Find a table for any occasion.</p>
        </div>
        {/* <img className='hero-image' src='./images/table.jpg' alt='A Table in Little Lemon' /> */}
      </div>
    </section>
  );
}

export default BookingHero;
