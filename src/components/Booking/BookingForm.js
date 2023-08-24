import React from 'react'
import './BookingForm.css'

const BookingForm = props => {
  const defaultInputState = {value: '', isTouch: false};
  const [date, setDate] = React.useState(defaultInputState);
  const [time, setTime] = React.useState(defaultInputState);
  const [numDiners, setNumDiners] = React.useState(defaultInputState);
  const [email, setEmail] = React.useState(defaultInputState);
  const [isSuccessful, setIsSuccessful] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);

  const isEmail = emailAddress => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailAddress);
  const formIsValid = () => date && time && numDiners && isEmail(email.value);
  const clearForm = () => {
    setDate(defaultInputState);
    setTime(defaultInputState);
    setNumDiners(defaultInputState);
    setEmail(defaultInputState);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSuccessful(false);
    setIsFailed(false);
    Math.floor(Math.random() * 2) ? setIsSuccessful(true) : setIsFailed(true);
    if (isSuccessful) {clearForm()};
  };

  return (
    <section id='bookingform' className='bg-green text-white bold-18'>
      <div className='super-container'>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='input-container'>
            <select name='date' value={date.value}
              onChange={e => {setDate({...date, value: e.target.value});}}
              onBlur={() => setDate({...date, isTouch: true})} required id='date'
              className={`input-box bg-green text-white medium-16 ${date.value ? 'not-empty' : null } ${!date.value && date.isTouch ? 'required' : null}`}
            >
              <option value=''></option>
              <option value='value 1'>Value 1</option>
              <option value='value 2'>Value 2</option>
              <option value='value 3'>Value 3</option>
            </select>
            <label htmlFor='date'>Date<span className='required-text'> - required</span></label>
          </div>
          <div className='input-container'>
            <select name='time' value={time.value}
              onChange={e => {setTime({...time, value: e.target.value});}}
              onBlur={() => setTime({...time, isTouch: true})} required id='time'
              className={`input-box bg-green text-white medium-16 ${time.value ? 'not-empty' : null } ${!time.value && time.isTouch ? 'required' : null}`}
            >
              <option value=''></option>
              <option value='value 1'>Value 1</option>
              <option value='value 2'>Value 2</option>
              <option value='value 3'>Value 3</option>
            </select>
            <label htmlFor='time'>Time<span className='required-text'> - required</span></label>
          </div>
          <div className='input-container'>
            <select name='numDiners' value={numDiners.value}
              onChange={e => {setNumDiners({...numDiners, value: e.target.value});}}
              onBlur={() => setNumDiners({...numDiners, isTouch: true})} required id='numDiners'
              className={`input-box bg-green text-white medium-16 ${numDiners.value ? 'not-empty' : null } ${!numDiners.value && numDiners.isTouch ? 'required' : null}`}
            >
              <option value=''></option>
              <option value='value 1'>1-2</option>
              <option value='value 2'>3-4</option>
              <option value='value 3'>5-6</option>
            </select>
            <label htmlFor='numDiners'>Number of Diners<span className='required-text'> - required</span></label>
          </div>
          <div className='input-container'>
            <input type='email' name='email' value={email.value}
              onChange={e => {setEmail({...email, value: e.target.value});}}
              onBlur={() => setEmail({...email, isTouch: true})} required id='email' 
              className={`input-box bg-green text-white medium-16 ${email.value ? 'not-empty' : null } ${!email.value && email.isTouch ? 'required' : null} ${!isEmail(email.value) && email.isTouch ? 'invalid' : null}`}
            />
            <label htmlFor='email'>Email<span className='required-text'> - required</span><span className='invalid-text'> - invalid</span></label>
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
