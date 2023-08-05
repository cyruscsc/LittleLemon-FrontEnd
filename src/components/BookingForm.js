import React from 'react'
import './BookingForm.css'

const BookingForm = props => {
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [numDiners, setNumDiners] = React.useState("");
  const [occasion, setOccasion] = React.useState("");
  const [seatOption, setSeatOption] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState({value: '', isTouch: false});
  const [specialRequest, setSpecialRequest] = React.useState("");

  const isEmail = emailAddress => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailAddress);

  const formIsValid = () => {
    return (
      date && time && numDiners && occasion && seatOption &&
      firstName && lastName && isEmail(email.value)
    );
  };

  return (
    <section id='bookingform'>
      <div className='super-container'>
        <form className='form-container'>
          <div className='input-container'>
            <select name='date' value={date} onChange={e => {setDate(e.target.value);}} id='date' className={`input-box ${date ? 'not-empty' : null }`} required>
              <option value=''></option>
              <option value='value 1'>Value 1</option>
              <option value='value 2'>Value 2</option>
              <option value='value 3'>Value 3</option>
            </select>
            <label htmlFor='date'>Date<span className='required-text'> - required</span></label>
          </div>
          <div className='input-container'>
            <select name='time' value={time} onChange={e => {setTime(e.target.value);}} id='time' className={`input-box ${time ? 'not-empty' : null }`} required>
              <option value=''></option>
              <option value='value 1'>Value 1</option>
              <option value='value 2'>Value 2</option>
              <option value='value 3'>Value 3</option>
            </select>
            <label htmlFor='time'>Time<span className='required-text'> - required</span></label>
          </div>
          <div className='input-container'>
            <select name='numDiners' value={numDiners} onChange={e => {setNumDiners(e.target.value);}} id='numDiners' className={`input-box ${numDiners ? 'not-empty' : null }`} required>
              <option value=''></option>
              <option value='value 1'>Value 1</option>
              <option value='value 2'>Value 2</option>
              <option value='value 3'>Value 3</option>
            </select>
            <label htmlFor='numDiners'>Number of Diners<span className='required-text'> - required</span></label>
          </div>
          <div className='input-container'>
            <select name='occasion' value={occasion} onChange={e => {setOccasion(e.target.value);}} id='occasion' className={`input-box ${occasion ? 'not-empty' : null }`} required>
              <option value=''></option>
              <option value='value 1'>Value 1</option>
              <option value='value 2'>Value 2</option>
              <option value='value 3'>Value 3</option>
            </select>
            <label htmlFor='occasion'>Occasion<span className='required-text'> - required</span></label>
          </div>
          <div className='input-container seating-container'>
            <legend>Seating Options<span className='required-text'> - required</span></legend>
            <div className='seating-option'>
              <input type='radio' name='standard' value='standard' onChange={e => {setSeatOption(e.target.value);}} checked={seatOption==='standard' ? true : false} id='standard' />
              <label htmlFor='standard'>Standard</label>
            </div>
            <div className='seating-option'>
              <input type='radio' name='outside' value='outside' onChange={e => {setSeatOption(e.target.value);}} checked={seatOption==='outside' ? true : false} id='outside' />
              <label htmlFor='outside'>Outside</label>
            </div>
          </div>
          <div className='input-container'>
            <input type='text' name='firstName' value={firstName} onChange={e => {setFirstName(e.target.value);}} id='firstName' className={`input-box ${firstName ? 'not-empty' : null }`} required />
            <label htmlFor='firstName'>First Name<span className='required-text'> - required</span></label>
          </div>
          <div className='input-container'>
            <input type='text' name='lastName' value={lastName} onChange={e => {setLastName(e.target.value);}} id='lastName' className={`input-box ${lastName ? 'not-empty' : null }`} required />
            <label htmlFor='lastName'>Last Name<span className='required-text'> - required</span></label>
          </div>
          <div className='input-container'>
            <input type='email' name='email' value={email.value} onChange={e => {setEmail({...email, value: e.target.value});}} onBlur={() => setEmail({...email, isTouch: true})} id='email' className={`input-box ${email.value ? 'not-empty' : null } ${!email.value && email.isTouch ? 'required' : null} ${!isEmail(email.value) && email.isTouch ? 'invalid' : null}`} required />
            <label htmlFor='email'>Email<span className='required-text'> - required</span><span className='invalid-text'> - invalid</span></label>
          </div>
          <div className='input-container'>
            <input type='text' name='specialRequest' value={specialRequest} onChange={e => {setSpecialRequest(e.target.value);}} id='specialRequest' className={`input-box ${specialRequest ? 'not-empty' : null }`} required />
            <label htmlFor='specialRequest'>Special Request</label>
          </div>
          <div className='input-container'>
            <button type='submit' className='button' disabled={!formIsValid()}>Book now</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
