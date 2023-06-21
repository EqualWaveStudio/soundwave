import React from 'react';
import '../Join/MainJoin';
import Form from '../Components/FormValidation';
import './MainJoin.css'
import '../Components/FormValidation.css';
import Footer from '../Components/Footer';


const MainJoin = () => {
    return(
      <>
          <main>
      
              <div className="content">
                        
              <div className='text'>
                <h2>
                Join the<span className="pink-text"> fun.</span>
                </h2>
                 </div>
                
                <div className='pink-circle'></div>
                
                                
              </div>
              <div className='purple-circle'></div>
              <div> 
             <Form />
              </div>
              
            
          </main>

<Footer />
</>
      
    )
      };

  export default MainJoin;
  
