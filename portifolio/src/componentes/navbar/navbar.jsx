  import './navbar.css'
  import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
  import { HashLink } from 'react-router-hash-link';
  import { useEffect, useState } from "react";

export default function Navbar() {
    const [hide, setHide] = useState(false);
    let lastScroll = 0;
     useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll) {
        setHide(true);   // rolando para baixo → esconder
      } else {
        setHide(false);  // rolando para cima → mostrar
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
   
    <section className={hide ? "navbar-hide" : ""} id='navbar'>
      <BootstrapNavbar expand="lg"  className="principal px-5">
      <Container fluid className="reveal d-flex justify-content-between align-items-center">
        <BootstrapNavbar.Brand as={HashLink} to="/#home">
          Mateus <span className="last-name">Gonçalves</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className=" nav ms-auto me-5 d-flex gap-3 align-items-center">
            {/* <Nav.Link as={HashLink} to="/ia">
              <img src="/ai-svgrepo-com.svg" alt="" />
            </Nav.Link> */}
            <Nav.Link as={HashLink} to="/#about">Sobre mim</Nav.Link>
            <Nav.Link as={HashLink} to="/#stacks">Stacks</Nav.Link>
            <Nav.Link as={HashLink} to="/#projects">Projetos</Nav.Link>
            <Nav.Link as={HashLink} to="/#contact">Contato</Nav.Link>
            
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
      </BootstrapNavbar>
    </section>
    
)
}