

export function getAllMovies() {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=f0804310b2aa799c42575717c6a0eae1&language=es-MX', {method:"GET"})
          .then(res => res.json())
  }