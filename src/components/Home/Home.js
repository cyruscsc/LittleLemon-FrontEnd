import HomeHero from "./HomeHero";
import Specials from "./Specials";
import Reviews from "./Reviews";
import About from "./About";

const Home = props => {
  return (
    <>
      <HomeHero />
      <Specials />
      <Reviews />
      <About />
    </>
  );
};

export default Home;
