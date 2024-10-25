import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: null
}

export const peopleReducer = createSlice( {
    name: "peopleinfo",

    initialState,

    reducers: {
        loadPeople: ( state, action ) => {
            state.info = action.payload;
        },

        removePeople: ( state, action ) => {
            state.info = null;
        }
    }
} )

export const { loadPeople, removePeople } = peopleReducer.actions;

export default peopleReducer.reducer;