import "./materielreseau.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer,faServer, faPrint, faDatabase,faNetworkWired, faShield } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function MaterielReseau() {
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
          <Link to="/">
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
    </div>
  );
}

export default MaterielReseau;
