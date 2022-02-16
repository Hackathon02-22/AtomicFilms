

export function MovieCard(props){
    return (
        <div>
            <div className="card">
                <div className="movie-name">
                    Movie: {props.movie.original_title}
                </div>
            </div>
        </div>

    )
}