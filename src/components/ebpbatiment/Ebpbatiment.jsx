import "./ebpbatiment.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Ebpbatiment() {
  return (
    <div>
        <h1>EBP Batiments</h1>
      <div className="container ebp_batiment">
        <h2>3 gammes de produits</h2>
        <p>
          La nouvelle génération de logiciels de Comptabilité laisse désormais
          place à une nouvelle identité. Le découpage fonctionnel des logiciels
          que vous connaissez actuellement (Classic, Pro, Ligne PME) fait
          également peau neuve et sera dorénavant représenté par les gammes
          suivantes :
        </p>
        <h3>
          EBP Gestion commerciale est une solution de gestion permettant de
          maitriser tous les aspects commerciaux de votre entreprise. C’est un
          logiciel à destination de l’ensemble des collaborateurs, du service
          commercial au service administratif en passant par la technique et la
          direction
        </h3>
        <div className="colum_software_batiment">
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
                Gestion des ventes (devis et factures)
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Relances clients
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Synchronisation des factures fournisseurs
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Accès à la compta automatisée
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Facturation périodique
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Assistance téléphonique
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
                Gestion des ventes (devis, commandes et factures)
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Relance clients
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Achats et stocks (commandes fournisseurs et réaprovisionnement)
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
                Statistiques détaillées
              </p>
              <p>
                <FontAwesomeIcon
                  className="comptabilite_icons"
                  icon={faCheck}
                />
                Application mobile EBP - Suivi devis factures
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
              <Link class="btn_help btn_help_right" to="/">
                En savoir plus ?
              </Link>
            </div>
            <div className="buttons_2_ebp">
              <Link class="btn_help btn_help_right" to="/">
                En savoir plus ?
              </Link>
            </div>
            <div className="buttons_3_ebp">
              <Link class="btn_help btn_help_right" to="/">
                En savoir plus ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ebpbatiment