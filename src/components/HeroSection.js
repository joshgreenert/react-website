import React from "react";
import { Button } from "./Button";
import homeImage from "./images/home.jpg";
import TextConstants from "./constants/HomeConstants";
import './HeroSection.css';

function HeroSection(){
    return (
        <div>
            <div>
                <img src={homeImage} alt="home image" className="heroImage"/>
            </div>
            <div className="hero-container">
                <h1>{TextConstants.HOME_HEADING}</h1>
                <h2>{TextConstants.HOME_SUBLABEL}</h2>
                <div className="hero-btns">
                    <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large"
                        location="/contact">
                        Contact
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;