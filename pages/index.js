import React from "react";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <>
      <div className="background-home" id="home">
        <div className="wrapper-home">
          <HomePage />
        </div>
      </div>

      <div className="background-skills" id="skills">
        <div className="wrapper-skills"></div>
      </div>

      <div className="background-projects" id="projects">
        <div className="wrapper-projects"></div>
      </div>

      <div className="background-about-me" id="about-me">
        <div className="wrapper-about-me"></div>
      </div>

      <div className="background-contact" id="contact">
        <div className="wrapper-contact"></div>
      </div>
    </>
  );
}
