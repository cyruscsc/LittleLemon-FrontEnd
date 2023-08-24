import React, { useState, useContext, useEffect } from 'react'
import { Navigate } from "react-router-dom";
import { UserContext } from '../../UserContext';

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
    <>
      {!user.user_id && <Navigate to='/' />}
    </>
  );
}

export default Logout;
