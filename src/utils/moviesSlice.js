import { createSlice } from "@reduxjs/toolkit";

const moviesSlice =  createSlice({
    name: "movies",
    initialState: {
            nowPlayingMovies: null,
            PopularMovies: null,
            UpcomingMovies: null,
            TopRatedMovies: null,
            genreMovies: {},
            trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
            addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
         },
            addUpcomingMovies: (state, action) => {
            state.UpcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.TopRatedMovies = action.payload;
        },
        addGenreMovies: (state, action) => {
            const { genre, movies } = action.payload;
  state.genreMovies[genre] = movies;
},
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        } 
    },
});

export const { addNowPlayingMovies , addPopularMovies, addUpcomingMovies, addTopRatedMovies, addGenreMovies, addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;