import { useEffect, useState } from "react";
import { getAllMovies } from "../service/movieService";
import { MovieCard } from "./MovieCard";

export function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then((resp) => setMovies(resp.results));
  });
  return (
    <div class="mt-5 vh-100">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.index} />
      ))}
    </div>
  );
}
