import React from 'react';
import './App.css';
import HomeContainer from './components/HomeContainer';
import NavBootstrap from "./components/NavBootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBootstrap/>
      <HomeContainer/>
    </>
  );
}

export default App;
