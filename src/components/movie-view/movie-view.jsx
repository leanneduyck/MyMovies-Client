import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const MovieView = ({ movies }) => {
  // accesses bookId url param
  const { movieId } = useParams();

  // searches all books to render correct one via react-router
  const movie = movies.find((b) => b.id === movieId);

  return (
    <Row className="justify-content-md-center m-5">
      <div>
        <img className="w-100" src={movie.image} />
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
        <button className="back-button m-3" variant="primary">
          Back to Home Page
        </button>
      </Link>
    </Row>
  );
};
