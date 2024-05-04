import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

// component displays MovieCard when called, uses react-bootstrap``
export const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    // onClick on Card element makes entire card clickable instead of button
    <Card
      className="h-100"
      style={{ cursor: "pointer" }}
      onClick={() => {
        navigate(`/movie/${movie.id}`); // we change the url when the user clicks the movie
      }}
    >
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.description}</Card.Title>
      </Card.Body>
    </Card>
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
  // onMovieClick: PropTypes.func.isRequired, you dont need this anymore
};
