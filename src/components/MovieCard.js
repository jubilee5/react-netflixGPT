import { IMG_CDN_URL } from "../utils/constants"


const MovieCard = ({posterPath}) => {
  if (!posterPath) {
    return null;
  }
  return (
    <div className="w-28 sm:w-32 md:w-48 pr-2 md:pr-4 flex-shrink-0">
       <img alt = "Movie Card"
       className=" rounded-lg"
       src = {IMG_CDN_URL + posterPath}
       />
    </div>
  )
}

export default MovieCard
