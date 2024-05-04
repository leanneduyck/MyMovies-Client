// imports other views, imports react states
import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card.jsx";
import { MovieView } from "../movie-view/movie-view.jsx";
import { LoginView } from "../login-view/login-view.jsx";
import { ProfileView } from "../profile-view/profile-view.jsx";
import { SignupView } from "../signup-view/signup-view.jsx";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { TopNavigator } from "../top-navigator/top-navigator";

// exports array to other views, empty array will pull from API, uses localStorage as default values for user/token states
export const MainView = () => {
  // useState() calls
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); //should start with false
  // default state doesn't show movie cards (main-view)
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // stores and checks users, tokens
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    setUser(storedUser);
    setToken(storedToken);
  }, []);

  // hook to async request list of movies from my API after authorization
  useEffect(() => {
    if (!token) {
      return;
    }
    // isLoading screen
    setIsLoading(true);
    fetch(
      "https://my---movies-868565568c2a.herokuapp.com/movies",
      // authorization headers
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
      // callbacks
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        return response.json();
      })
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
      // error handling for troubleshooting
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // ensures fetch is called every time token changes
  }, [token]);

  function onLogout() {
    setUser(null);
    setToken(null);
    localStorage.clear();
  }

  // returns views using bootstrap Rows ") : ? (" acts as if/return statements
  // checks if user logged in, then returns loginView/signUpView
  // shows loading screen
  // checks for movie list is not empty
  // displays movieCard with logout button

  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }

  return (
    <BrowserRouter>
      {user && (
        <TopNavigator isAuth={user && token} onLogout={onLogout} user={user} />
      )}
      <Routes>
        <Route
          element={
            <>
              <LoginView
                isAuth={user && token}
                onLoggedIn={(user, token) => {
                  setUser(user);
                  setToken(token);
                }}
              />
              <SignupView />
            </>
          }
          path="/auth"
        />
        <Route
          element={
            <Row>
              {movies.map((movie) => (
                <Col className="mt-3 mb-3" key={movie.id} md={3}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>
          }
          path="/"
        />
        <Route element={<MovieView movies={movies} />} path="/movie/:movieId" />
        <Route element={<ProfileView />} path="/profile" />
      </Routes>
    </BrowserRouter>
  );
};
