import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation_bar">
      <Link to="/">
        <img
          alt="logo_solution_logique_informatique"
          href=""
          src="assets/logo.png"
        ></img>
      </Link>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/logicielsEbp">Nos logiciels EBP/ Formations</Link>
      </li>
      <ul>
        <li class="deroulant">
          <Link to="/nosServices">
         Nos Services &ensp;
          </Link>
          <ul class="sous">
            <li>
              <Link to="/informatique">
                Informatique
              </Link>
            </li>
            <li>
              <Link to ="/telecom">
              Télécom
              </Link>
            </li>
            <li>
              <Link to="/securite">
                Sécurité
              </Link>
            </li>
            <li>
              <Link to="/web">
                Web
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <li>
        <a href="https://www.islonline.com/fr/fr/join/" target="blank">Télémaintenance</a>
      </li>
      <li>
        <Link to="/contact">Contactez nous</Link>
      </li>
    </nav>
  );
}

export default Navbar;
