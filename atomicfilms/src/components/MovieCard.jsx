export function MovieCard(props) {
  return (
    <div className="movie-body row align-items-center">
      <div class="row align-items-center justify-content-center">
        <div className="card mt-5 pt-3 w-auto">
          <div className="poster-card" type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal${props.cardnumber}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
              alt="Movie Poster"
            />
            <div className="modal fade" id={`exampleModal${props.cardnumber}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header d-flex justify-content-center">
                    <h5 className="modal-title " id="exampleModalLabel">{props.movie.title}</h5>
                  </div>
                  <div className="modal-body">
                    <div className="d-flex justify-content-center pb-3">
                      <img src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} class="" alt="" />
                    </div>
                    <div>{props.movie.overview}</div>
                    <div></div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-warning">Add to favorites</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-name">{props.movie.title}</div>
        </div>
      </div>
    </div>
  );
}