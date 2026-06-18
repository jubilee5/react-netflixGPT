import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
   //fetch data from TMDB API and update store
    const dispatch = useDispatch();

     const upcomingMovies = useSelector((store) => store.movies.UpcomingMovies);

    const  getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
             API_OPTIONS
            );
            const json = await data.json();
           // console.log(json.results);
            dispatch(addUpcomingMovies(json.results));
    };

    useEffect(() => {
       !upcomingMovies && getUpcomingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useUpcomingMovies;