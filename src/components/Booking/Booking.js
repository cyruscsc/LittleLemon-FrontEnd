import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import BookingHero from "./BookingHero";
import BookingForm from "./BookingForm";
import MyBookings from "./MyBookings";

const Booking = props => {
  const [user, setUser] = useContext(UserContext);

  return (
    <>
      <BookingHero />
      { user.user_id && <MyBookings backendDomain={props.backendDomain} /> }
      <BookingForm />
    </>
  );
};

export default Booking;
