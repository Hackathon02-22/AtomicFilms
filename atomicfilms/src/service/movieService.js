export async function getAllMovies() {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f0804310b2aa799c42575717c6a0eae1&language=en', { method: "GET" });
    return await res.json();
}
