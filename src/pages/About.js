


import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img
            src="/assets/images/about-us.jpg"
            alt="Our Team"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            TËNGU RH knows hospitality. It takes years of experience to build
            solid working relationships.
          </p>
          <p>We know the best talent when we see it.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

/*
import React from "react";

function About() {
  return (
    <section id="about">
      <h2>À Propos de Nous</h2>
      <div className="about-content">
        <img src="/assets/images/about-us.jpg" alt="Notre équipe" className="about-image" />
        <p>
          TËNGU RH connaît l'hospitalité. Il faut des années d'expérience pour nouer des relations de travail solides.
          Nous travaillons en partenariat avec les entreprises et institutions depuis plusieurs années.
        </p>
        <p>
          TËNGU RH connaît le personnel. Nous savons reconnaître les meilleurs talents lorsque nous les rencontrons.
        </p>
        <p>
          TËNGU RH comprend les exigences urgentes de l'industrie. Que vous ayez besoin d'une équipe
          pour un événement ou d'un personnel temporaire.
        </p>
      </div>
    </section>
  );
}

export default About;
*/