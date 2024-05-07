import React from "react";
import { Navigate, Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { MovieView } from "../movie-view/movie-view";

// state variables
export const NavigationBar = ({
  user,
  onLoggedOut,
  setUser,
  setToken,
  movies,
  foundMovie,
  searchQuery,
  setSearchQuery,
}) => {
  // currently, search bar works as expected EXCEPT for navigation to MovieView, only shows movie in console.log

  // handles search form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const foundMovie = movies.find(
      (movie) => movie.title.toLowerCase() === searchQuery.toLowerCase()
    );

    // if movie is found, navigates to movieView
    if (foundMovie) {
      console.log(foundMovie);
      <Navigate to={`/movies/${encodeURIComponent(foundMovie.id)}`} />;
      // clears search field after search
      setSearchQuery("");
    } else {
      alert("Sorry, no such movie was found.");
    }
  };

  // renders Navbar component with search bar
  // if user is logged in, displays Home, Profile, and Logout links
  // if user is not logged in, displays Login and Signup links
  // search bar allows user to search for movies, displays alert if movie not found
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="searchInput"
              />
              <Button
                variant="outline-light"
                type="submit"
                onClick={handleSubmit}
                path={`/movies/${encodeURIComponent(foundMovie)}`}
                element={<MovieView foundMovie={foundMovie} />}
              >
                Search
              </Button>
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
