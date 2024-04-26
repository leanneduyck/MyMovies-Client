import { Navbar, Container, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut, setUser, setToken }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="m-3" rounded>
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyMovies App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/users">
                  Profile
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                    onLoggedOut();
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>
          <Form inline>
            <span>
              <FormControl type="text" placeholder="Search" className="m-2" />
            </span>
            <span>
              <Button variant="outline-light">Search</Button>
            </span>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
