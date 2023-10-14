import React from 'react'
import Logo from '../fylo-dark-theme-landing-page-master/images/logo.svg'
import Location from '../fylo-dark-theme-landing-page-master/images/icon-location.svg'
import Phone from '../fylo-dark-theme-landing-page-master/images/icon-phone.svg'
import Email from '../fylo-dark-theme-landing-page-master/images/icon-email.svg'
import { FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'


function Footer() {
  return (
    <div className='footer'>
      <figure className='logo'>
        <img src={Logo} alt='logo'/>
      </figure>
      <section>
        <figure>
            <img src={ Location} alt='location'/>
            <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua
            </p>
           

        </figure>
        <div>
            <section className='sec'>
                <figure>
                    <img src={Phone} alt="phone" />
                </figure>
                <p className='phone1'> +1-543-123-4567</p>
            </section>
            <section className='sec'>
                <figure><img src={Email} alt="Email" /></figure>
                <p className='email1'>  example@fylo.com</p>
            </section>
        </div>
        <ul>
                <li>About us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
            </ul>

        <ul>
                <li>Contact us</li>
                <li>Terms</li>
                <li>Privacy</li>
               
            </ul>
            <section className='sec icon-m' id='flex'>
               <div className='icon'> <FaFacebook color='white' className='icons' /></div>
                <div className='icon' ><FaTwitter color='white'  className='icons'/></div>
                <div  className='icon'><FaInstagram color='white'  className='icons'/></div>
            </section>
      </section>
    </div>
  )
}

export default Footer
