import './App.css';
import MeetOurTeam from './Components/MeetOurTeam';
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <MeetOurTeam />
  
      <Portfolio/>
   </>
  );
}
export default App;

