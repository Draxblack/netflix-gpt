import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const usePopularMovies = () => {
    const dispatch = useDispatch()
const movieList = async ()=>{
    const movies = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json = await movies.json()
    console.log('json',json)
    dispatch(addPopularMovies(json.results))
} 
useEffect(()=>{
movieList()
},[])
}
export default usePopularMovies