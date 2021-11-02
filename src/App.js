import React from "react";
import './App.css'
import Home from './pages/Home'
import BCA101 from './pages/BCA101'
import BCA102 from './pages/BCA102'
import BCA103 from './pages/BCA103' 
import BCA104 from './pages/BCA104'
import Fallback from './pages/Fallback'
import {Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Route exact path="/" component={Home}/>
    </>
  );
}

export default App;
