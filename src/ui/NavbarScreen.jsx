import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"


export const NavbarScreen = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="home">DragonBallSuper-App</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="characters" className="navbar-screen nav-link">Personajes</NavLink>
              <NavLink to="angels" className="navbar-screen nav-link">Ángeles</NavLink>
              <NavLink to="gods" className="navbar-screen nav-link">Dioses</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
