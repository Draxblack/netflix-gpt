import React from 'react'
import { MVE_IMG_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-3'>
        <img src={MVE_IMG_URL+posterPath} alt="movie poster"/>
    </div>
  )
}

export default MovieCard