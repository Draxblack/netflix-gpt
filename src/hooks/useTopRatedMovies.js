import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
const movieList = async ()=>{
    const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
    const json = await movies.json()
    dispatch(addTopRatedMovies(json.results))
} 
useEffect(()=>{
movieList()
},[])
}
export default useTopRatedMovies