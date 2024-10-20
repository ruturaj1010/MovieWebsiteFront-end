import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    peopleinfo: null
}

export const peopleReducer = createSlice( {
    name: "peopleinfo",

    initialState,

    reducers: {
        loadPeople: ( state, action ) => {
            state.peopleinfo = action.payload;
        },

        removePeople: ( state, action ) => {
            state.peopleinfo = null;
        }
    }
} )

export const { loadPeople, removePeople } = peopleReducer.actions;

export default peopleReducer.reducer;