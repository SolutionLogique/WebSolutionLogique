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
        <Link to="/nosServices">Nos Services</Link>
      </li>
      <ul>
        <li class="deroulant">
          <a>Matériel & Réseau &ensp;</a>
          <ul class="sous">
            <li>
              <Link to="/materielsInformatiques">
                <a>Matériels Informatiques</a>
              </Link>
            </li>
            <li>
              <a>Virtualisation / Serveurs</a>
            </li>
            <li>
              <Link to="/print">
                <a>Imprimante</a>
              </Link>
            </li>
            <li>
              <Link to="/data">
                <a>Sauvegarde de données</a>
              </Link>
            </li>
            <li>
              <Link to="/telecom">
                <a>Opérateur Télécom</a>
              </Link>
            </li>
            <li>
              <Link to="/security">
                <a>Sécurité Internet</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <li>
        <Link to="/contact">Contactez nous</Link>
      </li>
    </nav>
  );
}

export default Navbar;
