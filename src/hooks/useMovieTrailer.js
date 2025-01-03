import { useDispatch } from "react-redux"
import { addTrailer } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"

const useMovieTrailer=(movieId)=>{
    const dispatch = useDispatch()
    const video = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?`, API_OPTIONS)
        const json = await data.json()
        const filterData = json.results.filter((item)=> item.type === 'Trailer')
        const trailer = filterData.length? filterData[0] : json.results[0]
        dispatch(addTrailer(trailer))
    }
    useEffect(()=>{
        video()
    },[])
}
export default useMovieTrailer