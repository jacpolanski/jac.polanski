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
        <div className="wrapper-skills">
          <HomePage />
        </div>
      </div>

      <div className="background-projects" id="projects">
        <div className="wrapper-projects">
          <HomePage />
        </div>
      </div>

      <div className="background-about-me" id="about-me">
        <div className="wrapper-about-me">
          <HomePage />
        </div>
      </div>
    </>
  );
}
