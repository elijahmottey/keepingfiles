import Header from './components/header'
import LandingPage from './components/LandingPage';
import './App.css';
import Features from './components/Features';
import Productivity from './components/productivity';


function App() {
  return (
    <div className="App">
      
        <Header/>
        <LandingPage/>
        <Features/>
        <Productivity/>
    </div>
  );
}

export default App;
