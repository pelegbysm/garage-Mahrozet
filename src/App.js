import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Engines from './pages/Engines';
import EnginesRebuild from './pages/EnginesRebuild';
import TruckEngines from './pages/TruckEngines';
import Transmission from './pages/Transmission';
import Turbo from './pages/Turbo';
import BodyRepair from './pages/BodyRepair';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/engines" element={<Engines />} />
        <Route path="/engines-rebuild" element={<EnginesRebuild />} />
        <Route path="/truck-engines" element={<TruckEngines />} />
        <Route path="/transmission" element={<Transmission />} />
        <Route path="/turbo" element={<Turbo />} />
        <Route path="/body-repair" element={<BodyRepair />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;