import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieinfo: null
}

const movieReducer = createSlice( {
    name: "movie",
    initialState,
    reducers: {
        loadmovies: ( state, action ) => {
            state.movieinfo = action.payload;
        },

        removemovies: ( state ) => {
            state.movieinfo = null;
        },
    }
} )

export const { loadmovies, removemovies } = movieReducer.actions;

export default movieReducer.reducer;