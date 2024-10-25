import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info : null
}

export const tvReducer = createSlice( {
    name: "tvinfo",
    initialState,
    reducers: {
        
        loadTv: ( state, action ) => {
            state.info = action.payload;
        },

        removeTv: ( state, action ) => {
            state.info = null;
        }

    }
} )

export const { loadTv, removeTv } = tvReducer.actions;

export default tvReducer.reducer;