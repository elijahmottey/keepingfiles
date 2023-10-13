import Header from './components/header'
import LandingPage from './components/LandingPage';
import './App.css';
import Features from './components/Features';
import Productivity from './components/productivity';
import Team from './components/Team';
import Image from './fylo-dark-theme-landing-page-master/images/bg-quotes.png'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
         
        <Header/>
        <LandingPage/>
        <Features/>
       
        <Productivity/>
        <figure className="quote">
        <img src= {Image} alt="image" />
        </figure>
        <Team/>
        <Footer />
    </div>
  );
}

export default App;
