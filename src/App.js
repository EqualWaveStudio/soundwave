import './App.css';
import React from 'react';
import Header from './Components/Header';
import MainHome from './Home/MainHome';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainHome />
      <Footer />
    </div>
  );
};

export default App;

