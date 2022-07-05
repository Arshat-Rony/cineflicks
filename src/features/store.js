import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/Movies/MovieSlice";


export default configureStore({
    reducer: {
        movies: moviesReducer,
    },
})