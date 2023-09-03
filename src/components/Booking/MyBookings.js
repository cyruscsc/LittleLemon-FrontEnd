import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../UserContext';
import './MyBookings.css'

const defaultMyBookingsState = [];

const MyBookings = props => {
  const [user, setUser] = useContext(UserContext);
  const [myBookings, setMyBookings] = useState(defaultMyBookingsState);

  const getMyBookings = () => {
    fetch(`${props.backendDomain}/api/bookings`, {
      method: 'GET',
      credentials: 'include',
    })
    .then(res => res.json())
    .then(data => {
      setMyBookings(data);
    })
    .catch(err => {
      console.log(err);
      setMyBookings(defaultMyBookingsState);
    });
  }

  useEffect(() => {
    getMyBookings();
  }, []);

  const constructor = bookingObject => {
    return (
      <article className='grid-container booking bg-white' key={bookingObject.id}>
        <div className='booking-detail'>
          <h3><i className="fa-solid fa-calendar" />  {bookingObject.date}</h3>
        </div>
        <div className='booking-detail flex-container'>
          <span><i className="fa-solid fa-clock" />  {bookingObject.time}</span>
          <span><i className="fa-solid fa-user" />  {bookingObject.num_guests}</span>
        </div>
        <div className='booking-detail'>
          <p><i className="fa-solid fa-envelope" />  {bookingObject.email}</p>
        </div>
      </article>
    );
  }

  return (
    <section id='mybookings' className='bg-green'>
      <div className='super-container'>
        <h2 className='subtitle text-pink'>My Bookings</h2>
        <div className='grid-container bookings-container'>
          {myBookings.length===0 ? <p className='text-white medium-16'>You don't have any booking yet.</p> : myBookings.map(booking => constructor(booking))}
        </div>
      </div>
    </section>
  );
}

export default MyBookings;
