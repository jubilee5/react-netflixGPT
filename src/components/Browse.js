import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainter from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useMoviesByGenre from "../hooks/useMoviesByGenre";


const Browse = () => {
   useNowPlayingMovies();
   usePopularMovies();
   useUpcomingMovies();
   useTopRatedMovies();
   useMoviesByGenre(28, "Action");
    useMoviesByGenre(35, "Comedy");
    useMoviesByGenre(27, "Horror");
    useMoviesByGenre(10749, "Romance");
    useMoviesByGenre(878, "SciFi");
    useMoviesByGenre(53, "Thriller");
    useMoviesByGenre(16, "Animation");
    useMoviesByGenre(99, "Documentary");
    useMoviesByGenre(10751, "Family");
    useMoviesByGenre(10752, "War");
    useMoviesByGenre(37, "Western");
    useMoviesByGenre(14, "Fantasy");
    useMoviesByGenre(9648, "Mystery");
    useMoviesByGenre(18, "Drama");
    useMoviesByGenre(10770, "TV Movie");
     useMoviesByGenre(80, "Crime");


    return (

        <div> 
            <Header/>
            <MainContainter/>
            <SecondaryContainer/>

            {/* 
                MainContainer
                    - VideoBackground
                    - VideoTitle

                SecondaryContainer
                    - MovieList * n
                    - MovieCard * n    
            
            */}

        </div>
    )

}


 export default Browse;