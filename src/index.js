import React from 'react';
import ReactDOM from 'react-dom/client';
import Top from './Top';
import ProjectCard from './Components/ProjectCard';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Components/About';
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
      </Routes>
      <Footer />

    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
