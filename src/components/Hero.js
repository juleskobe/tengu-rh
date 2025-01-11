

import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="jumbotron text-center bg-primary text-white py-5">
      <h1 className="display-4">Welcome to TËNGU RH</h1>
      <p className="lead">We connect talent with opportunity.</p>
      <a href="/services" className="btn btn-light btn-lg">
        Explore Our Services
      </a>
    </div>
  );
}

export default Hero;

/*
import React from "react";

function Hero() {
  return (
    <section id="home">
      <div className="hero" style={{ backgroundImage: "url('/assets/images/hero-image.jpg')" }}>
        <h2>Bienvenue sur TËNGU RH</h2>
        <p>
          Votre partenaire pour l'emploi dans tous les secteurs, offrant des solutions personnalisées
          pour recruter les meilleurs talents et accompagner votre réussite.
        </p>
        <a href="#services" className="btn">Découvrir nos services</a>
      </div>
    </section>
  );
}

export default Hero;
*/