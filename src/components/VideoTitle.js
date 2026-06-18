

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-t from-black   ">
      <h1 className="text-xl md:text-6xl font-bold mb-3">{title}</h1>
      <p className=" hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:flex gap-4">
        <button className="bg-white text-black py-1 md:px-12 px-3 md:py-4 rounded-md font-bold  hover:bg-gray-200"> ▶ Play</button>
        <button className=" hidden md:inline-block bg-gray-500 text-white px-12 py-4 rounded-md font-bold bg-opacity-75 hover:bg-gray-600">  More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
