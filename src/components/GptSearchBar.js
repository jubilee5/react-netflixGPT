import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {

  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movies in TMDB
  const searchMovieTMDB = async(movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
      
    const json = await data.json();
    return json.results;
    
    
  }

  const handleGptSearchClick = async() => {
  
    console.log(searchText.current.value);
    // Make API Call to GPT API and get Movie Results

    const gptQuery = "Act as a Movie Search Bot and search for " + searchText.current.value + " . Only give me names of 5 movies, comma separated like the example result. Example Result: The Shawshank Redemption, The Godfather, The Dark Knight, Pulp Fiction, Schindler's List";

//     const gptResults = await openai.chat.completions.create({
//   model: 'gpt-4o-mini',
//   messages: [
//     { role: 'user', content: gptQuery },
//   ],
// });

// using mock data until I get the openai billing set up 
const gptResults = {
  choices: [
    {
      message: {
        content:
          "Interstellar, Inception, Arrival, Gravity, The Martian",
      },
    },
  ],
};

if (!gptResults.choices){
  alert(lang[langKey].gptNoResults);
  return;
}

    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
    
    // ["Interstellar", "Inception", "Arrival", "Gravity"," The Martian"]
    // for each movie, fetch its details from TMDB API and add to the store

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

  dispatch(addGptMovieResults({movieNames: gptMovies, movieResults: tmdbResults}));
  }

  return (
    <div className='pt-[50%]  md:pt-[10%] flex justify-center'>
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12"
      onSubmit={(e)=> e.preventDefault()}
      >
        <input 
        type="text" 
        className=" p-4 m-4 col-span-9"
        placeholder={lang[langKey].gptSearchPlaceholder}
        ref={searchText}
        />
        <button className="col-span-3 m-4 bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
        onClick={handleGptSearchClick}
        >
            {lang[langKey].search}</button>
        
        </form>
    </div>
  )
}

export default GptSearchBar

