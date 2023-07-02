import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logout from './Helpers/Logout'

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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/feeds">Feeds</Nav.Link>
          </Nav>
          {!isLoggedin && (
            <Nav>
              <Nav.Link eventKey={2} href="/signin" className="sign">
                <button className="signup-btn">Sign in</button>
              </Nav.Link>
            </Nav>
          )}

          {isLoggedin && (
            <Nav>
              <Nav.Link eventKey={2} className="sign">
                <button className="signup-btn bg-danger" onClick={()=>logout()}>Sign out</button>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
