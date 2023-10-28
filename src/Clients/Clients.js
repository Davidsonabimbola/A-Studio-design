import React from 'react';
import  '../Clients/clients.css';

const Clients = () => {
  return (
<div className='banner'>
        <div
        style={{display:'flex', flexDirection:'column'}}>
             <h1 className='hed'>Our Client</h1>

             <div className='clint'>

                <div>
                <p className='clientParagraph'>Several selected clients, who already<br></br>
            believe in our service</p>
                </div>
<div className='contents'>
<div className='logoDiv'>
             <img src='./img/googleLogo.png' alt='google' className='imageSize'/>
        </div>

        <div className='logoDiv'>
             <img src='./img/airbnbLogo.png' alt='airbnb' className='imageSize'/>
         </div>


         <div className='logoDiv'>
             <img src='./img/uberEatsLogo.png' alt='Ubereats' className='imageSize'/>
        </div>

        <div className='logoDiv'>
             <img src='./img/amazonLogo.png' alt='amazon' className='imageSize'/>
         </div>
         </div>


             </div>

</div>
    </div>
      );
    };
    
    export default Clients


    











