import React from 'react';
import Slider from "react-slick";
import { settings } from '../../../features/Settings';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getAllMovies, getAllShows } from '../../../features/Movies/MovieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss'
import Loading from '../../../features/Loader/Loading';
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
                            <Slider {...settings}>
                                {
                                    movieData.map((movie, index) =>
                                        movie ? <MovieCard key={index} movie={movie}></MovieCard> : ""
                                    )
                                }
                            </Slider>
                        </div>
                    </div>
                    :
                    <>
                        <Loading type="spokes" color="red"></Loading>                    </>
            }
            {
                shows.Response === "True"
                    ?
                    <div className="show__container">
                        <h3 className='heading show_heading'>Shows</h3>
                        <div className="shows">
                            <Slider {...settings}>
                                {
                                    showsData.map((movie, index) =>
                                        movie ? <MovieCard key={index} movie={movie}></MovieCard> : ""
                                    )
                                }
                            </Slider>
                        </div>
                    </div>
                    :
                    <>
                        <Loading type="spokes" color="red"></Loading>                    </>
            }
        </div>
    );
};

export default MovieList;