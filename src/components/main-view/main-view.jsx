import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MovieCard } from "../movie-card.jsx";
import { MovieView } from "../movie-view/movie-view.jsx";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view.jsx";
import { NavigationBar } from "../navigation-bar/navigation-bar.jsx";
import { ProfileView } from "../profile-view/profile-view.jsx";
import { WelcomeView } from "../welcome-view.jsx"; // Import WelcomeView
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

// exports array to other views, empty array will pull from API, uses localStorage as default values for user/token states
export const MainView = () => {
  // useState() calls
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  //stores and checks users, tokens in localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    setUser(storedUser);
    setToken(storedToken);
  }, [token]);

  // hook to async request list of movies from my API after authorization
  useEffect(() => {
    if (!token) return;
    setIsLoading(true);
    fetch(
      // original heroku API ***COMMENT BACK IN ONCE AWS EXPERIMENT OVER***
      // "https://my---movies-868565568c2a.herokuapp.com/movies",
      // AWS experiment, is 27017 the right port to use here?
      `http://44.223.176.178/movies`,

      //authorization headers
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      // callbacks
      .then((response) => response.json())
      .then((data) => {
        // extracts needed info from json
        const moviesFromApi = data.map((movie) => ({
          id: movie._id,
          title: movie.Title,
          release: movie.Release,
          description: movie.Description,
          rating: movie.Rating,
          genre: movie.Genre.Name,
          genreDescription: movie.Genre.Description,
          directorName: movie.Director.Name,
          directorBirthYear: movie.Director.Birthyear,
          directorBio: movie.Director.Description,
          image: movie.Image,
        }));
        setMovies(moviesFromApi);
      })
      // error handling
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // ensures fetch is called every time token changes
  }, [token]);

  // implements state-based routing
  // passes full array of movies to MovieView
  // each <Route> has path to matching URL, plus element telling what to render
  // Navigate used to block unauthorized users from MainView and MovieView
  // returns views using bootstrap Rows ") : ? (" acts as if/return statements
  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
        setUser={setUser}
        setToken={setToken}
        movies={movies}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Row className="justify-content-md-center">
        <Routes>
          <Route // signup route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route // login route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route // search route
            path="/movies/:movieId"
            element={
              <>
                <Col md={8}>
                  <MovieView movies={movies} />
                </Col>
              </>
            }
          />
          <Route // movieView route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} />
                  </Col>
                )}
              </>
            }
          />
          <Route // user profile route
            path="/users"
            element={
              <>
                {!user ? (
                  <Navigate to="/users" replace />
                ) : (
                  <Col md={8} className="mb-5">
                    <ProfileView movies={movies} />
                  </Col>
                )}
              </>
            }
          />
          <Route // mainView route
            path="/"
            element={
              <>
                {!user ? (
                  <WelcomeView /> // welcomeView route
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className="mt-3 mb-3" key={movie.id} md={3}>
                        <MovieCard movie={movie} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
        {isLoading && <Spinner animation="border" variant="primary" />}
      </Row>
      <p className="mt-auto mb-3 text-center">
        designed and developed by:{" "}
        <a
          href="https://leanneduyck.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <u>Leanne Duyck</u>
        </a>
      </p>
    </BrowserRouter>
  );
};

export default MainView;
