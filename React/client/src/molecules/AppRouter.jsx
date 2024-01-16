import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Gallery from '../pages/Gallery';
import About from '../pages/About';
import Home from '../pages/Home';

function AppRouter() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
  );
}

export default AppRouter;
