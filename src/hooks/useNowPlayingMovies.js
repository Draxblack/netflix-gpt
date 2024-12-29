import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
const movieList = async ()=>{
    const movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await movies.json()
    console.log('ssss--',json.results)
    dispatch(addMovies(json.results))
} 
useEffect(()=>{
movieList()
},[])
}
export default useNowPlayingMovies
