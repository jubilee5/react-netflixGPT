import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
   // console.log(movies);
  return (
    <div className="w-full">
        <h1 className="text-base sm:text-xl md:text-3xl py-3 text-white">
           {title} </h1>
        <div className="overflow-x-auto hide-scrollbar scroll-smooth">
  <div className="flex flex-nowrap">
    {movies?.map((movie) => (
      <MovieCard
        key={movie.id}
        posterPath={movie.poster_path}
      />
    ))}
    </div>
   </div>

       </div>
   
  )
}

export default MovieList
