import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import MainHome from './pages/Home/MainHome';
import MainJoin from './pages/Join/MainJoin';
import MainDiscover from './pages/Discover/MainDiscover'


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
     
    </div>
    </Router>
  );
};

export default App;
