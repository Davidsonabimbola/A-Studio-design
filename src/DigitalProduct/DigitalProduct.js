import React from 'react';
import  '../DigitalProduct/digitalProduct.css';

const DigitalProduct = () => {
  return (
    <div className='topDiv'>
    <div className='firstDiv'>
        <div className='digitalImage'>
            <img src='./img/digitalproduct.png' alt='digital'/>
        </div>

        <div className='theText'>
            <h2 className='header' style={{textAlign:'start'}}>Great Digital Product<br></br>
            Agency since 2016</h2>

            <p className='textParagraph'>Our Business Plan is a written document describing a company's core<br></br>
            business activities, Objectives and how it plans to achieve it's goals. Our<br></br>
            goal is to provide our client high quality Product with modern idea<br></br>
            accordingly their budgets and according to the requirements</p>
        </div>

    </div>
    </div>
  )
}

export default DigitalProduct