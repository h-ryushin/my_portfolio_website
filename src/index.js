import React from 'react';
import ReactDOM from 'react-dom/client';
import Top from './Components/Top';
import ProjectCard from './Components/ProjectCard';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Components/About';
import SoundJump from './Components/SoundJump';
import Contact from './Components/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Top />
            <ProjectCard />
          </>
        } />
        <Route path='/about' element={
          <>
            <Top />
            <About />
          </>
        } />
        <Route path='/soundjump' element={
          <>
            <Top />
            <SoundJump></SoundJump>
          </>
        } />
        <Route path='/contact' element={
          <>
            <Top />
            <Contact/>
          </>
        } />
      </Routes>
      <Footer />

    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
