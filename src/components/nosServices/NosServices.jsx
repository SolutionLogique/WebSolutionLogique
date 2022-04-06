import "./services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDisplay,
  faPhone,
  faVideoCamera,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

function NosServices() {
  $(".tab").click(function () {
    $(".tab").removeClass("actif");
    $(this).addClass("actif");
    $(".content").removeClass("actif");
  });

  $("#tab1").click(function () {
    $("#content1").addClass("actif");
  });

  $("#tab2").click(function () {
    $("#content2").addClass("actif");
  });

  $("#tab3").click(function () {
    $("#content3").addClass("actif");
  });

  $("#tab4").click(function () {
    $("#content4").addClass("actif");
  });

  return (
    <div className="container">
      <div className="services_tabs">
        <div className="tabs">
          <div className="tab actif" id="tab1">
            <FontAwesomeIcon className="icon_tab_content" icon={faDisplay} />
            Logiciels
          </div>
          <div className="tab" id="tab2">
            <FontAwesomeIcon className="icon_tab_content" icon={faPhone} />
            Téléphonie IP
          </div>
          <div className="tab" id="tab3">
            <FontAwesomeIcon
              className="icon_tab_content"
              icon={faVideoCamera}
            />
            Vidéo IP
          </div>
          <div className="tab" id="tab4">
            <FontAwesomeIcon className="icon_tab_content" icon={faGears} />
            Site Internet
          </div>
        </div>
        <div className="content actif" id="content1">
          <h1 className="title_content">Logiciels</h1>
          <div className="tab_content">
            <div className="tab_content_left_side">
              <p>
                Dignissim integer ut convallis nisl bibendum parturient vivamus
                leo sociis malesuada consectetur nullam a tincidunt ullamcorper
                a eros molestie phasellus nec nostra velit mi leo orci a
                convallis torquent.Nunc a dapibus mi hac at a libero eu lectus
                inceptos a viverra at feugiat.
              </p>
            </div>
            <div className="tab_content_right_side">
              <img
                className="img_right_side"
                alt="logo_solution_logique_informatique"
                href=""
                src="assets/ebp.jpg"
              ></img>
            </div>
          </div>
        </div>
        <div className="content" id="content2">
          <h1 className="title_content">Téléphonie IP</h1>
          <div className="tab_content">
            <div className="tab_content_left_side">
              <p className="title_tab">
                Solution Logique, vous propose l’intégration de votre Standard
                téléphonique, poste fixe ou mobile et pouvant utiliser la
                technologie « Voix sur IP ».
              </p>
              <ul>
                <li>
                  Administration avec gestion des communications totalement{" "}
                  <span>paramétrable</span>.
                </li>
                <li>
                  <span>Configuration et télémaintenance</span> par navigateur
                  web.
                </li>
                <li>
                  <span>Passerelle GSM</span> (Pour transférer un appel du
                  bureau vers un téléphone portable).
                </li>
                <li>
                  Messagerie vocale <span>personnalisable</span>, Musique
                  d’attente téléchargeable.
                </li>
              </ul>
            </div>
            <div className="tab_content_right_side">
              <img
                className="img_right_side"
                alt="logo_solution_logique_informatique"
                href=""
                src="assets/telecom.jpg"
              ></img>
            </div>
          </div>
        </div>
        <div className="content" id="content3">
          <h1 className="title_content">Vidéo IP</h1>
          <div className="tab_content">
            <div className="tab_content_left_side">
              <p className="title_tab">
                Solution Logique propose le matériel, l’installation et la
                maintenance de solutions de vidéo protection / vidéo IP.
              </p>
              <ul>
                <li>
                  Visualisation de vos locaux en <span>temps réel</span> de
                  l’intérieur comme à l’extérieur.
                </li>
                <li>
                  <span>Dissuasion</span> des intrusions et dégradations de
                  matériels, magasin, entrepôt, succursale
                </li>
                <li>
                  Augmentation de votre <span>rentabilité</span> sur les écarts
                  de stock ou perte d’objet.
                </li>
                <li>
                  <span>Consultation</span> des images par internet sur tous
                  supports, Ecran, Smartphone, Android.
                </li>
                <li>
                  Programmation et <span>personnalisation</span> de l’interface
                  par simple navigateur Web.
                </li>
              </ul>
            </div>
            <div className="tab_content_right_side">
              <img
                className="img_right_side"
                alt="logo_solution_logique_informatique"
                href=""
                src="assets/video.jpg"
              ></img>
            </div>
          </div>
        </div>
        <div className="content" id="content4">
          <h1 className="title_content">Site Internet</h1>
          <div className="tab_content">
            <div className="tab_content_left_side">
              <p className="title_tab">
                Site Internet : Création Sites Web Vitrines, e-Commerces,
                e-Catalogues
              </p>
              <ul>
                <li>
                  Un <span>design soigné et adapté</span> à l’image de votre
                  entreprise pour valoriser vos services.
                </li>
                <li>
                  Un <span>référencement</span>, action continue importante pour
                  le trafic de votre site.
                </li>
                <li>
                  Un renfoncement de votre <span>identité visuelle</span> sur
                  Internet.
                </li>
                <li>
                  Un <span>suivi personnalisé</span> tout au long de votre
                  projet.
                </li>
                <li>
                  Intégration des <span>médias sociaux</span> pour une meilleure
                  interaction (Facebook,Twitter…).
                </li>
              </ul>
            </div>
            <div className="tab_content_right_side">
              <img
                className="img_right_side"
                alt="logo_solution_logique_informatique"
                href=""
                src="assets/web.jpg"
              ></img>
            </div>
          </div>
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
          <a href="/" class="btn_help btn_help_right">
            Besoin d'aide ?
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default NosServices;
