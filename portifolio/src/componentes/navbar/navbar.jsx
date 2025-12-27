import './navbar.css'
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState, useRef } from "react";


export default function Navbar() {

  const [hide, setHide] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll.current) {
        setHide(true);  
      } else {
        setHide(false); 
      }

      lastScroll.current = current; 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={hide ? "navbar navbar-hide" : "navbar"}>
      <BootstrapNavbar expand="lg" className="principal px-5">
        <Container fluid>
          <BootstrapNavbar.Brand as={HashLink} to="/#home">
            Mateus <span className="last-name">Gonçalves</span>
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
          <BootstrapNavbar.Collapse id="navbar-nav">
            <Nav className="ms-auto me-5 gap-3 align-items-center">
              <Nav.Link as={HashLink} to="/#about">Sobre mim</Nav.Link>
              <Nav.Link as={HashLink} to="/#projects">Projetos</Nav.Link>
              <Nav.Link as={HashLink} to="/#contact">Contato</Nav.Link>
              <button className='nav-link text-white'> </button>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </section>
  );
}
