import React from 'react';
import ReactDOM from 'react-dom/client';
import Top from './Top';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import Header from './Header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Top />
    <ProjectCard />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
