import React from 'react'
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Master from './master/master.jsx';

import './App.css'
import About from './components/about/about.jsx';
import Services from './components/servic/services.jsx';
import Projects from './components/projects/projects.jsx';
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'

  function App() {

    return (
      <>
      <Master />      
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      </>
    )
  }

export default App
