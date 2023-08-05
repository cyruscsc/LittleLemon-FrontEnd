import './App.css';
import {Routes, Route} from 'react-router-dom';
import Base from './components/Base/Base';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';

const App = () => {
  return (
    <>
      <Base>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/booking' element={<Booking />}/>
        </Routes>
      </Base>
    </>
  );
}

export default App;
