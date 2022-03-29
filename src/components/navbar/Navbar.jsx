import "./navbar.scss"
import {
  Link
} from "react-router-dom";

function Navbar() {
  
  return (
    <div className="navigation_bar">
        <img alt="logo_solution_logique_informatique" href="" src="assets/logo.png"></img>
        <li> <Link to="/">Acceuil</Link></li>
        <li><Link to="/Society">Notre Société</Link></li>
        <li><Link to ="/logicielsDev">Logiciel & Développement</Link></li>
        <li><Link to ="/materielReseau">Matériel & Réseau</Link></li>
        <li><Link to="/contact">Contactez nous</Link></li>
    </div>

);


}

export default Navbar