import React from 'react';
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