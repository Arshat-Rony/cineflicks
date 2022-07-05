import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieapi, { API } from '../../common/api/movieapi'


const initialState = {
    movies: {},
    shows: {},
    selectedmovieorshow: {},
}


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = 'Harry';
    const response = await movieapi
        .get(`?apiKey=${API}&s=${movieText}&type=movie`)
    return response.data;
})


export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    async () => {
        const showstext = "Friends";
        const response = await movieapi
            .get(`?apikey=${API}&s=${showstext}&type=series`)
        return response.data;
    })



export const fetchAsyncMovieorShowDetail = createAsyncThunk('movies/fetchAsyncMovieorShowDetail',
    async (id) => {
        const response = await movieapi
            .get(`?apikey=${API}&i=${id}&Plot=full`)
        return response.data;
    }
)


const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addMovies: ((state, { payload }) => {
            state.movies = payload;
        })
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Response Fulfilled")
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Request Rejected")
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Shows fulfilled")
            return { ...state, shows: payload }
        },
        [fetchAsyncMovieorShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Shows fulfilled")
            return { ...state, selectedmovieorshow: payload }
        }
    }
})


export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getselectedmovieorshow = (state) => state.movies.selectedmovieorshow;
export default movieSlice.reducer;


