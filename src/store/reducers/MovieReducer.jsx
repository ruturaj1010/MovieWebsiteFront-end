import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: null
}

const movieReducer = createSlice( {
    name: "movieinfo",
    initialState,
    reducers: {
        loadmovies: ( state, action ) => {
            state.info = action.payload;
        },

        removemovies: ( state ) => {
            state.info = null;
        },
    }
} )

export const { loadmovies, removemovies } = movieReducer.actions;

export default movieReducer.reducer;