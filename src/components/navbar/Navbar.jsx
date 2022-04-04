import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation_bar">
      <Link to="/">
        <img alt="logo_solution_logique_informatique" href="" src="assets/logo.png"></img>
      </Link>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/nosServices">Nos Services</Link>
      </li>
      <li>
        <Link to="/materielReseau">Matériel & Réseau</Link>
      </li>
      <li>
        <Link to="/contact">Contactez nous</Link>
      </li>
    </nav>
  );
}

export default Navbar;
