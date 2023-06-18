import './App.css';
import React from 'react';
import MainHome from './Components/Home/MainHome';
import MainDiscover from './Components/Discover/MainDiscover';
import MainJoin from './Components/Join/MainJoin';
import Footer from './Components/Footer/Footer';
import FormValidation from './Components/Join/FormValidation';


const App = () => {
  return (
    <div className="App">
      <MainHome />
      <MainDiscover />
      <MainJoin />
      {/* <Fom />  */}
      <FormValidation />
      <Footer />
    </div>
  );
};

export default App;

