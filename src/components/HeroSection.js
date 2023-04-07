import React from "react";
import { Button } from "./Button";
import homeImage from "./images/home.jpg";
import HomeConstants from "./constants/HomeConstants";
import './HeroSection.css';

function HeroSection(props){

    const handleContactClick = () => {
        window.location.href = '/contact';
    };

    return (
        <div>
            <div>
                <img src={homeImage} alt="home" className="heroImage"/>
            </div>
            <div className="hero-container">
                <h1>{HomeConstants.HOME_HEADING}</h1>
                <h2>{HomeConstants.HOME_SUBLABEL}</h2>
                <div className="hero-btns">
                    {props.button && (
                        <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                        onClick={handleContactClick}
                        >
                        {props.buttonLabel}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeroSection;