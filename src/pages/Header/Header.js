import React from 'react';
import "./Header.scss"
import { GoSearch } from "react-icons/go"
import img from "../../common/Images/logo/movie-app-logo__1_-removebg-preview.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className="container header__container">
                <div className="logo">
                    <img width="90px" src={img} alt="" />
                    <Link className='logo__text' to="/">Cineflicks</Link>
                </div>
                <div className="menu">
                    <Link className='nav__link' to="/">Home</Link>
                    <Link className='nav__link' to="/">About</Link>
                    <Link className='nav__link' to="/">Contacts</Link>
                </div>
                <div className="search">
                    <span id='search__btn'><GoSearch /></span>
                </div>
            </div>
        </div>
    );
};

export default Header;