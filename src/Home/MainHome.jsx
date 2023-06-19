import React from 'react';
<<<<<<< HEAD
import '../Footer/Footer.css';
=======
import './MainHome.css';
import girlPhoto from '../assets/img/landing-page-girl.png'
import ButtonJoin from '../Components/ButtonJoin';
import '../Components/ButtonJoin.css';
>>>>>>> 5286921f17c963ab509f606c52f1098c907a54ed

const Main = () => {
  return (
    <main>

        <div className="main-content">
          
          <div className='photo'>
          <img className="girl-photo" src={girlPhoto} alt="Mujer afro descendiente con audifonos escuchando musica" />
          </div>

          <div className='main-text'>
            <h1>Feel de music</h1>
            <p>Stream over 20 thousand songs with one click</p>
            <ButtonJoin />
          </div>


          <div className='pink-cirle'></div>
          <div className='big-blue-cirle'></div>

        </div>
        <div className='blue-cirle'></div> 
    </main>
  );
};

export default Main;
