import React, { useContext, useState } from 'react';
import { Navigate } from "react-router-dom";
import { UserContext } from '../../UserContext';
import './Register.css';

const Register = props => {
  const [user, setUser] = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [usernameIsAvailable, setUsernameIsAvailable] = useState(false);
  const [usernameMsg, setUsernameMsg] = useState('');
  const [emailIsAvailable, setEmailIsAvailable] = useState(false);
  const [emailMsg, setEmailMsg] = useState('');

  const usernameHasLength = () => username.length >= 4 && username.length <= 20;
  const usernameHasNoSpecialChar = () => !/\W+/.test(username);
  const validUsername = () => usernameHasLength() && usernameHasNoSpecialChar() && usernameIsAvailable;
  const emailIsvalid = () => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const validEmail = () => emailIsvalid() && emailIsAvailable;
  const passwordHasLength = () => password.length >= 6 && password.length <= 20;
  const passwordHasNum = () => /\d+/.test(password);
  const passwordHasChar = () => /[A-z]+/.test(password);
  const validPassword = () => passwordHasLength() && passwordHasNum() && passwordHasChar();
  const validForm = () => validUsername() && validEmail() && validPassword() && password === password2;

  const checkUsername = e => {
    fetch(`${props.backendDomain}/api/checkusername`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    })
    .then(res => res.json())
    .then(data => {
      setUsernameIsAvailable(data.available);
      setUsernameMsg(data.message);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const checkEmail = e => {
    fetch(`${props.backendDomain}/api/checkemail`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
    .then(res => res.json())
    .then(data => {
      setEmailIsAvailable(data.available);
      setEmailMsg(data.message);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${props.backendDomain}/api/register`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.message);
      setUser({
        ...user,
        user_id: data.user_id,
        username: data.username,
        email: data.email,
        is_staff: data.is_staff
      });
      console.log(user);
      clearForm();
    })
    .catch(err => {
      console.log(err);
      clearForm();
    });
  }

  const clearForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  }

  return (
    <section id='registerform' className='bg-green text-white bold-18'>
      <div className='super-container'>
        <div className='login-heading'>
          <h2 className='subtitle text-yellow'>Welcome to Little Lemon!</h2>
          <p className='lead-text'>Register an account</p>
        </div>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='input-container'>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' value={username}
              onChange={e => {setUsername(e.target.value)}}
              onBlur={() => {checkUsername()}}
              required id='username' className='input-box bg-green text-white medium-16'
            />
            {usernameMsg && <small className='invalid-message'>{usernameMsg}</small>}
          </div>
          <div className='input-container'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={email}
              onChange={e => {setEmail(e.target.value)}}
              onBlur={() => {checkEmail()}}
              required id='email' className='input-box bg-green text-white medium-16'
            />
            {emailMsg && <small className='invalid-message'>{emailMsg}</small>}
          </div>
          <div className='input-container'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' value={password}
              onChange={e => {setPassword(e.target.value)}}
              required id='password' className='input-box bg-green text-white medium-16'
            />
            <small className={`password-message ${passwordHasLength() && 'requirement-met'}`}> Contains 6 to 20 characters</small>
            <small className={`password-message ${passwordHasChar() && 'requirement-met'}`}> Contains at least 1 letter</small>
            <small className={`password-message ${passwordHasNum() && 'requirement-met'}`}> Contains at least 1 number</small>
          </div>
          <div className='input-container'>
            <label htmlFor='password2'>Enter password again</label>
            <input type='password' name='password2' value={password2}
              onChange={e => {setPassword2(e.target.value)}}
              required id='password2' className='input-box bg-green text-white medium-16'
            />
            {password != password2 && <small className='invalid-message'>Please enter the same password</small>}
          </div>
          <div className='input-container'>
            <button type='submit' className='button bold-18 booking-button bg-yellow text-green' disabled={!validForm()}>Register</button>
          </div>
        </form>
      </div>
      {user.user_id && <Navigate to='/' />}
    </section>
  );
}

export default Register;
