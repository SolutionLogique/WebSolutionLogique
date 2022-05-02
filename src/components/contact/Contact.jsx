import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

function Contact() {
  const Result = () => {
    return <p>Message envoyé</p>;
  };

  const [result, showResult] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mw96vwq",
        "template_7j7u1zd",
        e.target,
        "user_G0gHK2FJGn3KFJ9N511Fv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    showResult(true);
  }

  return (
    <div className="container">
      <div className="contact_form_sli">
        <h1>Contact</h1>
        <div className="container" id="contact">
          <form onSubmit={sendEmail}>
            <input
              name="name"
              type="text"
              className="feedback-input"
              placeholder="Prénom"
              required="required"
            />
            <input
              name="email"
              type="email"
              className="feedback-input"
              placeholder="Email"
              required="required"
            />
            <textarea
              name="message"
              className="feedback-input"
              placeholder="message"
              required="required"
            />
            <input type="submit" value="Envoyer" />
            <div className="show_message">{result ? <Result /> : null}</div>
          </form>
        </div>
        <iframe className="google_map_sli" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.5863184807336!2d6.126918815830903!3d45.93956730961823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b8fac0b9e7fbf%3A0x857a5fad72b9eb0!2sSolution%20Logique%20Informatique!5e0!3m2!1sfr!2sfr!4v1651504531648!5m2!1sfr!2sfr"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      </div>
      <div className="home_conseils_sli">
        <div className="home_conseils_sli_left">
          <img
            className="img_right_side"
            alt="logo_solution_logique_informatique"
            href=""
            src="assets/assistance.png"
          ></img>
        </div>
        <div className="home_conseils_sli_right">
          <h1>Nous contacter</h1>
          <h2>Besoin d'une aide en télémaintenance ?</h2>
          <p>
            Accédez à la télémaintenance pour que Solution Logique intervienne
            directement sur votre ordinateur.
          </p>
          <a
            href="https://www.islonline.com/fr/fr/join/"
            className="btn_help btn_help_right"
            target="blank"
          >
            Besoin d'aide ?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
