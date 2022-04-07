import "./informatique.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer,faServer, faPrint, faDatabase,faNetworkWired, faShield } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Informatique() {
  return (
    <div className="container">
      <h1>Solutions informatiques</h1>
      <div class="container_card">
        <div class="card">
          <Link to="MaterielsInformatiques">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <FontAwesomeIcon
                    className="materiel_reseau_icons"
                    icon={faComputer}
                  />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Matériels Informatique</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="card">
          <Link to="/materielReseau/materielsInformatiques">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                <FontAwesomeIcon
                    className="materiel_reseau_icons"
                    icon={faServer}
                  />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Virtualisation & Serveur</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="card">
          <Link to="/">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                <FontAwesomeIcon
                    className="materiel_reseau_icons"
                    icon={faPrint}
                  />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Système d'impression</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div class="container_card">
        <div class="card">
          <Link to="/">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                <FontAwesomeIcon
                    className="materiel_reseau_icons"
                    icon={faDatabase}
                  />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Sauvegarde de Données</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="card">
          <Link to="/Telecom">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                <FontAwesomeIcon
                    className="materiel_reseau_icons"
                    icon={faNetworkWired}
                  />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Réseaux / Opérateur Télécom</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="card">
          <Link to="/">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                <FontAwesomeIcon
                    className="materiel_reseau_icons"
                    icon={faShield}
                  />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Sécurité Informatique</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </Link>
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

export default Informatique;
