import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarC.css'; // Archivo CSS para estilos personalizados

const NavbarC = () => {
  return (
    <>   
    <Navbar expand="lg" className="custom-navbar py-5" >
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">TechStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="custom-link">Inicio</Nav.Link>
            <Nav.Link href="/AboutUs" className="custom-link">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#contact" className="custom-link">Contacto</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link href="#login" className="custom-link">Iniciar Sesión</Nav.Link>
            <Nav.Link href="#signup" className="custom-link">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarC;
