

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold mb-3">{title}</h1>
      <p className=" py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-gray-500 text-white px-12 py-4 rounded-md font-bold bg-opacity-75 hover:bg-gray-600"> ▶ Play</button>
        <button className="bg-gray-500 text-white px-12 py-4 rounded-md font-bold bg-opacity-75 hover:bg-gray-600">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
