import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import {Headers} from './components/head.js';
import {Navlink} from './components/NavLink.js';
import {Pizza} from './components/AllPizza.js';

function App() {
  return (
    <BrowserRouter>
      <Headers></Headers>
      <hr></hr>
      <Navlink></Navlink>
      <Pizza></Pizza>
    </BrowserRouter>
  );
}

export default App;
