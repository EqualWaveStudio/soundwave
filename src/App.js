import './App.css';
import React from 'react';
import Header from './Components/Header';
import MainHome from './Home/MainHome';
import Footer from './Components/Footer';
import MainJoin from './Join/MainJoin';


const App = () => {
  return (
    <div className="App">
      <Header />
      <MainHome />
      <MainJoin />
      <Footer />
    </div>
  );
};

export default App;

