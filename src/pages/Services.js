import React from "react";

function Services() {
  return (
    <section id="services">
      <h2>Nos Services</h2>
      <div className="service-buttons">
        <a href="#hospitality" className="btn">Hospitalité</a>
        <a href="#conventions" className="btn">Conventions et Salons</a>
        <a href="#restauration" className="btn">Restauration Hospitalière</a>
      </div>
      <div className="service">
        <img src="/assets/images/service-recruitment.jpg" alt="Recrutement" className="service-image" />
        <h3>Recrutement et Placement</h3>
        <p>
          Placement permanent, temporaire et international. Notre approche personnalisée garantit un
          appariement optimal entre les besoins de nos clients et les compétences des candidats.
        </p>
      </div>
    </section>
  );
}

export default Services;




/*
import React from "react";

function Services() {
  return (
    <section id="services">
      <h2>Nos Services</h2>
      <div className="service-buttons">
        <a href="#hospitality" className="btn">Hospitalité</a>
        <a href="#conventions" className="btn">Conventions et Salons</a>
        <a href="#restauration" className="btn">Restauration Hospitalière</a>
      </div>
      <div className="service">
        <img src="/assets/images/service-recruitment.jpg" alt="Recrutement" className="service-image" />
        <h3>Recrutement et Placement</h3>
        <p>
          Placement permanent, temporaire et international. Notre approche personnalisée garantit un
          appariement optimal entre les besoins de nos clients et les compétences des candidats.
        </p>
      </div>
    </section>
  );
}

export default Services;
*/