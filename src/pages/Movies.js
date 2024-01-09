import React from "react"
import Navbar from "../components/Navbar"
import Mockdata from "../components/Mockdata"

const Movie = () => {

  return (
    <div>
        <Navbar />
        <ul>
        {Mockdata.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
          // <li key={movie.id}>{movie.synopsis}</li>
        ))}
        </ul>
    </div>
  )
}

export default Movie

