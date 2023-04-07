/*
 * npm install react-scripts --save-dev
 * npm run deploy
 */

import React from "react";
import HeroSection from "../HeroSection";
import '../../App.css';

function Home(){
    return (
        <div>
            <HeroSection />
            <br/>
            <h2>About Me</h2>
            <div>
            For the past 8 years, I have worked towards enhancing my knowledge of programming 
            and utilizing my skills however applicable in the respective industry.  My passion 
            and determination are my main drivers for success while my positive attitude assists 
            me to lift those around me.  
            </div>
        </div>
    )
}

export default Home;