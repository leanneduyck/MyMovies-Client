import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// component displays MovieCard when called, uses react-bootstrap``
export const MovieCard = ({ movie }) => {
  return (
    // wrapped Card in Link to make whole movieCard clickable
    // encodeURIComponent replaces non-alphanumeric characters with URL-friendly characters
    <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
      <Card className="h-100" style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.description}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

// define prop constraints for MovieCard
// did not require all fields, just title, rating, director, I may add image to required later
MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    release: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.string,
    genreName: PropTypes.string,
    genreDescription: PropTypes.string,
    directorName: PropTypes.string.isRequired,
    directorBirthYear: PropTypes.string,
    directorBio: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
