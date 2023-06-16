import './App.css';
import React from 'react';
import Header from './Components/Header';
import MainHome from './Home/MainHome';
import MainDiscover from './Discover/MainDiscover';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainHome />
      <MainDiscover />
      <Footer />
    </div>
  );
};

export default App;

