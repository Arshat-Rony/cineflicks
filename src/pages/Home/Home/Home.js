import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { fetchAsyncMovies, fetchAsyncShows } from '../../../features/Movies/MovieSlice';
import MovieList from '../MovieList/MovieList';
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncShows())
    }, [dispatch])
    return (
        <div>
            <MovieList></MovieList>
        </div>
    );
};

export default Home;