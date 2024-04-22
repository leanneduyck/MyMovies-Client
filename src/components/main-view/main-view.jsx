// imports other views, imports react states
import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card.jsx";
import { MovieView } from "../movie-view/movie-view.jsx";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view.jsx";

// exports array to other views, empty array will pull from API, uses localStorage as default values for user/token states
export const MainView = () => {
  // views
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    if (!token) return;
    // isLoading screen
    setIsLoading(true);
    fetch(
      "https://my---movies-868565568c2a.herokuapp.com/movies",
      // authorization headers
      {
        headers: { Authorization: `Bearer ${token}` },
      }
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

  // calls LoginView and SignupView and Login button, stores JWT token as state variable
  if (!user) {
    return (
      <div>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
        <SignupView />
        <button
          onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  // isLoading screen
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // backClick returns to null state (main-view)
  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  // returns statement if array is empty
  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  // shows movieCard when title clicked (movie-view)
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
      <button
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      >
        Logout
      </button>
    </div>
  );
};
