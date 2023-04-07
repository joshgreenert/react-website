import React from "react";
import { Button } from "./Button";
import homeImage from "./images/home.jpg";
import HomeConstants from "./constants/HomeConstants";
import './HeroSection.css';
import { Link } from "react-router-dom";

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
                {button && (
                    <Link to="/contact" className="btn-mobile">
                        <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                        >
                        {buttonLabel}
                        </Button>
                    </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeroSection;