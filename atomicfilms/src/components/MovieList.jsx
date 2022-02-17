import { useEffect, useState } from "react";
import { getAllMovies, getData } from "../service/movieService";
import { MovieCard } from "./MovieCard";

export function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then((resp) => setMovies(resp.results));
    getData().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className="vh-100 py-5">
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
}
