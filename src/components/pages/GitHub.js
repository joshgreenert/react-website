import React from 'react';
import { Button } from '../Button';
import githubImage from '../images/github.webp';
import './../Button.css';
import '../../App.css';

export default function GitHub() {
  return (
    <div>
      <img src={githubImage} alt="github" className="githubImage"/>
      <div className="githubHeading">
        <h1>Work / Projects</h1>
      </div>
      <div className="githubPage">
        <div>
          <Button buttonStyle="btn--outline" buttonSize="btn--large"
            location="https://github.com/joshgreenert/Portfolio">Portfolio Projects</Button>
        </div>
      </div>
      <div className="githubHeading">
        <h1>Additional Repositories</h1>
      </div>
      <div className="githubPage">
        <div>
          <Button buttonStyle="btn--outline" buttonSize="btn--large"
            location="https://github.com/joshgreenert/Python-Projects">Python Projects</Button>
        </div>
        <div>
          <Button buttonStyle="btn--outline" buttonSize="btn--large"
            location="https://github.com/joshgreenert/Java-Projects">Java Projects</Button>
        </div>
        <div>
          <Button buttonStyle="btn--outline" buttonSize="btn--large"
            location="https://github.com/joshgreenert/GAS-Projects">GAS Projects</Button>
        </div>
        <div>
          <Button buttonStyle="btn--outline" buttonSize="btn--large"
            location="https://github.com/joshgreenert/R-Projects">R Projects</Button>
        </div>
        <div>
          <Button buttonStyle="btn--outline" buttonSize="btn--large"
            location="https://github.com/joshgreenert/PHP-Projects">PHP Projects</Button>
        </div>
      </div>
    </div>
  );
}