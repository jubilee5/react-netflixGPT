import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input 
        type="text" 
        className=" p-4 m-4 col-span-9"
        placeholder="Search for movies, TV shows, genres..."/>
        <button className="col-span-3 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar

