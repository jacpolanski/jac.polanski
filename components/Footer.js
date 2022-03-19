import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" className="bg-opacity-75">
                <Container className="flex-column justify-content-center text-light">
                    <div className="socials-icons text-center fs-2">
                        <FontAwesomeIcon icon={faGithub} className="mx-2"/>
                        <FontAwesomeIcon icon={faLinkedin} className="mx-2"/>
                    </div>
                    <div className="fs-6">
                        &copy; Copyright 2022, jac.polanski. All Rights Reserved
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Footer;
