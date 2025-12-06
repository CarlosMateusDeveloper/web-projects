import './navbar.css'
import Button from '../button/button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
     const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5); // ativa após rolar 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);}, []);
  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container-fluid px-5 mx-5">
            <a className={`navbar-brand ps-5 ${scrolled ? 'text-dark' : 'text-white'}`}href="#"><i className='ri-building-3-line text-danger'></i> Construction</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex justify-content-end collapse navbar-collapse me-5  " id="navbarNavAltMarkup">
                <div className="navbar-nav gap-5">
                    <a className="nav-link  " href="#">Home</a>
                    <a className="nav-link text-secondary" href="#about">About us</a>
                    <a className="nav-link text-secondary" href="#services">Services</a>
                    <a className="nav-link text-secondary" href='#projects' >Projects</a>
                    <Button text={"Contact Us"} link={"#contact"} />   
                </div>
            </div>
        </div>
    </nav>
  )
}