import PropTypes from "prop-types";

// component displays MovieCard when called``
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
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
    rating: PropTypes.string.isRequired,
    genreName: PropTypes.string,
    genreDescription: PropTypes.string,
    directorName: PropTypes.string.isRequired,
    directorBirthYear: PropTypes.string,
    directorBio: PropTypes.string,
  }).isRequired,
  onBookClick: PropTypes.func.isRequired,
};
