import React from 'react';
import '../Join/MainJoin';
import Form from '../Components/FormValidation';
import './MainJoin.css'


const MainJoin = () => {
    return(
          <main>
      
              <div className="content">
                        
              <div className='text'>
                <h2>
                <b>Join the </b><span className="pink-text"><b>fun.</b></span>
                </h2>
                 </div>
                
                <div className='pink-circle'></div>
                <div className='purple-circle'></div>
                                
              </div>
              <div> 
             <Form />
              </div>
              
            
          </main>
      
    )
      };

  export default MainJoin;
  
