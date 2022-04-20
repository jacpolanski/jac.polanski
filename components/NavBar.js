import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav, SSRProvider } from "react-bootstrap";
import { Link } from "react-scroll";
import LogoMain from "./LogoMain";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <SSRProvider>
        <Navbar
          bg="dark"
          expand="lg"
          variant="dark"
          className="bg-opacity-75"
          fixed="top"
          expanded={expanded}
        >
          <Container>
            <LogoMain />
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse
              className="justify-content-end fs-5"
              id="basic-navbar-nav"
            >
              <Nav>
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setExpanded(false)}
                >
                  Home
                </Link>
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setExpanded(false)}
                >
                  Soft Skills
                </Link>
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setExpanded(false)}
                >
                  Projects
                </Link>
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="about-me"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setExpanded(false)}
                >
                  About me
                </Link>
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setExpanded(false)}
                >
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </SSRProvider>
    </>
  );
};

export default NavBar;
