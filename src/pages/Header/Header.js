import React, { useState } from 'react';
import "./Header.scss"
import { GoSearch } from "react-icons/go"
import img from "../../common/Images/logo/movie-app-logo__1_-removebg-preview.png"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/Movies/MovieSlice';

const Header = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(fetchAsyncMovies(text))
        dispatch(fetchAsyncShows(text))
        e.target.reset()
    }
    return (
        <div className='header'>
            <div className="container header__container">
                <div className="logo">
                    <img width="90px" src={img} alt="" />
                    <Link className='logo__text' to="/">Cineflicks</Link>
                </div>
                <div className="menu">
                    <form className='search__form' onSubmit={handleSearch}>
                        <input placeholder='Search for movies and shows' type="text" name="searchtext" id="searchtext" onChange={(e) => setText(e.target.value)} />
                        <button id='search__btn'><GoSearch /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;