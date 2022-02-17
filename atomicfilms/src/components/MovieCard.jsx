export function MovieCard(props) {
    return (
      <div>
        <div className="card">
          <div className="poster-card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
              alt="Moivie Poster"
            />
          </div>
          <div className="movie-name">Movie: {props.movie.title}</div>
        </div>
      </div>
    );
}