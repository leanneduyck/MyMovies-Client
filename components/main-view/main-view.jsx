// imports other views, imports react states
import { useState, useEffect } from "react";
import { MovieCard } from "/components/movie-card.jsx";
import { MovieView } from "../movie-view/movie-view.jsx";

// exports array to other views, empty array will pull from API
export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // default state doesn't show movie cards (main-view)
  const [selectedMovie, setSelectedMovie] = useState(null);

  // hook to async request list of movies from my API
  useEffect(() => {
    // isLoading screen to troubleshoot fetching
    setIsLoading(true);
    fetch("https://my---movies-868565568c2a.herokuapp.com/movies")
      // callbacks
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // extracts needed info from json
        const moviesFromApi = (data?.movies ?? []).map((movie) => {
          return {
            id: movie._id,
            title: movie.title,
            release: movie.release,
            description: movie.description,
            rating: movie.rating,
            genre: movie.genre?.name,
            genreDescription: movie.genre.description,
            directorName: movie.director_name?.[0],
            directorBirthYear: movie.director?.birthYear,
            directorBio: movie.director?.description,
            image: "${movie.img}",
          };
        });
        setMovies(moviesFromApi);
      })
      // error handling for troubleshooting
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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

  // shows movie card when title clicked (movie-view)
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
    </div>
  );
};
