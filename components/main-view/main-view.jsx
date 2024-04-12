// imports other views, imports react states
import { useState } from "react";
import { MovieCard } from "/components/movie-card.jsx";
import { MovieView } from "../movie-view/movie-view.jsx";

// exports array to other views
export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      release: "2001",
      description:
        "An orphaned boy suddenly finds himself a student in a secret magical school.",
      rating: "PG",
      genre: {
        name: "Fantasy",
        description:
          "Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and usually inspired by mythology or folklore.",
      },
      director: {
        name: "Chris Columbus",
        birthYear: "1958",
        description:
          "Born in Pennsylvania and raised in Ohio, Chris Columbus was first inspired to make movies after seeing 'The Godfather' at age 15.",
      },
      image: "https://images.app.goo.gl/SJLbm9exr2bqKhHn7",
    },
    {
      id: 2,
      title: "Harry Potter and the Chamber of Secrets",
      release: "2002",
      description:
        "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
      rating: "PG",
      genre: {
        name: "Fantasy",
        description:
          "Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and usually inspired by mythology or folklore.",
      },
      director: {
        name: "Chris Columbus",
        birthYear: "1958",
        description:
          "Born in Pennsylvania and raised in Ohio, Chris Columbus was first inspired to make movies after seeing 'The Godfather' at age 15.",
      },
      image: "https://images.app.goo.gl/NM8eTki6DgvMF78JA",
    },
    {
      id: 3,
      title: "Harry Potter and the Prisoner of Azkaban",
      release: "2004",
      description:
        "Harry Potter, Ron, and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery of an escaped prisoner who poses a dangerous threat to the young wizard.",
      rating: "PG-13",
      genre: {
        name: "Fantasy",
        description:
          "Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and usually inspired by mythology or folklore.",
      },
      director: {
        name: "Alfonso Cuaron",
        description:
          "Alfonso Cuaron Orozco was born in Mexico City, Mexico. From and early age, he yearned either to be a film director or an astronaut.",
      },
      image: "https://images.app.goo.gl/mYUfAPaJwxbKskW58",
    },
  ]);

  // default state doesn't show movie cards (main-view)
  const [selectedMovie, setSelectedMovie] = useState(null);

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
