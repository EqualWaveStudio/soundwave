import React from 'react';
import './MainJoin';
import Form from '../../Components/FormValidation/FormValidation';
import './MainJoin.css'
import '../../Components/FormValidation/FormValidation.css';
import Footer from '../../Components/Footer/Footer';


const MainJoin = () => {
    return(
      <>
          <main className='main-join'>
      
              <div className="content">
                        
              <div className='text'>
                <h2>
                Join the<span className="pink-text"> fun.</span>
                </h2>
                 </div>               
              </div>
              
             
              <Form />
          </main>
          <div className='pink-circle'></div>
          <div className='purple-circle'></div>

<Footer />
</>
      
    )
      };

  export default MainJoin;
  
