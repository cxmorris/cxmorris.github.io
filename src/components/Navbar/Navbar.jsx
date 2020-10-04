import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Clare Morris</h1>
        <div className="info-bar">
          <p className="info-item">cxmorris@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
            className = "info-link"
            to={{pathname: "https://linkedin.com/in/clare-morris-23a89017b"}}
            target="blank"
            >
              LinkedIn
            </Link>

          <Link 
            className = "info-link"
            to={{pathname: "https://github.com/cxmorris"}}
            target="blank"
            >
              GitHub
            </Link>

            <Link 
            className = "info-link"
            to={{pathname: "https://www.facebook.com/clare.morris.357"}}
            target="blank"
            >
              Facebook
            </Link>

            

            
        </div>
      </div>
      <div className="nav-background">

      <Link className="nav-link" to={{pathname: "/about"}}>About</Link>
      <Link className="nav-link" to={{pathname: "/education"}}>Education</Link>
      <Link className="nav-link" to={{pathname: "/experience"}}>Experience</Link>
      <Link className="nav-link" to={{pathname: "/projects"}}>Projects</Link>
      
        </div>
    </>
  );
}
