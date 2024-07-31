
import './App.css';
import Header from "./Components/Header";
import Features from "./Components/Features";
import Portfolio from "./Components/Portfolio";
import Testimonial from './Components/Testimonial';
import MeetOurTeam from './Components/MeetOurTeam';
import Footer from "./Components/Footer";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
