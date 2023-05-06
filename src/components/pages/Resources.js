import React from 'react';
import resourceImage from "../images/keyboardHeader.jpg";
import professionalPhoto from "../images/professional.jpg";
import '../../App.css';

export default function Resources() {

  return (
    <div>
      <img src={resourceImage} alt="resources" className="resourceImage"/>
      <div className='resourceHeading'>
        <h1>About Me</h1>
      </div>
      <div className='resourcePage'>
        <img src={professionalPhoto} alt="professional" className="professionalPhoto"/>
        <p>
        Hi there! I'm a full stack software engineer with over 7 years of experience in web development. 
        I'm passionate about building robust and scalable applications using the latest technologies and 
        frameworks. Throughout my career, I've worked on a variety of projects ranging from e-commerce 
        platforms to social media applications, and have gained expertise in front-end development, back-end 
        development, and database management. I'm always on the lookout for new challenges and opportunities 
        to learn and grow as a developer. When I'm not coding, you can find me hiking in the mountains or 
        experimenting with new recipes in the kitchen.
        </p>

        <h2>Useful Coding and Development Resources</h2>
        <ul>
          <li><a href="https://www.khanacademy.org/">Khan Academy</a> - Free courses for various topics</li>
          <li><a href="https://dotnetfiddle.net/">.NET Fiddle</a> - Free online compiler for C#</li>
          <li><a href="https://www.onlinegdb.com/online_java_compiler">OnlineGDB</a> - Free online compiler for Java</li>
          <li><a href="https://codingbat.com/java">CodingBat</a> - Free problems to learn Java and Python</li>
          <li><a href="https://edabit.com/challenges/java">Edabit</a> - Free language practice problems</li>
          <li><a href="https://codelabs.developers.google.com/">Google Codelabs</a> - Free coding tutorials</li>
          <li><a href="https://askubuntu.com/">Ask Ubuntu</a> - Platform to ask questions about Linux</li>
          <li><a href="https://docs.oracle.com/javase/10/docs/api/overview-summary.html">Java 10 API Documentation</a> - for methods, classes, and instantiation clarity</li>
          <li><a href="https://www.w3schools.com/">W3Schools</a> - Learning resources for HTML, CSS, Bootstrap, etc. with certifications</li>
          <li><a href="https://www.hackerrank.com/domains/sql">HackerRank</a> - Learn SQL through practice cases</li>
        </ul>
      </div>
    </div>
  );
}

