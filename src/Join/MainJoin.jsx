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
                Join the <span className="pink-text">fun.</span>
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
  
