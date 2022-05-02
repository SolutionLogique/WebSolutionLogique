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
