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
        <p className="aboutMe">
        Hi there! I'm a full stack software engineer with over 7 years of experience in web development. 
        I'm passionate about building robust and scalable applications using the latest technologies and 
        frameworks. Throughout my career, I've worked on a variety of projects ranging from e-commerce 
        platforms to social media applications, and have gained expertise in front-end development, back-end 
        development, and database management. I'm always on the lookout for new challenges and opportunities 
        to learn and grow as a developer. When I'm not coding, you can find me rock climbing, playing pool, or 
        experimenting with new recipes in the kitchen.
        </p>

        <h2 className='resourceHeading2'>Useful Coding and Development Resources</h2>
        <p className="aboutMe">Below are some resources that I've found helpful throughout my career.  </p>
        <table>
          <tr>
            <th>Resource</th>
            <th>Description</th>
          </tr>
          <tr>
            <td><a href="https://www.khanacademy.org/">Khan Academy</a></td>
            <td>Free courses for various topics</td>
          </tr>
          <tr>
            <td><a href="https://dotnetfiddle.net/">.NET Fiddle</a></td>
            <td>Free online compiler for C#</td>
          </tr>
          <tr>
            <td><a href="https://www.onlinegdb.com/online_java_compiler">OnlineGDB</a></td>
            <td>Free online compiler for Java</td>
          </tr>
          <tr>
            <td><a href="https://codingbat.com/java">CodingBat</a></td>
            <td>Free problems to learn Java and Python</td>
          </tr>
          <tr>
            <td><a href="https://edabit.com/challenges/java">Edabit</a></td>
            <td>Free language practice problems</td>
          </tr>
          <tr>
            <td><a href="https://codelabs.developers.google.com/">Google Codelabs</a></td>
            <td>Free coding tutorials</td>
          </tr>
          <tr>
            <td><a href="https://askubuntu.com/">Ask Ubuntu</a></td>
            <td>Platform to ask questions about Linux</td>
          </tr>
          <tr>
            <td><a href="https://docs.oracle.com/javase/10/docs/api/overview-summary.html">Java 10 API Documentation</a></td>
            <td>For methods, classes, and instantiation clarity</td>
          </tr>
          <tr>
            <td><a href="https://www.w3schools.com/">W3Schools</a></td>
            <td>Learning resources for HTML, CSS, Bootstrap, etc. with certifications</td>
          </tr>
          <tr>
            <td><a href="https://www.hackerrank.com/domains/sql">HackerRank</a></td>
            <td>Learn SQL through practice cases</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

