import React from 'react';
import img from "../../common/Images/logo/movie-app-logo__1_-removebg-preview.png"
import "./Footer.scss"
const Footer = () => {
    return (
        <div className='footer_section'>
            <div className="float"></div>
            <footer class="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img class="footer_logo" src={img} alt="" />
                    <p>CINEFLIX <br /> Leading since 1992</p>
                </div>
                <div class="services">
                    <span class="footer-title">Services</span>
                    <small class="link link-hover">Branding</small>
                    <small class="link link-hover">Design</small>
                    <small class="link link-hover">Marketing</small>
                    <small class="link link-hover">Advertisement</small>
                </div>
                <div class="company">
                    <span class="footer-title">Company</span>
                    <small class="link link-hover">About us</small>
                    <small class="link link-hover">Contact</small>
                    <small class="link link-hover">Jobs</small>
                    <small class="link link-hover">Press kit</small>
                </div>
                <div class="terms_conditions">
                    <span class="footer-title">Legal</span>
                    <small class="link link-hover">Terms of use</small>
                    <small class="link link-hover">Privacy policy</small>
                    <small class="link link-hover">Cookie policy</small>
                </div>
            </footer>

            <div className="container footer__container">
                <p><small>{'\u00a9'} All rights reserved by Cineflicks</small></p>
            </div>
        </div>
    );
};

export default Footer;