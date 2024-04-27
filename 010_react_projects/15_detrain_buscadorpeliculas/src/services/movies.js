const API_KEY = import.meta.env.VITE_IMDB_API_KEY

export const searchMovies = async ({ search }) => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
  const json = await response.json()
  const movies = json.Search

  console.log(movies)
  return movies
}
