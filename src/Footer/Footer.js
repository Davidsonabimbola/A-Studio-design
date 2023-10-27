import React from 'react';
import  '../Footer/footer.css';

const Footer = () => {
  return (
    <div className='mainDiv'>
    <div className='topFooterDiv'>
        <div className='divOne'>
            <h2>A+ Studio</h2>
            <p>Leading digital agency with solid design<br></br>
            and development expertise. We build<br></br>
            readymode websites, mobile applications,<br></br>
            and elaborate online business services
            <div className='socialMedia'>
                <img src='./img/facebook.png' alt='facebook'/>
                <img src='./img/Linkedin.png' alt='linkedin'/>
                <img src='./img/twitter.png' alt='twitter'/>
            </div>

            </p>
        </div>

        <div className='secondDivFooter'>
            <div className='whatWeDo'>
                
            <h2>What We Do</h2>
            <div className='textpad'>
            <p>Web Design</p>
            <p>App Design</p>
            <p>Social Media Manage</p>
            <p>Market Analysis Project</p>
            </div>
            </div>

            <div className='whatWeDo'>
                <h2>Company</h2>
                <div className='textpad'>
                <p>About Us</p>
                <p>Career</p>
                <p>Become Investor</p>
                </div>
            </div>
            
            <div className='whatWeDo'>
            <h2>Support</h2>
            <div className='textpad'>
                <p>FAQ</p>
                <p>Policy</p>
                <p>Become Investor</p>              
                </div>
</div>
<div className='whatWeDo'>
<h2>Contact</h2>
<div className='textpad'>
                <p>Whatsapp</p>
                <p>Support 24</p>
                </div>
                
                </div>


            
        </div>

    </div>
    </div>
  )
}

export default Footer