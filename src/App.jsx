import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router>
      <Navbar />
      <Home/>
      <Education/>
      <Skills/>
      <Experience/>
      {/* <Projects/> */}
      <Contact/>
      <Footer />
    </Router>
  );
}

export default App;
