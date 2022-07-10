import React, { useEffect } from 'react';
import { useParams } from "react-router"
import { useDispatch, useSelector } from 'react-redux';
import { AiTwotoneStar, AiFillBoxPlot } from "react-icons/ai"
import { FaBoxes } from "react-icons/fa"
import { fetchAsyncMovieorShowDetail, getselectedmovieorshow, removeAsyncMovieorShowDetail } from '../../../../features/Movies/MovieSlice';
import "./MovieDetail.scss"
import Loading from '../../../../features/Loader/Loading';
const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getselectedmovieorshow)

    useEffect(() => {
        dispatch(fetchAsyncMovieorShowDetail(id))
        return () => {
            dispatch(removeAsyncMovieorShowDetail())
        }
    }, [id, dispatch])


    const { Poster, Title, Plot, imdbRating, imdbVotes, Runtime, Director, Year, Genre, Language, Awards, Actors } = data;


    return (
        <> {Poster ?
            <div className='detail__card'>
                <div className="detail__card__img">
                    <img src={Poster} alt="" />
                </div>
                <div className="detail__card__text">
                    <h3>{Title}</h3>
                    <span>iMDB Ratings<AiTwotoneStar className='star' /> : {imdbRating}</span>
                    <span>iMDB Votes👍 : {imdbVotes}</span>
                    <span>Runtime<AiFillBoxPlot className='reel' /> : {Runtime}</span>
                    <span>Year <FaBoxes className='year' /> : {Year}</span>
                    <p>Description : {Plot}</p>

                    <p>Director : <span>{Director}</span></p>
                    <p>Gneres : <span>{Genre}</span></p>
                    <p>Stars : <span>{Actors}</span></p>
                    <p>Languages : <span>{Language}</span></p>
                    <p>Awards: <span>{Awards}</span></p>
                </div>
            </div>
            :
            <Loading type="spokes" color="red"></Loading>
        }
        </>
    );
};

export default MovieDetail;