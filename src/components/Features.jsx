import React from 'react'
import Figure1 from '../fylo-dark-theme-landing-page-master/images/icon-access-anywhere.svg'
import Feature2 from  '../fylo-dark-theme-landing-page-master/images/icon-security.svg'
import Feature3 from  '../fylo-dark-theme-landing-page-master/images/icon-collaboration.svg'
import Feature4 from  '../fylo-dark-theme-landing-page-master/images/icon-any-file.svg'

function Features() {
  return (
    <>
    <div className='feature1'>
       <figure>
           <img  src={Figure1}  alt='feature anywhere'/>

           <figcaption>
          <h3>Access your files, anywhere</h3> 
          <p>The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere.</p>
           </figcaption>
       </figure>

       <figure>
           <img  src={Feature2}  alt='feature anywhere'/>

           <figcaption>
          <h3> Security you can trust</h3> 
          <p>2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files.</p>
           </figcaption>
       </figure>
    </div>

    <div  className='feature2'>
    <figure>
           <img  src={Feature3}  alt='feature anywhere'/>

           <figcaption>
          <h3>  Real-time collaboration</h3> 
          <p>  Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required.</p>
           </figcaption>
       </figure>
        
       <figure>
           <img  src={Feature4}  alt='feature anywhere'/>

           <figcaption>
          <h3> Store any type of file</h3> 
          <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared.</p>
           </figcaption>
       </figure>

    </div>
    </>
  )
}

export default Features
