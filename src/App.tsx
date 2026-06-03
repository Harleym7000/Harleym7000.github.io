import React from 'react';
import './App.css';
import HomeContainer from './components/HomeContainer';
import HeaderNavbar from "./components/HeaderNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <>
      <HeaderNavbar/>
        <ComingSoon/>
      {/*<HomeContainer/>*/}
    </>
  );
}

export default App;
