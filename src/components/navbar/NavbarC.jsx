import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarC.css'; // Archivo CSS para estilos personalizados
import { NavLink } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const NavbarC = () => {
  return (
    <>   
    <Navbar expand="lg" className="custom-navbar py-5" >
      <Container>
        <NavLink href="#home" className="brand-logo">TechStore</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="custom-link text-decoration-none">Inicio</NavLink>
            <NavLink to="/AboutUs" className="custom-link text-decoration-none">Sobre Nosotros</NavLink>
            
          </Nav>

          <Form className="d-flex mx-3">
            <Form.Control type="text" placeholder="Buscar..." />
            <Button variant="primary" className="ms-2">Buscar</Button>
          </Form>

          <Nav className="ms-auto">
            <NavLink to="/LoginPage" className="custom-link text-decoration-none">Iniciar Sesión</NavLink>
            <NavLink to="/RegisterPage" className="custom-link text-decoration-none">Registrarse</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarC;
