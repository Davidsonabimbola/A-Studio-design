import React from 'react'
import { useState } from 'react';

// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import '../Header/header.css'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
<Navbar className='oneHeader'>
 {/* style={{backgroundColor:'#fff'}} > */}

<div style={{display:'flex', gap:'50px', marginLeft:'20px', paddingBottom:'20px'}}>
        <p style={{paddingLeft:'50px'}}> <span style={{fontWeight:'bold'}}>A+</span>Studio</p>

            <ul className='theHeaderList'>
            <li style={{marginRight:'10px'}}><a href="#Home" style={{textDecoration:'none', color:'#000'}}>Home</a></li>
            <li style={{marginRight:'10px'}}><a href="#What we do"style={{textDecoration:'none',color:'#000'}}>What we do</a></li>
            <li style={{marginRight:'10px'}}><a href="#Services"style={{textDecoration:'none', color:'#000'}}>Service</a></li>
            <li style={{marginRight:'10px'}}><a href="#Project"style={{textDecoration:'none', color:'#000'}}>Project</a></li>
            <li style={{marginRight:'10px'}}><a href="#Contact"style={{textDecoration:'none', color:'#000'}}>Contact</a></li>
</ul>
             </div>
        <div className= {`hamburger-button ${isOpen? 'open' : ''}`} onClick={toggleMenu} >
<div className='bar'></div>
<div className='bar'></div>
<div className='bar'></div>
<nav 
className={`mobileNav ${isOpen? 'openDrawer': ''}`}>
          <a href = "#work">Work</a>
          <a href = "#contact">Contact</a>
          <a href = "Projects">Projects</a>
          < a href = "Home">Home</a>
          <a href=" What we do">What we do</a>
 </nav> 
</div> 
</Navbar>

        
         )
        }
        
        export default Header


        
        
 