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
        <Link to="/nosServices">Nos logiciels EBP/ Formations</Link>
      </li>
      <ul>
        <li class="deroulant">
          <a>Nos Services &ensp;</a>
          <ul class="sous">
            <li>
              <Link to="/informatique">
                <a>Informatique</a>
              </Link>
            </li>
            <li>
              <Link to ="/telecom">
              <a>Télécom</a>
              </Link>
            </li>
            <li>
              <Link to="/securite">
                <a>Sécurité</a>
              </Link>
            </li>
            <li>
              <Link to="/web">
                <a>Web</a>
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
