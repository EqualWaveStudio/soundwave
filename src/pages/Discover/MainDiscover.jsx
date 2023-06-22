import React from 'react';
import './MainDiscover.css';
import PhotoMainDiscover from '../../assets/img/covers.jpg';
import IconoMicro from '../../assets/img/microphone.svg';
import IconoAlbums from '../../assets/img/albums.svg';
import IconoMore from '../../assets/img/more.svg';
import Footer from '../../Components/Footer';

const Main = () => {
  return (

    <>
    <main>
      <div className='main-discover-container'>
        
        <div>
            <h1>Discover new music</h1>

            <div className='icons-discover'>

              <div className='micro'>
                <img  src={IconoMicro} alt='Microphone icon'/> 
                <p>Charts</p>
              </div>

              <div className='albums'>
                <img src={IconoAlbums} alt='Albums icon'/>
                <p>Albums</p>
              </div>
              
              <div className='more'>
                <img src={IconoMore} alt='Look for more icon'/>
                <p>More</p>
              </div>

            </div>

          <p>By joing you can benefit by listening to the latest albums releases.</p>
        </div>
        
        <img className='covers' src={PhotoMainDiscover} alt='Collage of album covers' />
      </div>

    </main>
    <Footer />
    </>
  );
};

export default Main;
