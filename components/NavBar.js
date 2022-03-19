import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Nav, SSRProvider} from "react-bootstrap";
import Link from "next/link";
import LogoMain from "./LogoMain";

const NavBar = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <SSRProvider>
                <Navbar bg="dark" expand="lg" variant="dark" className="bg-opacity-75" expanded={expanded}>
                    <Container>
                        <LogoMain/>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"
                                       onClick={() => setExpanded(!expanded)}/>
                        <Navbar.Collapse
                            className="justify-content-end fs-5"
                            id="basic-navbar-nav"
                        >
                            <Nav onClick={() => setExpanded(false)}>
                                <Link href="/">
                                    <a className="nav-link">Home</a>
                                </Link>
                                <Link href="/skills">
                                    <a className="nav-link">Skills</a>
                                </Link>
                                <Link href="/projects">
                                    <a className="nav-link">Projects</a>
                                </Link>
                                <Link href="/about">
                                    <a className="nav-link">About me</a>
                                </Link>
                                <Link href="/contact">
                                    <a className="nav-link">Contact</a>
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
