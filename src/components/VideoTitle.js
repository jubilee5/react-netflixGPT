

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[28%] md:pt-[20%] px-4 md:px-24 absolute text-white bg-gradient-to-t from-black ">
      <h1 className="text-lg sm:text-2xl md:text-6xl font-bold mb-3">{title}</h1>
      <p className=" hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="mt-2 md:mt-4 flex gap-2 md:gap-4">
        <button className="bg-white
    text-black
    py-1.5
    px-3
    md:px-12
    md:py-4
    rounded-md
    font-bold
    text-sm
    md:text-base
    hover:bg-gray-200"> ▶ Play</button>
        <button className=" hidden md:inline-block bg-gray-500 text-white px-12 py-4 rounded-md font-bold bg-opacity-75 hover:bg-gray-600">  More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
