import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams(); //get param from url, so movieId is /movie/:movieId check main-view.jsx
  const navigate = useNavigate();
  const movie = movies.find((movie) => movie.id === movieId);

  //check if movie is undefined!
  if (!movie) {
    return <div>movie not found! </div>;
  }
  return (
    <div className="justify-content-md-center m-5">
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
      <Button className="m-3" variant="primary" onClick={() => navigate("/")}>
        Back to Home Page
      </Button>
    </div>
  );
};
