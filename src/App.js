import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Statistics from "./pages/Statistics";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Services />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;




















/*

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
//import Testimonials from "./pages/Testimonials";
//import Stats from "./pages/Stats";
//import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        </Routes>
    </Router>
  );
}

export default App;

*/


/*
<Route path="/testimonials" element={<Testimonials />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
      
*/