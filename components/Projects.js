import React from "react";
import Container from "react-bootstrap/Container";
import { Card, CardGroup } from "react-bootstrap";
import uniqid from "uniqid";
import { projects } from "../data/projects";

function Projects() {
  return (
    <Container className="d-flex justify-content-center align-items-center overflow-auto">
      <CardGroup>
        {projects.map((project) => (
          <Card key={uniqid()}>
            <Card.Img variant="top" src={project.src} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text className="fs-5">{project.text}</Card.Text>
              <a
                className="stretched-link"
                href={project.gitLink}
                target="_blank"
                rel="noreferrer"
              />
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
}

export default Projects;
