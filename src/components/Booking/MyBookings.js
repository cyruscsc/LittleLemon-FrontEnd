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

  return (
    <>
      {myBookings.toString()}
    </>
  );
}

export default MyBookings;