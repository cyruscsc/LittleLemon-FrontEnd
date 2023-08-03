import React from 'react'

const BookingForm = props => {
  const [availableDates, setAvailableDates] = React.useState(['date1', 'date2', 'date3']);
  const [availableTime, setAvailableTime] = React.useState(['time1', 'time2', 'time3']);
  const [occasions, setOccasions] = React.useState(['Daily', 'Birthday', 'Engagement', 'Anniversary']);
  const dateRef = React.useRef(null);
  const timeRef = React.useRef(null);
  const dinersRef = React.useRef(null);
  const occasionRef = React.useRef(null);
  return (
    <section id='bookingform'>
      <div className='super-container'>
        <form>
          {/* Todo: Create a controlled form */}
          <select name='date' id='date'>
            {/* Todo: Create list components */}
          </select>
          <select name='time' id='time'>
            {/* Todo: Create list components */}
          </select>
          <select name='diners' id='diners'>
            {/* Todo: Create list components */}
          </select>
          <button type='submit'>Book now</button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
