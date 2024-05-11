import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// component displays MovieCard when called, uses react-bootstrap and css textDecoration
// showDescription used to only show the description in MainView, vs only the image in ProfileView
// wrapped Card in Link to make whole movieCard clickable
// encodeURIComponent replaces non-alphanumeric characters with URL-friendly characters
export const MovieCard = ({ movie, showDescription }) => {
  return (
    <Link
      to={`/movies/${encodeURIComponent(movie.id)}`}
      style={{ textDecoration: "none" }}
    >
      <Card className="h-100" style={{ width: "100%", cursor: "pointer" }}>
        <div style={{ height: "100%" }}>
          <Card.Img
            variant="top"
            src={movie.image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        {showDescription && (
          <Card.Body>
            <Card.Text>{movie.description}</Card.Text>
          </Card.Body>
        )}
      </Card>
    </Link>
  );
};

// define prop constraints for MovieCard
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
  // showDescription is a boolean prop
  showDescription: PropTypes.bool,
  // onMovieClick is a function prop
  onMovieClick: PropTypes.func,
};

// sets showDescription default prop to true
MovieCard.defaultProps = {
  showDescription: true,
};
