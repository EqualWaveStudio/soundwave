import React from 'react';
import './MainHome.css';
import girlPhoto from '../../assets/img/landing-page-girl.png'
import ButtonJoin from '../../Components/ButtonJoin/ButtonJoin';
import '../../Components/ButtonJoin/ButtonJoin';

const Main = () => {
  return (
    <main>

        <div className="main-content">
          <img className="girl-photo" src={girlPhoto} alt="Afro-descendant woman with headphones listening to and enjoying music" />      
          <div className='main-text'>
            <h1>Feel The music</h1>
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
