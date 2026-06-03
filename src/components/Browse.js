import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainter from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
   useNowPlayingMovies();
   


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