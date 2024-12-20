import React from 'react';
import ReactDOM from 'react-dom/client';
import Top from './Components/Top';
import ProjectCard from './Components/ProjectCard';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Components/About';
// import SoundJump from './Components/SoundJump';
import Contact from './Components/Contact';
import about_top_image from '../src/img/about-top.png';
import contact_top_image from "../src/img/contact-top.png";


import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='my_portfolio_website/' element={
          <>
            <Top isTopPage={true} />
            <ProjectCard />
          </>
        } />
        <Route path='my_portfolio_website/about' element={
          <>
            <Top image={about_top_image} isTopPage={false} />
            <About />
          </>
        } />
        {/* <Route path='/soundjump' element={
          <>
            <Top />
            <SoundJump />
          </>
        } /> */}
        <Route path='my_portfolio_website/contact' element={
          <>
            <Top image={contact_top_image} isTopPage={false} />
            <Contact />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();