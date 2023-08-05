import Navbar from "./Navbar";
import Footer from "./Footer";

const Base = ({children}) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Base;
