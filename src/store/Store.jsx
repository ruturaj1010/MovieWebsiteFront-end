import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/MovieReducer";
import peopleReducer from "./reducers/PeopleReducer";
import tvReducer from "./reducers/TvReducer";

const store = configureStore( {

    reducer: {
        Movie: movieReducer,
        Tv: tvReducer,
        People: peopleReducer,
    }
} )

export default store;