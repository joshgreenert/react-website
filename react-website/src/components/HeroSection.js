import React from "react";
import { Button } from "./Button";
import './HeroSection.css';

function HeroSection(){
    return (
        <div className="hero-container">
            <img src="./images/img-home.jpg" alt="home image"/>
            <h1>Welcome To My Site</h1>
            <p>something something something</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Contact
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;