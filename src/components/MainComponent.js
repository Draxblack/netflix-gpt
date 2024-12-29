import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainComponent = () => {
    const movieStore = useSelector((store)=> store.movies?.nowPlayingMovies)
    if(movieStore === null) return 
    const mainMovie= movieStore[0];
    const {original_title, overview, id} = mainMovie
  return (
    <div><VideoTitle title={original_title} overview={overview}/>
    <VideoBackground movieId={id}/></div>
  )
}

export default MainComponent