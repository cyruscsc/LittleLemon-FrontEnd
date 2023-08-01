import './App.css';
import Nav from './components/Nav';
import BookingHero from './components/BookingHero';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <BookingHero />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
