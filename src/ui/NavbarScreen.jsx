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
              <NavLink to="home"       className="navbar-screen nav-link">Home</NavLink>
              <NavLink to="characters" className="navbar-screen nav-link">Personajes</NavLink>
              <NavLink to="heroes"     className="navbar-screen nav-link">Heroes</NavLink>
              <NavLink to="villians"   className="navbar-screen nav-link">Villanos</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
