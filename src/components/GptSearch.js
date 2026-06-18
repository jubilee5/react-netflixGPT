import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
         <div className="fixed -z-10">

      <img
        className=""
        src= {BG_URL} alt="background"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
