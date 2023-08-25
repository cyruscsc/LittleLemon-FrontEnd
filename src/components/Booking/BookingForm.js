import React, { useState, useContext } from 'react';
import { UserContext } from '../../UserContext';
import './BookingForm.css';
import { Link } from 'react-router-dom';

const BookingForm = props => {
  const [user, setUser] = useContext(UserContext);

  const defaultInputState = {value: '', isTouch: false};
  const [date, setDate] = useState(defaultInputState);
  const [timeH, setTimeH] = useState(defaultInputState);
  const [timeM, setTimeM] = useState(defaultInputState);
  const [numDiners, setNumDiners] = useState(defaultInputState);
  const [email, setEmail] = useState({...defaultInputState, value: user.email});
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const isEmail = emailAddress => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailAddress);
  const formIsValid = () => date && timeH && timeM && numDiners.value > 0 && numDiners.value < 7 && isEmail(email.value);
  const clearForm = () => {
    setDate(defaultInputState);
    setTimeH(defaultInputState);
    setTimeM(defaultInputState);
    setNumDiners(defaultInputState);
    setEmail({...defaultInputState, value: user.email});
  };
  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${props.backendDomain}/api/bookings`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        user_id: user.user_id,
        email: email.value,
        num_guests: numDiners.value,
        date: date.value,
        time: timeH.value + ':' + timeM.value,
      }),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      clearForm();
      setIsSuccessful(true);
      setIsFailed(false);
    })
    .catch(err => {
      console.log(err);
      setIsSuccessful(false);
      setIsFailed(true);
    });
  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setIsSuccessful(false);
  //   setIsFailed(false);
  //   Math.floor(Math.random() * 2) ? setIsSuccessful(true) : setIsFailed(true);
  //   if (isSuccessful) {clearForm()};
  // };

  const formOpacity = {
    opacity: '50%',
  }
  return (
    <section id='bookingform' className='bg-green text-white bold-18'>
      <div className='super-container'>
        {!user.user_id &&
          <div className='message-container'>
            <div className='login-message'>
              <p className='lead-text text-white'>Please <Link to='/login' className='login-link'>Log in</Link> to make a reservation.</p>
            </div>
          </div>
        }
        <form onSubmit={handleSubmit} className='form-container' style={!user.user_id ? formOpacity : null}>
          <div className='input-container'>
            <label htmlFor='date'>Date</label>
            <input type='date' name='date' value={date.value}
              onChange={e => setDate({...date, value: e.target.value})}
              onBlur={() => setDate({...date, isTouch: true})}
              required id='date' disabled={!user.user_id}
              className={`input-box bg-green text-white medium-16 ${date.value ? 'not-empty' : null } ${!date.value && date.isTouch ? 'required' : null}`}
            />
          </div>
          <div className='input-container'>
            <label htmlFor='time'>Time</label>
            <select name='timeH' value={timeH.value}
              onChange={e => setTimeH({...timeH, value: e.target.value})}
              onBlur={() => setTimeH({...timeH, isTouch: true})}
              required id='timeH' disabled={!user.user_id}
              className={`input-box bg-green text-white medium-16 ${timeH.value ? 'not-empty' : null } ${!timeH.value && timeH.isTouch ? 'required' : null}`}
            >
              <option value=''></option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='18'>18</option>
              <option value='19'>19</option>
              <option value='20'>20</option>
            </select>
            <select name='timeM' value={timeM.value}
              onChange={e => setTimeM({...timeM, value: e.target.value})}
              onBlur={() => setTimeM({...timeM, isTouch: true})}
              required id='timeM' disabled={!user.user_id}
              className={`input-box bg-green text-white medium-16 ${timeM.value ? 'not-empty' : null } ${!timeM.value && timeM.isTouch ? 'required' : null}`}
            >
              <option value=''></option>
              <option value='00'>00</option>
              <option value='30'>30</option>
            </select>

          </div>
          <div className='input-container'>
            <label htmlFor='numDiners'>Number of Diners (maximum: 6)</label>
            <input type='number' name='numDiners' value={numDiners.value}
              onChange={e => setNumDiners({...numDiners, value: e.target.value})}
              onBlur={() => setNumDiners({...numDiners, isTouch: true})}
              required id='numDiners' min='1' max='6' disabled={!user.user_id}
              className={`input-box bg-green text-white medium-16 ${numDiners.value ? 'not-empty' : null } ${numDiners.isTouch && (!numDiners.value | numDiners.value < 1 | numDiners.value > 6)  ? 'required' : null}`}
            />
          </div>
          <div className='input-container'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={email.value}
              onChange={e => {setEmail({...email, value: e.target.value});}}
              onBlur={() => setEmail({...email, isTouch: true})} required id='email' disabled={!user.user_id}
              className={`input-box bg-green text-white medium-16 ${email.value ? 'not-empty' : null } ${!email.value && email.isTouch ? 'required' : null} ${!isEmail(email.value) && email.isTouch ? 'invalid' : null}`}
            />
          </div>
          <div className='input-container'>
            <button type='submit' className='button bold-18 booking-button bg-yellow text-green button-text' disabled={!formIsValid()}>Book now</button>
          </div>
          {isSuccessful && <div className='status-block text-yellow medium-18'><p>Your booking is confirmed!</p></div>}
          {isFailed && <div className='status-block text-orange medium-18'><p>Your booking is not successful, please try again!</p></div>}
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
