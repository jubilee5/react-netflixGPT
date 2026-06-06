// hooks/useMoviesByGenre.js

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGenreMovies } from "../utils/moviesSlice";

const useMoviesByGenre = (genreId, genreName) => {
  const dispatch = useDispatch();

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
    getMovies();
  }, []);
};

export default useMoviesByGenre;