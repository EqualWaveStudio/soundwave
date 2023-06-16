import './App.css';
import React from 'react';
import MainHome from '../src/Components/Home/MainHome';
import MainDiscover from '../src/Components/Discover/MainDiscover';
import MainJoin from '../src/Components/Join/MainJoin';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div className="App">
      <MainHome />
      <MainDiscover />
      <MainJoin />
      <Footer />
    </div>
  );
};

export default App;

