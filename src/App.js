import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import MainHome from './Home/MainHome';
import Footer from './Components/Footer';
import MainJoin from './Join/MainJoin';
import MainDiscover from './Discover/MainDiscover'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/discover" element={<MainDiscover />} />
          <Route path="/join" element={<MainJoin />} />
          <Route path="/" element={<MainHome />} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
