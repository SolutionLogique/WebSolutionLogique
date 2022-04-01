import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faMapLocation,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./notrecosiete.scss";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function NotreSociete() {
  return (
    <div>
      <h1>Notre Societe</h1>
      <div className="society_who_am">
        <div className="container">
          <h1>En savoir plus</h1>
          <h2>Solution Logique Informatique</h2>
          <p>
            Solution Logique Informatique propose ses services sur le secteur de
            Haute-Savoie et Savoie
          </p>
          <div className="advice_society">
            <div className="advice_society_card">
              <FontAwesomeIcon
                className="society_service_card"
                icon={faPeopleGroup}
              />
              <p>Qui sommes-nous</p>
              <p>
                SLI / Solution Logique Informatique Depuis plus de 25 ans, nous
                avons toujours voulu marquer notre volonté, d’une forte
                implantation locale en Rhône-Alpes. 11 collaborateurs
              </p>
            </div>
            <div className="advice_society_card">
              <FontAwesomeIcon
                className="society_service_card"
                icon={faMapLocation}
              />
              <p>Ou Sommes-nous ?</p>
              <p>Le siège est implanté à Annnecy en Haute-Savoie</p>
            </div>
            <div className="advice_society_card">
              <FontAwesomeIcon
                className="society_service_card"
                icon={faCircleInfo}
              />
              <p>Que faisons nous ?</p>
              <p>
                Informatique Solution d’impression – GED Téléphonie – Accès
                Internet Communication collaborative Sécurité – externalisation
                Audit et conseil
              </p>
            </div>
          </div>
        </div>
        <h1>Serivce Logique Informatique</h1>
        <h2>Partenaire Associatif : </h2>
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
export default NotreSociete;
