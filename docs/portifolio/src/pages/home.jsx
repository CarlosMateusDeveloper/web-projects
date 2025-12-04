import React from 'react'
import Navbar from '../componentes/navbar/navbar.jsx'
import Maindiv from '../componentes/maindiv/Maindiv.jsx'
import About from '../componentes/about/about.jsx'
import Stacks from '../componentes/stacks/stacks.jsx'
import Projects from '../componentes/projects/projects.jsx'
import Contact from '../componentes/contact/contact.jsx'
import Footer from '../componentes/footer/footer.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { initScrollReveal } from '../utils/scroll/scroll.jsx';   
import { useEffect } from 'react'; 

export default function Home() {
    useEffect(() => {
        initScrollReveal();
      }, []);
    return (
        <>
            <Navbar />
            <Maindiv/>
            <About />
            <Stacks />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}