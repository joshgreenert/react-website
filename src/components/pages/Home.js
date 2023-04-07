/*
 * npm install react-scripts --save-dev
 * npm run deploy
 */

import React from "react";
import '../../App.css';
import HeroSection from "../HeroSection";

function Home(){
    return (
        <div>
            <HeroSection button buttonLabel="Contact Me" />
        </div>
    )
}

export default Home;