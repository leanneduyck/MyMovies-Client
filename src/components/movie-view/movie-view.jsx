import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// state variables
export const MovieView = ({ movies }) => {
  // initializes favoriteMovies array
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  // accesses movieId url param
  const { movieId } = useParams();
  // searches all movies to render correct card via react-router
  const movie = movies.find((movie) => movie.id === movieId);
  // if no movie is found, return message
  if (!movie) {
    return <div>No movie found!</div>;
  }

  // adds movie to favoriteMovies array, message to user, or error message if movie already in array
  const addToFavorites = (movie) => {
    if (!favoriteMovies.includes(movie.id)) {
      setFavoriteMovies([...favoriteMovies, movie.id]);
      alert("This movie has been added to your Favorites!");
    } else {
      alert("This movie is already in your Favorites!");
    }
  };

  return (
    <Row className="justify-content-md-center m-5">
      <div>
        <Image className="w-100 mb-2" src={movie.image} rounded />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Release: </span>
        <span>{movie.release}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span>Rating: </span>
        <span>{movie.rating}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre}</span>
      </div>
      <div>
        <span>Genre Description: </span>
        <span>{movie.genreDescription}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.directorName}</span>
      </div>
      <div>
        <span>Director's Birth Year: </span>
        <span>{movie.directorBirthYear}</span>
      </div>
      <div>
        <span>Director's Bio: </span>
        <span>{movie.directorBio}</span>
      </div>
      <Link to={"/"}>
        <Button
          className="w-100 m-2"
          variant="primary"
          type="submit"
          style={{ cursor: "pointer" }}
        >
          Back to Home Page
        </Button>
      </Link>
      <Button
        className="w-100 m-2"
        variant="success"
        type="submit"
        style={{ cursor: "pointer" }}
        onClick={() => {
          addToFavorites(movie);
        }}
      >
        Add to Favorites!
      </Button>
    </Row>
  );
};
