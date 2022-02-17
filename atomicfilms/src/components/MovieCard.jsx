export function MovieCard(props) {
  return (
    <div>
      <div className="card">
        <div className="">
          <img className="img-fluit" src={props.movie} alt="" />
        </div>
        <div className="card-body">Movie: {props.movie.original_title}</div>
      </div>
    </div>
  );
}
