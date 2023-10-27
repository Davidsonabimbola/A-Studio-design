import React from 'react';
import  '../Testimonials/testimonials.css';

const Testimonials = () => {
  return (
    <div className='testimonialHeader'>

        <div className='header'>
            <h2>What our happy client say</h2>
        </div>

        <div className='testimonialItems'>
            <div className='imageBlock'>
                <img src='./img/testimonialImage1.png' alt='testimonial' className='imageSpace'/>
            </div>

            <div style={{display:'flex', flexDirection:'column', whiteSpace:'nowrap'}}>
                <h4 style={{textAlign:'start'}}>Matthew Paul</h4>
                <p style={{textAlign:'start'}}>Perfect very good job! Thank you for the amazing<br></br>
                design and work. Really impressed with the high quality<br></br>
                and quick turnaround time. Highly recommend</p>
                </div>

                <div className='pictureCollection'>

                    {/* <div style={{display:'flex', position:'absolute'}}> */}
                   
                        <img src='./img/boxtestimonial1.png' alt='imagebox' id='first' className='resize'/>
                   
                   
                        <img src='./img/boxtestimonial2.png' alt='imagebox' id='second' className='resize'/>
                   
                    
                        <img src='./img/boxtestimonial3.png' alt='imagebox' id='third' className='resize'/>
                    
                   
                        <img src='./img/boxtestimonial4.png' alt='imagebox' id='fourth' className='resize'/>
                    
                    
                        <img src='./img/boxtestimonial5.png' alt='imagebox' id='fifth' className='resize'/>
                    
                    
                        <img src='./img/boxtestimonial6.png' alt='imagebox' id='sixth' className='resize'/>
                    
                    
                        <img src='./img/boxtestimonial7.png' alt='imagebox' id='seventh' className='resize'/>
                    
                    
                        <img src='./img/boxtestimonial8.png' alt='imagebox' id='eight' className='resize'/>

                        {/* </div> */}
                   

                </div>

                {/* <div style={{display:'flex'}}>
                <div className='smallCircle1'></div>
                <div className='smallCircle2'></div>
                <div className='smallCircle2'></div>
                <div className='smallCircle2'></div>
                <div className='smallCircle2'></div>
                </div> */}

            

        </div>
    </div>
  )
}

export default Testimonials