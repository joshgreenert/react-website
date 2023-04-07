import React from "react";
import homeImage from "./images/home.jpg";
import HomeConstants from "./constants/HomeConstants";
import './HeroSection.css';

function HeroSection(){

    return (
        <div>
            <div>
                <img src={homeImage} alt="home" className="heroImage"/>
            </div>
            <div className="hero-container">
                <h1>{HomeConstants.HOME_HEADING}</h1>
                <h2>{HomeConstants.HOME_SUBLABEL}</h2>
            </div>
        </div>
    )
}

export default HeroSection;