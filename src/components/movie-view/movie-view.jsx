import React, { useEffect, useState } from "react";
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

  // adds movie to favoriteMovies array
  // doesn't seem to add movies to array in profileView, though success alert displays
  const addToFavorites = (movie) => {
    if (!favoriteMovies.includes(movie.id)) {
      setFavoriteMovies([...favoriteMovies, movie.id]);
      alert("This movie has been added to your Favorites!");
    } else {
      alert("This movie is already in your Favorites!");
    }
  };
  // connects to API, /users/:Username/movies/:MovieID is endpoint to add (POST) movies to FavoriteMovies array
  // DOES add movies to favoriteMovies array in database! and in correct user (even though profileView still shows 1st user name etc)
  useEffect(() => {
    fetch(
      "https://my---movies-868565568c2a.herokuapp.com/users/:Username/movies/:MovieID",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          addToFavorites(movie);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error adding movie to Favorites!");
      });
  }, []);

  return (
    <Row className="justify-content-md-center m-5">
      <div>
        <Image className="w-100 mb-2" src={movie.image} rounded />
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Release: </span>
        <span>{movie.release}</span>
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Rating: </span>
        <span>{movie.rating}</span>
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Genre: </span>
        <span>{movie.genre}</span>
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Genre Description: </span>
        <span>{movie.genreDescription}</span>
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Director: </span>
        <span>{movie.directorName}</span>
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Director's Birth Year: </span>
        <span>{movie.directorBirthYear}</span>
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Director's Bio: </span>
        <span>{movie.directorBio}</span>
      </div>
      <Button
        className="w-100 m-2"
        variant="outline-primary"
        type="submit"
        style={{ cursor: "pointer" }}
        href="/"
      >
        Back to Home Page
      </Button>
      <Button
        className="w-100 m-2"
        variant="outline-secondary"
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
