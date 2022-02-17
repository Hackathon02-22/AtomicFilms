export function MovieCard(props) {
  return (
    <div className="movie-body row align-items-center">
      <div class="row align-items-center">
        <div className="card mt-5 mb-5 pt-5 pb-5 w-50">
          <div className="poster-card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
              alt="Movie Poster"
            />
          </div>
          <div className="movie-name">Movie: {props.movie.title}</div>
        </div>
      </div>
      </div>
      );
}