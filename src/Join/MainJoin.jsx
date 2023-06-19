import React from 'react';
<<<<<<< HEAD
import Form from './Form';
import './MainJoin.css'


function MainJoin() {
  return (
    <main>

      <div className="content">

        <div className='text'>
          <h1>
            Join the <span className="pink-text">fun.</span>
          </h1>
        </div>

        <div className='pink-circle'></div>
        <div className='purple-circle'></div>

      </div>
      <div>
        <Form />
      </div>


    </main>

  );
}

  export default MainJoin;
=======
import '../Join/MainJoin';
import Form from '../Components/FormValidation';
import './MainJoin.css'


const MainJoin = () => {
    return(
          <main>
      
              <div className="content">
                        
              <div className='text'>
                <h1>
                Join the <span className="pink-text">fun.</span>
                </h1>
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
  
>>>>>>> 5286921f17c963ab509f606c52f1098c907a54ed
