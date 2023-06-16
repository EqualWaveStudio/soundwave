import './App.css';
import React from 'react';
import Header from './src/Components/Header/Header.component';
import MainHome from './src/Components/Home/MainHome.jsx';
import Footer from './Components/Footer/Footer.jsx';

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

