import React, { useContext, useState } from 'react'
import { Navigate } from "react-router-dom";
import { UserContext } from '../../UserContext';
import './Login.css'

const Login = props => {
  const [user, setUser] = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
      clearForm();
    });
  }

  const clearForm = () => {
    setUsername('');
    setPassword('');
  }

  return (
    <section id='loginform'>
      <div className='super-container'>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='input-container'>
            <input type='text' name='username' value={username}
              onChange={e => {setUsername(e.target.value)}}
              required id='username' className='input-box bg-green text-white medium-16'
            />
            <label htmlFor='username'>Username</label>
          </div>
          <div className='input-container'>
            <input type='password' name='password' value={password}
              onChange={e => {setPassword(e.target.value)}}
              required id='password' className='input-box bg-green text-white medium-16'
            />
            <label htmlFor='password'>Password</label>
          </div>
          <div className='input-container'>
            <button type='submit' className='button bold-18 booking-button bg-yellow text-green button-text' disabled={!validForm()}>Login</button>
          </div>
        </form>
      </div>
      {user.user_id && <Navigate to='/' />}
    </section>
  );
}

export default Login;
