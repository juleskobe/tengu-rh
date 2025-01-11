
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
