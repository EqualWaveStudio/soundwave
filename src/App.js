import './App.css';
import React from 'react';
import Header from './Components/Header';
import MainHome from './Home/MainHome';
import Footer from './Components/Footer';
import MainJoin from './Join/MainJoin';
import FormValidation from './Components/FormValidation';


const App = () => {
  return (
    <div className="App">
      <Header />
      <MainHome />
      <MainJoin />
        {/* <Fom />  */}
        <FormValidation />
      <Footer />
    </div>
  );
};

export default App;

