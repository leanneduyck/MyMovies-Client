import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import Fuse from "fuse.js";

// state variables
export const NavigationBar = ({
  user,
  onLoggedOut,
  setUser,
  setToken,
  movies,
}) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  // uses Fuse to search movies by title, but not exact title
  const fuse = new Fuse(movies, {
    keys: ["title"],
    // adjusts threshold to control search sensitivity
    threshold: 0.4,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // uses Fuse to search movies by title
    const searchResults = fuse.search(searchInput);

    if (searchResults.length > 0) {
      // navigates to movieView of first search result
      const foundMovie = searchResults[0].item;
      navigate(`/movies/${encodeURIComponent(foundMovie.id)}`);
      // clears search input field
      setSearchInput("");
    } else {
      alert("Sorry, no such movie was found.");
    }
  };

  // renders Navbar component with search bar
  // if user is logged in, displays Home, Profile, and Logout links
  // if user is not logged in, displays Login and Signup links
  // search bar allows user to search for a movie then renders <MovieView />, displays alert if movie not found
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
          {user && (
            <Form className="d-flex" onSubmit={handleSubmit}>
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                id="searchInput"
              />
              <Button variant="outline-light" type="submit">
                Search
              </Button>
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
