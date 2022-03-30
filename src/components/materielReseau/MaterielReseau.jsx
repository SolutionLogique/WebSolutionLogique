import "./materielreseau.scss";
import { Link } from "react-router-dom";

function MaterielReseau() {
  return (
    <div className="container">
      <h1>Services informatique</h1>
      <div class="container_card">
        <div class="card">
          <Link to="/">
            <div class="face face1">
              <div class="content">
                <div class="icon">Add Images</div>
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
                <div class="icon">Add Images</div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Virtualisation / Serveur</h3>
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
                <div class="icon">Add Images</div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Imprimante / Copieur / Fax / Scanner</h3>
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
                  <img
                    alt="logo_solution_logique_informatique"
                    href=""
                    src="assets/print.png"
                  ></img>
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
                <div class="icon">Add Images</div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Opérateur Télécom</h3>
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
                <div class="icon">Add Images</div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>Sécurité Internet</h3>
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
