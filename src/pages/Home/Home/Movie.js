import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { fetchAsyncMovies, fetchAsyncShows } from '../../../features/Movies/MovieSlice';
import MovieList from '../MovieList/MovieList';
const Movie = () => {
    const dispatch = useDispatch()
    const movieText = "Harry"
    const showText = "Friends"
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showText))
    }, [dispatch])
    return (
        <div>
            <MovieList></MovieList>
        </div>
    );
};

export default Movie;