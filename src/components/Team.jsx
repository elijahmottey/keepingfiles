import Image1 from '../fylo-dark-theme-landing-page-master/images/profile-1.jpg'
import Image2 from '../fylo-dark-theme-landing-page-master/images/profile-2.jpg'
import Image3 from '../fylo-dark-theme-landing-page-master/images/profile-3.jpg'
const description = "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
const position = " Founder & CEO, Huddle"

function Team() {

  return (
    <div className='team'>
     <section>
     <p>{description}</p>
     <aside>
       <figure> 
        <img src={Image1} alt="ceo"/>
          </figure>
    <div>
      <h3>{`Satish Patel`}</h3>
    <p>{position}</p>
    </div>
     </aside>
     
     </section>
        

     <section>
     <p>{description}</p>
     <aside>
       <figure> 
        <img src={Image2} alt="ceo"/>
          </figure>
    <div>
      <h3>{`Bruce McKenziel`}</h3>
    <p>{position}</p>
    </div>
     </aside>
     </section>

     <section>
     <p>{description}</p>
     <aside>
       <figure> 
        <img src={Image3} alt="ceo"/>
          </figure>
    <div>
      <h3>{`Iva Boyd`}</h3>
    <p>{position}</p>
    </div>
     </aside>
     </section>

    </div>
  )
}

export default Team
