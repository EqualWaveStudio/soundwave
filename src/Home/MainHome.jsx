import React from 'react';
import './MainHome.css';
import girlPhoto from '../assets/img/landing-page-girl.png'
import ButtonJoin from '../Components/ButtonJoin';
import '../Components/ButtonJoin.css';

const Main = () => {
  return (
    <main>

        <div className="main-content">
          
          <img className="girl-photo" src={girlPhoto} alt="Mujer afro descendiente con audifonos escuchando musica" />

          <div className='main-text'>
            <h1>Feel de music</h1>
            <p>Stream over 20 thousand songs with one click</p>
            <ButtonJoin />
          </div>


          <div className='pink-cirle'></div>
          <div className='blue-cirle'></div>
          <div className='big-blue-cirle'></div>

        </div>
      
    </main>
  );
};

export default Main;