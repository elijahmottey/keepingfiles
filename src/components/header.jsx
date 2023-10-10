
import Logo from '../fylo-dark-theme-landing-page-master/images/logo.svg'

function Header() {
  return (
    <div className="header">

  
            <figure>
                <img src={Logo} alt='logo' />
            </figure>
            <ul>
                <li>Features</li>
                <li>Team</li>
                <li>Sign In</li>
            </ul>
    
      
    </div>
  )
}

export default Header
