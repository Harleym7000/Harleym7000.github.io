import React from 'react';
import './App.css';
import HomeContainer from './components/HomeContainer';
import HeaderNavbar from "./components/HeaderNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <HeaderNavbar/>
      <HomeContainer/>
    </>
  );
}

export default App;
