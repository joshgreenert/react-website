import React from "react";
import { Button } from "./Button";
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
                <div className="hero-btns">
                    <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large"
                        location="/react-website/contact">
                        Contact
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;