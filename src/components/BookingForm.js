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
  const [email, setEmail] = React.useState("");
  const [specialRequest, setSpecialRequest] = React.useState("");
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
            <label htmlFor='date'>Date</label>
          </div>
          <div className='input-container'>
            <select name='time' value={time} onChange={e => {setTime(e.target.value);}} id='time' className={`input-box ${time ? 'not-empty' : null }`} required>
              <option value=''></option>
              <option value='value 1'>Value 1</option>
              <option value='value 2'>Value 2</option>
              <option value='value 3'>Value 3</option>
            </select>
            <label htmlFor='time'>Time</label>
          </div>
          <div className='input-container'>
            <select name='numDiners' value={numDiners} onChange={e => {setNumDiners(e.target.value);}} id='numDiners' className={`input-box ${numDiners ? 'not-empty' : null }`} required>
              <option value=''></option>
              <option value='value 1'>Value 1</option>
              <option value='value 2'>Value 2</option>
              <option value='value 3'>Value 3</option>
            </select>
            <label htmlFor='numDiners'>Number of Diners</label>
          </div>
          <div className='input-container'>
            <select name='occasion' value={occasion} onChange={e => {setOccasion(e.target.value);}} id='occasion' className={`input-box ${occasion ? 'not-empty' : null }`} required>
              <option value=''></option>
              <option value='value 1'>Value 1</option>
              <option value='value 2'>Value 2</option>
              <option value='value 3'>Value 3</option>
            </select>
            <label htmlFor='occasion'>Occasion</label>
          </div>
          <div className='input-container'>
            <legend>Seating Options</legend>
            <div>
              <input type='radio' name='standard' value='standard' onChange={e => {setSeatOption(e.target.value);}} checked={seatOption==='standard' ? true : false} id='standard' />
              <label htmlFor='standard'>Standard</label>
            </div>
            <div>
              <input type='radio' name='outside' value='outside' onChange={e => {setSeatOption(e.target.value);}} checked={seatOption==='outside' ? true : false} id='outside' />
              <label htmlFor='outside'>Outside</label>
            </div>
          </div>
          <div className='input-container'>
            <input type='text' name='firstName' value={firstName} onChange={e => {setFirstName(e.target.value);}} id='firstName' className={`input-box ${firstName ? 'not-empty' : null }`} required />
            <label htmlFor='firstName'>First Name</label>
          </div>
          <div className='input-container'>
            <input type='text' name='lastName' value={lastName} onChange={e => {setLastName(e.target.value);}} id='lastName' className={`input-box ${lastName ? 'not-empty' : null }`} required />
            <label htmlFor='lastName'>Last Name</label>
          </div>
          <div className='input-container'>
            <input type='email' name='email' value={email} onChange={e => {setEmail(e.target.value);}} id='email' className={`input-box ${email ? 'not-empty' : null }`} required />
            <label htmlFor='email'>Email</label>
          </div>
          <div className='input-container'>
            <input type='text' name='specialRequest' value={specialRequest} onChange={e => {setSpecialRequest(e.target.value);}} id='specialRequest' className={`input-box ${specialRequest ? 'not-empty' : null }`} required />
            <label htmlFor='specialRequest'>Special Request</label>
          </div>
          <div className='input-container'>
            <button type='submit' className='button'>Book now</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
