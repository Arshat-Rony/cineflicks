import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieapi, { API } from '../../common/api/movieapi'


const initialState = {
    movies: {},
    shows: {},
    selectedmovieorshow: {},
}


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (text) => {
    const response = await movieapi
        .get(`?apiKey=${API}&s=${text}&type=movie`)
    return response.data;
})


export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    async (text) => {
        const response = await movieapi
            .get(`?apikey=${API}&s=${text}&type=series`)
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
        removeAsyncMovieorShowDetail: (state) => {
            state.selectedmovieorshow = {};
        }
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


export const { removeAsyncMovieorShowDetail } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getselectedmovieorshow = (state) => state.movies.selectedmovieorshow;
export default movieSlice.reducer;


