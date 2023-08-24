import { useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import { Routes, Route } from 'react-router-dom';
import Base from './components/Base/Base';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import './App.css';
import Logout from './components/Logout/Logout';

const backendDomain = 'http://127.0.0.1:8000';
const defaultUserState = {
  user_id: '',
  username: '',
  email: '',
  is_staff: ''
};

const App = () => {
  const [user, setUser] = useState(defaultUserState);
  const providerValue = [user, setUser];

  const getUser = () => {
    fetch(`${backendDomain}/api/user`, {
      method: 'GET',
      credentials: 'include',
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.user_id) {
        setUser({
          ...user,
          user_id: data.user_id,
          username: data.username,
          email: data.email,
          is_staff: data.is_staff
        });
      }
      console.log(user);
    })
    .catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={providerValue}>
      <Base>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/booking' element={<Booking backendDomain={backendDomain} />}/>
          <Route path='/register' element={<Register backendDomain={backendDomain} />} />
          <Route path='/login' element={<Login backendDomain={backendDomain} />} />
          <Route path='/logout' element={<Logout backendDomain={backendDomain} defaultUserState={defaultUserState} />} />
        </Routes>
      </Base>
    </UserContext.Provider>
  );
}

export default App;
