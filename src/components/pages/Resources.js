import React from 'react';
import resourceImage from "../images/keyboardHeader.jpg";
import '../../App.css';

export default function Resources() {
  return (
    <div>
      <img src={resourceImage} alt="resources" className="resourceImage"/>
      <div className='resourceHeading'>
        <h1>Resources</h1>
      </div>
      <div className='resourcePage'>

      </div>
    </div>
  );
}