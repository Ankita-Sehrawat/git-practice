// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import './App.css';
import MeetOurTeam from './Components/MeetOurTeam';
import Features from "./Components/Features";
import Header from './Components/Header'
import Portfolio from "./Components/Portfolio";
import Footer from './Components/Footer';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <>
      <Header />
      <Features />
      <Portfolio />
      <Testimonial />
      <MeetOurTeam />
      <Footer />
    </>
  );
}
export default App;

