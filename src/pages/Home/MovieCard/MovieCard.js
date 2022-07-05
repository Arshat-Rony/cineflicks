import React from 'react';
import { Link } from 'react-router-dom';
import "./MovieCard.scss"

const MovieCard = (props) => {
    const { Poster, Title, Year, imdbID } = props.movie;

    return (
        <Link to={`/movie/${imdbID}`}>
            <div className='movie__card'>
                <div className="movie__card__img">
                    <img src={Poster} alt="" />
                </div>
                <div className="movie__card__text">
                    <h3>{Title}</h3>
                    <p>{Year}</p>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;