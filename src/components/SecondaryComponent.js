import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryComponent = () => {
     const movie = useSelector((store)=> store.movies)
        if(movie === null) return 
  return (
    movie.nowPlayingMovies && movie.popularMovies && movie.topMovies && movie.upComingMovies&&(
    <div className='bg-black'>
      <div className='-mt-64 pl-12 relative z-20'>
      <MovieList title={"Now playing"} movies={movie?.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movie.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movie?.topMovies}/>
      <MovieList title={"Upcoming"} movies={movie.upComingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryComponent