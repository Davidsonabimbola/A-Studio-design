import React from 'react';
import  '../Business/business.css';

const Business = () => {
  return (
    <div className='topBusinessDiv'>
        <div className='banner'>
             <h1 className='header' style={{textAlign:'start',marginBottom:'2px'}}>How can we help<br></br>
             your Business?</h1>

             <div>
                <p style={{textAlign:'start'}}>We build readymade websites, mobile applications,<br></br>
            and elaborate online business services</p>
                </div>
                </div>

                <div className='underLayBanner'>
                  <div className='cardsDiv'>
                    <div className='cards' id='first' style={{marginTop:'40px'}}>
<img src='./img/boxSearch1.png' alt='biz'/>
<h4>Business idea<br></br>
planning</h4>
<p>We present you a proposal and<br></br>
discuss nitty-gritty like

</p>

                    </div>
                    {/* second card */}
                    <div className='cards' id='second' style={{marginTop:'-20px'}}>
<img src='./img/emptyWallet.png' alt='biz'/>
<h4>Financial planning<br></br>
system</h4>
<p>We present you a proposal and<br></br>
discuss nitty-gritty like

</p>

                    </div>
                    {/* third card */}
                    <div className='cards' id='third' >
<img src='./img/code.png' alt='biz'/>
<h4>Development<br></br>
Website and App</h4>
<p>We present you a proposal and<br></br>
discuss nitty-gritty like

</p>

                    </div>
                    {/* fourth card */}
                    <div className='cards' id='fourth' style={{marginTop:'-60px'}}>
<img src='./img/chartsquare1.png' alt='biz'/>
<h4>Market Analysis<br></br>
project</h4>
<p>We present you a proposal and<br></br>
discuss nitty-gritty like

</p>

                    </div>

                  </div>
                </div>
                </div>
                
  )
}

export default Business