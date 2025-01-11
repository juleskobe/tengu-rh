

import React from "react";

function Contact() {
  return (
    <div className="container my-5">
      <h2 className="text-center">Contact Us</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;


/*
import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contactez-nous</h2>
      <div className="contact-content">
        <img src="/assets/images/contact-us.jpg" alt="Contactez-nous" className="contact-image" />
        <p>
          Notre équipe se tient à votre disposition pour répondre à vos besoins. N'hésitez pas à nous joindre
          pour planifier une rencontre ou en savoir plus sur nos services.
        </p>
        <p>Email : <a href="mailto:tengu.rh.placement@gmail.com">tengu.rh.placement@gmail.com</a></p>
        <p>Téléphone : <a href="tel:+221777832976">+221 77 783 2976</a></p>
      </div>
      <form id="contact-form">
        <input type="text" name="name" placeholder="Votre Nom" required />
        <input type="email" name="email" placeholder="Votre Email" required />
        <textarea name="message" placeholder="Votre Message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
*/