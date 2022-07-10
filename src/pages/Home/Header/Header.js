import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { useLocation } from 'react-router'
import { GoSearch } from "react-icons/go"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import PrimaryBtn from '../../../common/PrimaryBtn/PrimaryBtn';
import Loading from '../../../features/Loader/Loading';
import auth from '../../../firebaseinit';
import "./Header.scss"
import { fetchAsyncMovies, fetchAsyncShows } from '../../../features/Movies/MovieSlice';
const Header = () => {
    const location = useLocation()
    const [user, loading] = useAuthState(auth)
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    if (loading) {
        <Loading type="spoke" color="red"></Loading>
    }
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(fetchAsyncMovies(text))
        dispatch(fetchAsyncShows(text))
        e.target.reset()
    }
    const logOut = () => {
        signOut(auth)
    }
    return (
        <>
            <div className='home_header'>
                <Link to="/" className='home_logo'>CINEFLIX</Link>

                <div className='search__box'>
                    {
                        user && <> <Link style={{ zIndex: "99", color: "antiquewhite", fontSize: "18px" }} to="/movie">Movies</Link>

                            <div className="menu">
                                <form style={{ zIndex: "99" }} className='search__form' onSubmit={handleSearch}>
                                    <input placeholder='Search for movies and shows' type="text" name="searchtext" id="searchtext" onChange={(e) => setText(e.target.value)} />
                                </form>
                            </div>
                        </>
                    }

                    {
                        user ?
                            <span style={{ zIndex: "99" }} onClick={logOut}><PrimaryBtn text="Sign Out"></PrimaryBtn></span>
                            :
                            <Link style={{ zIndex: "99" }} to="/login"><PrimaryBtn text="Sign In"></PrimaryBtn></Link>
                    }
                </div>
            </div>
            {
                user && <div style={{ zIndex: "99" }} className="menu">
                    <form className='search__form__small' onSubmit={handleSearch}>
                        <input className='search__form__small__input' placeholder='Search for movies and shows' type="text" name="searchtext" id="searchtext" onChange={(e) => setText(e.target.value)} />
                    </form>
                </div>
            }
            {location.pathname === '/' || <hr style={{ borderTop: 'none', borderBottom: "0.5px solid rgb(199, 199, 199)" }} />}
        </>
    );
};

export default Header;