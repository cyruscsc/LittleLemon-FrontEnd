import React from 'react'
import './BookingForm.css'

const BookingForm = props => {
  const defaultInputState = {value: '', isTouch: false};
  const [date, setDate] = React.useState(defaultInputState);
  const [time, setTime] = React.useState(defaultInputState);
  const [numDiners, setNumDiners] = React.useState(defaultInputState);
  const [occasion, setOccasion] = React.useState("");
  const [seatOption, setSeatOption] = React.useState("");
  const [firstName, setFirstName] = React.useState(defaultInputState);
  const [lastName, setLastName] = React.useState(defaultInputState);
  const [email, setEmail] = React.useState(defaultInputState);
  const [specialRequest, setSpecialRequest] = React.useState("");
  const [isSuccessful, setIsSuccessful] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);

  const isEmail = emailAddress => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailAddress);
  const formIsValid = () => date && time && numDiners && firstName && lastName && isEmail(email.value);
  const clearForm = () => {
    setDate(defaultInputState);
    setTime(defaultInputState);
    setNumDiners(defaultInputState);
    setOccasion("");
    setSeatOption("");
    setFirstName(defaultInputState);
    setLastName(defaultInputState);
    setEmail(defaultInputState);
    setSpecialRequest("");
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSuccessful(false);
    setIsFailed(false);
    Math.floor(Math.random() * 2) ? setIsSuccessful(true) : setIsFailed(true);
    if (isSuccessful) {clearForm()};
  };

  return (
    <section id='bookingform'>
      <div className='super-container'>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='input-container'>
            <select name='date' value={date.value}
              onChange={e => {setDate({...date, value: e.target.value});}}
              onBlur={() => setDate({...date, isTouch: true})} id='date'
              className={`input-box ${date.value ? 'not-empty' : null } ${!date.value && date.isTouch ? 'required' : null}`}
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
              onBlur={() => setTime({...time, isTouch: true})} id='time'
              className={`input-box ${time.value ? 'not-empty' : null } ${!time.value && time.isTouch ? 'required' : null}`}
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
              onBlur={() => setNumDiners({...numDiners, isTouch: true})} id='numDiners'
              className={`input-box ${numDiners.value ? 'not-empty' : null } ${!numDiners.value && numDiners.isTouch ? 'required' : null}`}
            >
              <option value=''></option>
              <option value='value 1'>1-2</option>
              <option value='value 2'>3-4</option>
              <option value='value 3'>5-6</option>
            </select>
            <label htmlFor='numDiners'>Number of Diners<span className='required-text'> - required</span></label>
          </div>
          <div className='input-container'>
            <select name='occasion' value={occasion}
              onChange={e => {setOccasion(e.target.value);}}
              className={`input-box ${occasion ? 'not-empty' : null }`}
            >
              <option value=''></option>
              <option value='value 1'>Birthday</option>
              <option value='value 2'>Engagement</option>
              <option value='value 3'>Anniversary</option>
            </select>
            <label htmlFor='occasion'>Occasion (optional)</label>
          </div>
          <div className='input-container seating-container'>
            <legend className={`${seatOption ? 'not-empty' : null }`}>Seating Options (optional)</legend>
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
            <input type='text' name='firstName' value={firstName.value}
              onChange={e => {setFirstName({...firstName, value: e.target.value});}}
              onBlur={() => setFirstName({...firstName, isTouch: true})} id='firstName'
              className={`input-box ${firstName.value ? 'not-empty' : null } ${!firstName.value && firstName.isTouch ? 'required' : null}`}
            />
            <label htmlFor='firstName'>First Name<span className='required-text'> - required</span></label>
          </div>
          <div className='input-container'>
            <input type='text' name='lastname' value={lastName.value}
              onChange={e => {setLastName({...lastName, value: e.target.value});}}
              onBlur={() => setLastName({...lastName, isTouch: true})} id='lastname'
              className={`input-box ${lastName.value ? 'not-empty' : null } ${!lastName.value && lastName.isTouch ? 'required' : null}`}
            />
            <label htmlFor='lastName'>Last Name<span className='required-text'> - required</span></label>
          </div>
          <div className='input-container'>
            <input type='email' name='email' value={email.value}
              onChange={e => {setEmail({...email, value: e.target.value});}}
              onBlur={() => setEmail({...email, isTouch: true})} id='email' 
              className={`input-box ${email.value ? 'not-empty' : null } ${!email.value && email.isTouch ? 'required' : null} ${!isEmail(email.value) && email.isTouch ? 'invalid' : null}`}
            />
            <label htmlFor='email'>Email<span className='required-text'> - required</span><span className='invalid-text'> - invalid</span></label>
          </div>
          <div className='input-container'>
            <input type='text' name='specialRequest' value={specialRequest} onChange={e => {setSpecialRequest(e.target.value);}} id='specialRequest' className={`input-box ${specialRequest ? 'not-empty' : null }`} />
            <label htmlFor='specialRequest'>Special Request (optional)</label>
          </div>
          <div className='input-container'>
            <button type='submit' className='button' disabled={!formIsValid()}>Book now</button>
          </div>
          {isSuccessful && <div className='status-block successful'><p>Your booking is confirmed!</p></div>}
          {isFailed && <div className='status-block failed'><p>Your booking is not successful, please try again!</p></div>}
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
