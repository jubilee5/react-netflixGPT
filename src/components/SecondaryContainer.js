import MovieList from "./MovieList";
import { useSelector } from "react-redux"


const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
    <div className="mt-0 md:-mt-52 px-4 md:px-8 lg:px-12 relative z-20">
      <MovieList title= {"Now Playing"} movies = {movies.nowPlayingMovies} />
      <MovieList title= {"Top Rated"} movies = {movies.TopRatedMovies} />
      <MovieList title={"Romance"} movies={movies.genreMovies?.Romance} />
      <MovieList title= {"Popular"} movies = {movies.PopularMovies} />
      <MovieList title={"Action"} movies={movies.genreMovies?.Action} />
      <MovieList title={"Comedy"} movies={movies.genreMovies?.Comedy} />
      <MovieList title={"Horror"} movies={movies.genreMovies?.Horror} />
      <MovieList title={"SciFi"} movies={movies.genreMovies?.SciFi} />
      <MovieList title= {"Upcoming Movies"} movies = {movies.UpcomingMovies} />
      <MovieList title={"Thriller"} movies={movies.genreMovies?.Thriller} />
      <MovieList title={"Animation"} movies={movies.genreMovies?.Animation} />
      <MovieList title={"Documentary"} movies={movies.genreMovies?.Documentary} />
      <MovieList title={"Family"} movies={movies.genreMovies?.Family} />
      <MovieList title={"War"} movies={movies.genreMovies?.War} />
      <MovieList title={"Western"} movies={movies.genreMovies?.Western} />
      <MovieList title={"Fantasy"} movies={movies.genreMovies?.Fantasy} />
      <MovieList title={"Mystery"} movies={movies.genreMovies?.Mystery} />
      <MovieList title={"Drama"} movies={movies.genreMovies?.Drama} />
      <MovieList title={"TV Movie"} movies={movies.genreMovies?.["TV Movie"]} />
      <MovieList title={"Crime"} movies={movies.genreMovies?.Crime} />

            
    </div>
    </div>
    )
   

  )
}

export default SecondaryContainer
