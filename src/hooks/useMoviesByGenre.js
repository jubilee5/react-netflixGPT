// hooks/useMoviesByGenre.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGenreMovies } from "../utils/moviesSlice";

const useMoviesByGenre = (genreId, genreName) => {
  const dispatch = useDispatch();

   const movies = useSelector((store) => store.movies.genreMovies);

  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(
      addGenreMovies({
        genre: genreName,
        movies: json.results,
      })
    );
  };

  useEffect(() => {
    !movies[genreName] && getMovies();
  }, []);
};

export default useMoviesByGenre;