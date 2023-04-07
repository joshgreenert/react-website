/*
 * npm install react-scripts --save-dev
 * npm run deploy
 */

import React from "react";
import HeroSection from "../HeroSection";
import { withRouter } from "react-router-dom";
import '../../App.css';

function Home(){
    return (
        <div>
            <HeroSection button buttonLabel="Contact Me" />
        </div>
    )
}

export default withRouter(Home);