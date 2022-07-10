import React from 'react';
import Slider from "react-slick";
import { FaDownload } from "react-icons/fa"
import './Hero.scss'
import PrimaryBtn from '../../../common/PrimaryBtn/PrimaryBtn';
import { Link } from 'react-router-dom';
import Question from '../../Question/Question';

const questions = [
    { id: 1, question: "What is Cineflix ?", answer: "Cineflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices There's always something new to discover and new TV shows and movies are added every week!" },
    { id: 2, question: "How much does Cineflix cost ? ?", answer: "Watch Cineflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contractsevery week!" },
    { id: 3, question: "Where can I watch ?", answer: "Watch anywhere, anytime. Sign in with your Cineflix account to watch instantly on the web at Cineflix.com from your personal computer or on any internet-connected device that offers the Cineflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Cineflix with you anywhere" },
    { id: 4, question: "How do I cancel ?", answer: "Cineflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." },
    { id: 5, question: "What can I watch on Cineflix ?", answer: "Cineflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices There's always something new to discover and new TV shows and movies are added every week!" },

]


const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: false,
        prevArrow: false,
        arrows: false,
    };
    return (
        <>
            <div className='hero'>
                <div className='hero_text'>
                    <h2>Enjoy on your TV</h2>
                    <h4>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h4>
                </div>
                <div className='hero_image_tv'>
                    <div className="hero_image" style={{ width: '400px' }}>
                        <Slider {...settings}>
                            <img width="400px" height="230px" src="https://i.ibb.co/qY46Ywx/images-1.webp" alt="" />
                            <img width="400px" height="230px" src="https://i.ibb.co/88svpgy/images-2.jpg" alt="" />
                            <img width="400px" height="230px" src="https://i.ibb.co/6HrMj7Z/images-3.webp" alt="" />
                            <img width="400px" height="230px" src="https://i.ibb.co/tcswXDr/images-4.jpg" alt="" />
                            <img width="400px" height="230px" src="https://i.ibb.co/2qYyFmC/images-5.jpg" alt="" />
                            <img width="400px" height="230px" src="https://i.ibb.co/prCWY52/images-6.jpg" alt="" />
                        </Slider>

                    </div>
                    <div className="shadow-box"></div>
                    <div className='shadow_box_bottom'></div>
                </div>


            </div>

            <div className='float'></div>
            <div className='hero'>
                <div className='mobile_image_tv'>
                    <div className="mobile_image" style={{ width: '200px' }}>
                        <img width="200px" src="https://i.ibb.co/HPm8LwJ/images-7.png" alt="" />
                    </div>
                    <div className="mobile_box">
                        <div className='image_box'>
                            <div>
                                <img width="50px" src="https://i.ibb.co/6HrMj7Z/images-3.webp" alt="" />
                            </div>
                            <div>
                                <p>Gray Hound</p>
                                <p style={{ color: "blue" }}><small>Downloading...</small></p>
                            </div>
                        </div>
                        <div className="icons">
                            <FaDownload id='icon'></FaDownload>
                        </div>
                    </div>
                    <div className='mobile_box_bottom'></div>
                </div>
                <div className='hero_text'>
                    <h2>Download Your Shows</h2>
                    <h4>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h4>
                </div>
            </div>
            <div className="float"></div>

            <div className="hero">

                <div className='hero_text'>
                    <h2>Book For Your Kids Now</h2>
                    <h4>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h4>
                </div>
                <div className='hero_image_tv'>
                    <div className="hero_image" style={{ width: '400px' }}>
                        <iframe width="380" height="315" src="https://www.youtube.com/embed/aRJw72rniss?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                        {/* <iframe width="380" height="315" src="https://www.youtube.com/embed/bphUdbIHY3E?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    </div>
                    <div className="shadow-box"></div>
                    <div className='shadow_box_bottom'></div>
                </div>
            </div>

            <div className="finish">
                <Link to="/login"> Finish Sign up</Link>
            </div>

            <div style={{ marginTop: "100px", marginBottom: "50px" }} className="questions">
                {
                    questions.map((item, index) =>
                        <Question item={item} key={item.id}></Question>
                    )
                }
            </div>

        </>
    );
};

export default Hero;