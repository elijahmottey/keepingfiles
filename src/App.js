import Header from './components/header'
import LandingPage from './components/LandingPage';
import './App.css';
import Features from './components/Features';
import Productivity from './components/productivity';
import Team from './components/Team';



function App() {
  return (
    <div className="App">
         
        <Header/>
        <LandingPage/>
        <Features/>
        <Productivity/>
        <Team/>
    </div>
  );
}

export default App;
