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
        <h1>GitHub Repos</h1>
      </div>
      <div className="githubPage">
        <div>
          <Button buttonStyle="btn--outline" buttonSize="btn--large">Python Projects</Button>
        </div>
        <div>
          <Button buttonStyle="btn--outline" buttonSize="btn--large">Java Projects</Button>
        </div>
        <div>
          <Button buttonStyle="btn--outline" buttonSize="btn--large">GAS Projects</Button>
        </div>
        <div>
          <Button buttonStyle="btn--outline" buttonSize="btn--large">R Projects</Button>
        </div>
        <div>
          <Button buttonStyle="btn--outline" buttonSize="btn--large">PHP Projects</Button>
        </div>
      </div>
    </div>
  );
}