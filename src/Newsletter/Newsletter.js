import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import  '../Newsletter/newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const submitEmail = (event)=>{
    setEmail(event.currentTarget.value)
  }

    const handleSubscribe = () =>{
      if (email.trim()=== '') {
          alert('Please enter a valid email address.');
      }
      else {
          alert('Subscribed with email:');
      }
  }

  return (
<div className='topOfNewsletter' >
    <div className='topDivNews'>
    <div className='newsletter'>
        <h2>Subscribe Newsletter</h2>
        <p style={{marginTop:'-10px'}}>I will update good news and promotion service not spam</p>
    </div>

    <div className='secondDiv'>
        <div className='addressBox'>
        
        <input className='mail' type="email" placeholder ='Enter your Email...' value={email} onChange={submitEmail}/>
        <Button className='buttonsecond'>
          <p className='buttonsecondText'onClick={handleSubscribe}>Contact Now</p></Button>
        </div>

    </div>
    </div>
    </div>
  )
}

export default Newsletter