import React, { Component } from "react";
import "./About.css";
import CutePic from "../../assets/bighappy.jpeg";
  

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className = "intro-picture"/>
        </div>
        <div className="intro-item">
          <h1>
          CS @ Harvard, 2024
          </h1>
            <p>I am currently involved with Women Engineers Code,   
            Harvard Computer Society, Harvard Women in Computer Science and 
            Harvard Open Data Project. I also worked as a 
            research fellow this past summer in Harvard's Earth and Planetary Sciences 
            department developing graphical models of climate data in Python.
            </p>

            <p>I graduated from Oliver M. Hazen High School in June 2020. 
              While there, I founded a Girls Who Code chapter, 
              captained the school's cross country team for two consective years, served as a section leader in the school 
              band program, and served the community as part of the National Honor Society.
            </p>
          
          
            <p>Outside of CS, I am very involved in classical music!
              I play the French horn and absolutely love symphony orchestra.
              In fact, I almost went to music conservatory instead of university-
              I made it to the final auditions
              at The Juilliard School, yet ultimately decided a career in tech 
              would be more fulfilling for its wide impact and ability to help solve
              global issues.
            </p>
          </div>
      </div>
    </div>
  );
}
