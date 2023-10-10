import Image from "../fylo-dark-theme-landing-page-master/images/illustration-intro.png"


function LandingPage() {
  return (
    <div className="landing">
      <figure>
        <img src={Image}  alt="illustration-intro.png"/>
      </figure>
      <article>
        <h2>
  All your files in one secure location, </h2>
  <h2>accessible anywhere.</h2>
  <p> Fylo stores all your most important files in one secure location.  <br/> Access them wherever 
  you need, share and collaborate with <br/> friends family, and co-workers.</p>
      </article>
      <button>Get Started</button>
    </div>
  )
}

export default LandingPage
