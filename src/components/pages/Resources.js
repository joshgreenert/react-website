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
        <h2>Writing and Typing</h2>
        <ul>
          <li><a href='http://www.keybr.com/'>http://www.keybr.com/</a> - Typing enhancer</li>
          <li><a href='https://www.typing.com/typinggames'>https://www.typing.com/typinggames</a> - Typing enhancer</li>
          <li><a href='https://owl.english.purdue.edu/owl/'>https://owl.english.purdue.edu/owl/</a> - MLA and APA reference guide</li>
          <li><a href='http://www.fakenamegenerator.com/'>http://www.fakenamegenerator.com/</a> - Fake name creator</li>
          <li><a href='http://www.paperrater.com/free_paper_grader'>http://www.paperrater.com/free_paper_grader</a> - Paper evaluation to catch errors</li>
        </ul>

        <h2>Coding and Development</h2>
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

