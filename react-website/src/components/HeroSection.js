import React from "react";
import { Button } from "./Button";
import homeImage from "./images/img-home.jpg";
import TextConstants from "./constants/TextConstants";
import './HeroSection.css';

function HeroSection(){
    return (
        <div className="hero-container">
            <img src={homeImage} alt="home image" className="heroImage"/>
            <h1>{TextConstants.HOME_HEADING}</h1>
            <h2>{TextConstants.HOME_SUBLABEL}</h2>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Contact
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;