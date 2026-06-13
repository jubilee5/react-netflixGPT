import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import openai from '../utils/openai';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async() => {
  
    console.log(searchText.current.value);
    // Make API Call to GPT API and get Movie Results

    const gptQuery = "Act as a Movie Search Bot and search for " + searchText.current.value + " . Only give me names of 5 movies, comma separated like the example result. Example Result: The Shawshank Redemption, The Godfather, The Dark Knight, Pulp Fiction, Schindler's List";

//     const gptResults = await openai.chat.completions.create({
//   model: 'gpt-3.5-turbo',
//   messages: [
//     { role: 'user', content: gptQuery },
//   ],
// });

// using mock data until i get the openai billing working 
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

    console.log(gptResults.choices);
  }

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className="w-1/2 bg-black grid grid-cols-12"
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

