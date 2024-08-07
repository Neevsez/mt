import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './templates/Navbar';
import Home from './pages/index';
import About from "./pages/About";
import Tariff from './pages/Tariff';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tariff" element={<Tariff />} />
      </Routes>
    </Router>
  )
};


export default App;