import React from 'react';
import { About, Header, Footer, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

export const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};
