import { useEffect, useState } from "react";
import { getAllMovies } from "../service/movieService";
import { MovieCard } from "./MovieCard";

export function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then((resp) => setMovies(resp.results));
  }, []);
  return (
    <div class="card-container d-flex flex-wrap justify-content-evenly px-3 gap-5">
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} cardnumber={index} />
      ))}
    </div>
  );
}
