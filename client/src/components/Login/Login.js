import React, { useContext, useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { UserContext } from '../../UserContext';
import './Login.css'

const Login = props => {
  const [user, setUser] = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFailed, setIsFailed] = useState(false);
  const validForm = () => username && password;

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${props.backendDomain}/api/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUser({
        ...user,
        user_id: data.user_id,
        username: data.username,
        email: data.email,
        is_staff: data.is_staff
      });
      clearForm();
    })
    .catch(err => {
      console.log(err);
      setIsFailed(true);
      clearForm();
    });
  }

  const clearForm = () => {
    setUsername('');
    setPassword('');
  }

  return (
    <section id='loginform' className='bg-green text-white bold-18'>
      <div className='super-container'>
        <div className='login-heading'>
          <h2 className='subtitle text-yellow'>Welcome back!</h2>
          <p className='lead-text'>Login to Little Lemon</p>
        </div>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='input-container'>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' value={username}
              onChange={e => {setUsername(e.target.value)}}
              required id='username' className='input-box bg-green text-white medium-16'
            />
          </div>
          <div className='input-container'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' value={password}
              onChange={e => {setPassword(e.target.value)}}
              required id='password' className='input-box bg-green text-white medium-16'
            />
          </div>
          <div className='input-container'>
            <button type='submit' className='button bold-18 booking-button bg-yellow text-green' disabled={!validForm()}>Login</button>
          </div>
          {isFailed &&
          <div className='input-container'>
            <p className='text-orange medium-16'>Incorrect username or password</p>
          </div>
          }
          <div className='input-container'>
            <p>New to Little Lemon? <Link to='/register' className='register-link'>Register</Link> now!</p>
          </div>
        </form>
      </div>
      {user.user_id && <Navigate to='/' />}
    </section>
  );
}

export default Login;
