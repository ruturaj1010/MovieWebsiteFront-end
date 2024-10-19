import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tvinfo : null
}

export const peopleReducer = createSlice( {
    name: "tv",
    initialState,
    reducers: {
        loadTv: ( state, action ) => {
            state.tvinfo = action.payload;
        },

        removeTv: ( state, action ) => {
            state.info = null;
        }

    }
} )

export const { loadTv, removeTv } = peopleReducer.actions;

export default peopleReducer.reducer;