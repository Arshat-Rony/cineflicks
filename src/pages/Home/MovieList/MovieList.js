import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getAllMovies, getAllShows } from '../../../features/Movies/MovieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss'
const MovieList = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    const showsData = shows.Search;
    const movieData = movies.Search;
    return (
        <div>
            {
                movies.Response === "True"
                    ?
                    <div className="movie__container">
                        <h3 className='heading movie_heading'>Movies</h3>
                        <div className="movies">
                            {
                                movieData.map((movie, index) =>
                                    movie ? <MovieCard key={index} movie={movie}></MovieCard> : ""
                                )
                            }
                        </div>
                    </div>
                    :
                    <>
                        <h3>Something went wrong. Please try again later.</h3>
                    </>
            }
            {
                shows.Response === "True"
                    ?
                    <div className="show__container">
                        <h3 className='heading show_heading'>Shows</h3>
                        <div className="shows">
                            {
                                showsData.map((movie, index) =>
                                    movie ? <MovieCard key={index} movie={movie}></MovieCard> : ""
                                )
                            }
                        </div>
                    </div>
                    :
                    <>
                        <h3>Something went wrong. Please try again later.</h3>
                    </>
            }
        </div>
    );
};

export default MovieList;