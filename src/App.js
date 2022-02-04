import './App.css';
// import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Events from './components/Pages/Events';
import Home from './components/Pages/Home';
import Pics from './components/Pages/Pics';
import Registry from './components/Pages/Registry';
import About from './components/Pages/About';


function App() {
    return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

);



}

export default App;
