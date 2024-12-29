import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name: 'movies',
    initialState:{
        nowPlayingMovies: null,
        trailerData: null
    },
    reducers:{
        addMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topMovies = action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upComingMovies = action.payload
        },
        addTrailer: (state, action)=>{
            state.trailerData = action.payload
        }
    }
})
export const {addMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies}= movieSlice.actions
export default movieSlice.reducer