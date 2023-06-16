import React from 'react';
import './MainDiscover.css';
import PhotoMainDiscover from '../assets/img/covers.jpg';
import IconoMicro from '../assets/img/microphone.svg';
import IconoAlbums from '../assets/img/albums.svg';
import IconoMore from '../assets/img/more.svg';

const Main = () => {
  return (
    <main>
      <div className='main-discover-container'>
        
        <div>
            <h1>Discover new music</h1>

            <div className='icons-discover'>

              <div className='micro'>
                <img  src={IconoMicro} alt='Icono de Microfono'/> 
                <p>Charts</p>
              </div>

              <div className='albums'>
                <img src={IconoAlbums} alt='Icono de Albums'/>
                <p>Albums</p>
              </div>
              
              <div className='more'>
                <img src={IconoMore} alt='Icono de ir por Más'/>
                <p>More</p>
              </div>

            </div>

          <p>By joing you can benefit by listening to the latest albums releases.</p>
        </div>
        
        <img className='covers' src={PhotoMainDiscover} alt='covers' />
      </div>

    </main>
  );
};

export default Main;
