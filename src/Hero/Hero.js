import React from 'react'
import Button from 'react-bootstrap/Button';
import  '../Hero/hero.css';
import { Container } from 'react-bootstrap';
// import image1 from '../image1.png'



const Hero = () => {
  return (
    <Container>
     <div className='firstDivheader' >
     {/* <div className='topDiv'> */}

<div className='banner'>
    <h2 className='her' style={{textAlign:'start'}}>A Digital Product Agency</h2>
    <p className='theParagraph'> Leading digital agency with solid design and development<br></br>
    expertise. We build readymade website, mobile applications,<br></br>
    and elaborate online business services.
         </p>
         <div className='buttonDiv'>
         <Button className='firstbt'><p style={{textAlign:'center', paddingLeft:'25px'}}>Contact Now</p></Button>{' '}
         </div>
</div>

{/* the circle underlay */}
<div className='circle'></div>

<div className='imageDiv'>
    <img src= "./img/image1.png" alt='image1' className='imageSize'/>
</div>


  </div>
  </Container>
  
  

 

 
  )
}

export default Hero