import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link to="/">
                Accueil
                </Link>
              </li>
              <li>
                <Link to="/nosServices">
                Logiciels & Développement
                </Link>
              </li>
              <li>
                <Link to="/materielReseau">
                Matériel & Réseau
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contactez nous
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Address</h4>
            <ul>
              <li>Solution Logique Informatique</li>
              <li>475 Route des Vernes</li>
              <li>74370 Annecy</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <p>
                <FontAwesomeIcon className="home_services_icon" icon={faMap} />
              </p>
              <p>
                <FontAwesomeIcon className="home_services_icon" icon={faMap} />
              </p>
              <p>
                <FontAwesomeIcon className="home_services_icon" icon={faMap} />
              </p>
              <p>
                <FontAwesomeIcon className="home_services_icon" icon={faMap} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
