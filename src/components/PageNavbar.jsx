import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logout from './Helpers/Logout'
import { Link } from 'react-router-dom'

function PageNavbar() {
  const isLoggedin = localStorage.getItem("role");

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="nav-style"
    >
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link to='/home'>Home</Link>
            <Link to='/home'>About</Link>
            <Link to='/home'>Feeds</Link>
          </Nav>
          {!isLoggedin && (
            <Nav>
              <Link to="/signin" className="sign">
                <button className="signup-btn">Sign in</button>
              </Link>
            </Nav>
          )}

          {isLoggedin && (
            <Nav>
              <Link className="sign">
                <button className="signup-btn bg-danger" onClick={()=>logout()}>Sign out</button>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
