import "./securite.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSitemap,
  faNetworkWired,
  faCamera,
  faShieldVirus,
  faFileShield,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";

function Securite() {
  return (
    <div className="container">
      <h1>Solutions Sécurité</h1>
      <div className="container">
        <h2 className="informatique_section_title">Sécurité du SI</h2>
        <div className="card_informatique">
          <div className="card_informatique_left_side">
            <img
              alt="logo_solution_logique_informatique"
              href=""
              src="assets/securite.jpg"
            ></img>
          </div>
          <div className="card_informatique_right_side">
            <div className="informations_informatique">
              <FontAwesomeIcon
                className="icons_informatique"
                icon={faShieldVirus}
              />
              <h3>Sécurité de l'infrastructure</h3>
            </div>
            <div className="informations_informatique">
              <FontAwesomeIcon
                className="icons_informatique"
                icon={faShieldHeart}
              />
              <h3>Sécurité du réseau</h3>
            </div>
            <div className="informations_informatique">
              <FontAwesomeIcon
                className="icons_informatique"
                icon={faFileShield}
              />
              <h3>Sécurité des données</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Securite;
