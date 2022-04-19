import "./ebpcomptabilite.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Ebpcomptabilite() {
  return (
    <div>
      <h1>EBP Comptabilité</h1>
      <div className="container ebp_comptabilite">
        <h2>3 gammes de produits</h2>
        <p>
          La nouvelle génération de logiciels de Comptabilité laisse désormais
          place à une nouvelle identité. Le découpage fonctionnel des logiciels
          que vous connaissez actuellement (Classic, Pro, Ligne PME) fait
          également peau neuve et sera dorénavant représenté par les gammes
          suivantes :
        </p>
        <h3>
          <span>EBP Comptabilité</span> est une solution qui vous permet de
          tenir votre comptabilité générale et analytique. L’échange des données
          entre le logiciel EBP et la solution d’un cabinet d’Expert-Comptable
          est intégré grâce à l’outil de Communication Entreprise-Expert.
        </h3>
        <div className="colum_software_compta">
          <div className="colum_software_1">
            <img
              className="device_sli"
              alt="logo_solution_logique_informatique"
              href=""
              src="assets/active.png"
            ></img>
            <div className="description_software">
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Comptabilité générale
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Saisie automatisée
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Tableau de bord
              </p>
            </div>
          </div>
          <div className="colum_software_2">
            <img
              className="device_sli"
              alt="logo_solution_logique_informatique"
              href=""
              src="assets/pro.png"
            ></img>
            <div className="description_software">
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Comptabilité générale
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Saisie automatisée
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Tableau de bord
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Déclaration de TVA
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Gestion des impayés
              </p>
            </div>
          </div>
          <div className="colum_software_3">
            <img
              className="device_sli"
              alt="logo_solution_logique_informatique"
              href=""
              src="assets/elite.png"
            ></img>
            <div className="description_software">
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Comptabilité générale
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Saisie automatisée
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Tableau de bord
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Déclaration de TVA
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Gestion des impayés
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Ratios financiers
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Personnaliastion du logiciel (fiches, vues, etc.)
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="buttons_more_ebp_pdf">
            <div className="buttons_1_ebp">
              <a
                className="btn_help btn_help_right"
                href="assets/ebp-logiciel-comptabilite-activ-2022.pdf"
                target="blank"
              >
                En savoir plus ?
              </a>
            </div>
            <div className="buttons_2_ebp">
              <a
                className="btn_help btn_help_right"
                href="assets/ebp-logiciel-comptabilite-pro-2022.pdf"
                target="blank"
              >
                En savoir plus ?
              </a>
            </div>
            <div className="buttons_3_ebp">
              <a
                className="btn_help btn_help_right"
                href="assets/ebp-logiciel-comptabilite-elite-2022.pdf"
                target="blank"
              >
                En savoir plus ?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ebpcomptabilite;
