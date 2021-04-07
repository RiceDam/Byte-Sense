import React from 'react';
import '../../App.css';
import '../../styles/services.css'
import Service from '../Services';
import Footer from '../Footer.js';

export default function Services() {
  return (
    <div>
      <header id="header-services">
        <h3>Services</h3>
      </header>
      <Service/>
      <Footer/>
    </div>
  );
}
