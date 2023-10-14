
import Logo from '../fylo-dark-theme-landing-page-master/images/logo.svg'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className="header">

  
            <figure>
                <img src={Logo} alt='logo' />
            </figure>
            <ul>
               <Link to='/features' className='link'><li>Features</li></Link> 
               <Link to='/team'  className='link'  ><li>Team</li></Link> 
                <li>Sign In</li>
            </ul>
    
      
    </div>
  )
}

export default Header
