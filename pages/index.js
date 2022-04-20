import React from "react";
import HomePage from "../components/HomePage";
import { Element } from "react-scroll";
import SkillsChart from "../components/SkillsChart";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="scroll-container">
      <div className="background-home scroll-snap">
        <Element className="wrapper-home" name="home">
          <HomePage />
        </Element>
      </div>

      <div className="background-skills">
        <Element className="wrapper-skills" name="skills">
          <SkillsChart className="skill-chart" />
        </Element>
      </div>

      <div className="background-projects">
        <Element className="wrapper-projects" name="projects">
          <Projects />
        </Element>
      </div>

      <div className="background-about-me">
        <Element className="wrapper-about-me" name="about-me"></Element>
      </div>

      <div className="background-contact">
        <Element className="wrapper-contact" name="contact"></Element>
      </div>
    </div>
  );
}
