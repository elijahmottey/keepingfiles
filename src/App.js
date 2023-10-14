import Header from './components/header'
import LandingPage from './components/LandingPage';
import './App.css';
import Features from './components/Features';
import Productivity from './components/productivity';
import Team from './components/Team';
import Image from './fylo-dark-theme-landing-page-master/images/bg-quotes.png'
import Footer from './components/Footer'
import Forms from './components/Forms';
import Logo from './fylo-dark-theme-landing-page-master/images/logo.svg'
import { BrowserRouter as Router , Routes ,Route ,Link} from 'react-router-dom';




function App() {
  return (
    <Router>
    <div className="App">

      <Routes>
        <Route exact path='/' element={<>
        <Header/>
        <LandingPage/>
        <Features/>
          <Productivity/>
           <figure className="quote">
        <img src= {Image} alt="quote" />
        </figure>
        <Team/>
        <Forms/>
        <Footer />
        </> }/>

       
      </Routes>
         
      <Routes>
        <Route exact path='/features' element={<>
          <div className="header">
  
      <figure>
          <img src={Logo} alt='logo' />
      </figure>
      <ul>
        <Link to='/' className='link'><li>Homepage</li></Link> 
        <Link to='/team' ><li>Team</li></Link>  
          <li>Sign In</li>
      </ul>


      </div>
          <Features/>
          <Productivity/>
          <Footer />
        </> }/>
      </Routes>
        
       <Routes>
        <Route path='/team' element={
          <>
          <div className="header">
  
          <figure>
              <img src={Logo} alt='logo' />
          </figure>
          <ul>
            <Link to='/' className='link'><li>Homepage</li></Link> 
             <Link to='/features' className='link'><li>Features</li></Link> 
              <li>Sign In</li>
          </ul>
    
    
          </div>
          <figure className="quote">
        <img src= {Image} alt="quote" />
        </figure>
          <Team/>
          <Footer />
       </>
        }/>
       </Routes>
       
        
       
    </div>
    </Router>
  );
}

export default App;
