
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from '../src/Layout/Navbar';
import Footer from '../src/Layout/Footer';
import About from '../src/components/AboutSection';
import LandingPage from '../src/LayoutLandingPage'
import Projects from './pages/project';
import ContactUs from "./pages/contactus"
import Blogs from './pages/blogs';


const App = () => {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects-page" element={<Projects />} />
        <Route path="/blogs-page" element={<Blogs />} />
        <Route path="/contactus-page" element={<ContactUs />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
