import './App.css';
import Navbar from './components/Navbar';
import BookingHero from './components/BookingHero';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <BookingHero />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
