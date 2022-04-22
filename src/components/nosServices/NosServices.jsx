import "./services.scss";
import $ from "jquery";

function NosServices() {
  $(".card").hover(
    function () {
      var vSrc = $(this).find("iframe").data("video");
      var video = $(this).find("iframe");
      video.attr("src", vSrc);
    },
    function () {
      $(this).find("iframe").attr("src", "");
    }
  );

  return (
    <div className="container">
      <h1 className="heading_logiciels">NOS SERVICES</h1>
      <div class="fullscreen">
        <div
          class="card card_1"
          style={{
            backgroundImage: "url(/assets/informatique.jpg)",
          }}
        >
          <div class="content_services">
            <div class="title">Informatique</div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div class="sinopse">
            <div class="content-sinopse">
              <div class="title">Plus d'informations :</div>
              <div class="text">
                <ul>
                  <h3>Infrastructure</h3>
                  <li className="second_description">Matériel Informatique</li>
                  <li className="second_description">Serveur de stockage</li>
                  <li className="second_description">Sécurité de l'infra</li>
                  <li className="second_description">
                    Interconnexion de sites
                  </li>
                  <li className="second_description">
                    Virtualisation de l'infrastructure
                  </li>
                  <li className="second_description">Vidéo surveillance</li>
                  <h3>Environnement Utilisateur</h3>
                  <li className="second_description">Post de travail</li>
                  <li className="second_description">Sécurité anti virus</li>
                  <li className="second_description">Outil collaboratif</li>
                  <h3>Hébergement & Cloud</h3>
                  <li className="second_description">Sauvegarde Externalisé</li>
                  <li className="second_description">Sauvegarde sur place</li>
                  <li className="second_description">Hébergement site web</li>
                  <li className="second_description">
                    Hebergement et gestion des boites mails
                  </li>
                  <li className="second_description">
                    Stockage de données sur le cloud
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card card_1"
          style={{
            backgroundImage: "url(/assets/telecom.png)",
          }}
        >
          <div class="content_services">
            <div class="title">Télécom</div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div class="sinopse">
            <div class="content-sinopse">
              <div class="title">Plus d'informations :</div>
              <div class="text">
                <ul>
                  <h3>Téléphonie fixe et mobile</h3>
                  <li className="second_description">Téléphonie IP</li>
                  <li className="second_description">Trunksip</li>
                  <li className="second_description">Softphone</li>
                  <li className="second_description">Forfait 4G et mobile</li>
                  <li className="second_description">
                    Opérateur Télécom (fibre, SDSL, ...)
                  </li>
                  <li className="second_description">Connectivité</li>
                  <li className="second_description">Interconnexion</li>
                  <li className="second_description">Accès à Internet</li>
                  <li className="second_description">Accès sans fil - Wifi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card card_1"
          style={{
            backgroundImage: "url(/assets/securite_info.jpg)",
          }}
        >
          <div class="content_services">
            <div class="title">Sécurité</div>
            <div class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div class="sinopse">
            <div class="content-sinopse">
              <div class="title">Plus d'informations :</div>
              <div class="text">
                <ul>
                  <h3>Sécurité du SI</h3>
                  <li className="second_description">
                    Sécurité de l'infrastructure
                  </li>
                  <li className="second_description">Sécurité du réseau</li>
                  <li className="second_description">Sécurité des données</li>
                </ul>
              </div>
            </div>
          </div>
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
          <a
            href="https://www.islonline.com/fr/fr/join/"
            class="btn_help btn_help_right"
            target="blank"
          >
            Besoin d'aide ?
          </a>
        </div>
      </div>
    </div>
  );
}

export default NosServices;
