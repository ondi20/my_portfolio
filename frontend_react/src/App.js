import React from 'react';

import { About, Work, Header, Testimonial, Footer, Skills } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <>
  <div className="app">
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    <Testimonial/>
    <Footer/>
  </div>
  </>
);

export default App;