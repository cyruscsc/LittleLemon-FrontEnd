import React, { useState, useContext, useEffect } from 'react'
import { Navigate } from "react-router-dom"
import { UserContext } from '../../UserContext'
import './Logout.css'

const Logout = props => {
  const [user, setUser] = useContext(UserContext);

  const logout = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    fetch(`${props.backendDomain}/api/logout`, {
      method: 'POST',
      credentials: 'include',
    })
    .then(res => {
      setUser(props.defaultUserState)
    })
    .catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    logout();
  }, []);

  return (
    <section id='logout' className='bg-white'>
      <div className='super-container'>
        <div className=' grid-container logout-container bg-white'>
          <h2>Loging out...</h2>
          <p>You will be redirected to home page in 3 seconds.</p>
          {!user.user_id && <Navigate to='/' />}
        </div>
      </div>
    </section>
  );
}

export default Logout;
