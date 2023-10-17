
import Image from '../fylo-dark-theme-landing-page-master/images/illustration-stay-productive.png'
import Arrow from '../fylo-dark-theme-landing-page-master/images/icon-arrow.svg'

function Productivity() {
  return (
    <div className='productivity'>
        <figure>
            <img src={Image} alt="productivity"/>
        </figure>

        <article>
            <h2>Stay productive, wherever you are</h2>
            <p> Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs.</p>
<p>  Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required.</p>
            <a href="#" style={{
              color:'white'
            }}> See how Fylo works <img src={Arrow} alt='arrow' /></a>
        </article>
      
    </div>
  )
}

export default Productivity
