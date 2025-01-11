import React from "react";

function Home() {
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

export default Home;






/*
import React from "react";

function Home() {
  return (
    <div>
      <h1>Bienvenue sur TËNGU RH</h1>
      <p>
        Votre partenaire pour l'emploi dans tous les secteurs, offrant des solutions personnalisées pour recruter les meilleurs talents et accompagner votre réussite.
      </p>
      <button>Découvrir nos services</button>
    </div>
  );
}

export default Home;
*/


/*
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

*/