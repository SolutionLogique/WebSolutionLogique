import "./logicielsebp.scss";

function LogicielsEbp() {
  return (
    <div>
      <div class="profile-card">
        <div class="container">
          <h2 class="heading">Animated Profile Cards</h2>
          <div class="card-grid">
            <div class="card card0">
              <div class="overlay">
                <div class="content">
                  <h2>Comptabilité</h2>
                  <p>
                    "Optimisez la gestion de votre trésorerie et analysez la
                    santé financière de votre entreprise avec nos logiciels de
                    comptabilité."
                  </p>
                  <a class="learn-more-btn" href="#">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div
              class="card card1"
              style={{ backgroundImage: "url(/assets/compta.jpg)" }}
            >
              <div class="overlay">
                <div class="content">
                  <h2>Gestion Commerciale</h2>
                  <p>
                    "Gérez tous les aspects commerciaux de votre entreprise et
                    gagnez en efficacité avec nos logiciels de Gestion
                    Commerciale"
                  </p>
                  <a class="learn-more-btn" href="#">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div class="card card2">
              <div class="overlay">
                <div class="content">
                  <h2>Batiment</h2>
                  <p>
                    "Optimisez la rentabilité de vos chantiers, chiffrez et
                    facturez efficacement et gagnez un temps précieux au
                    quotidien pour vous consacrer pleinement à votre cœur de
                    métier : le chantier !"
                  </p>
                  <a class="learn-more-btn" href="#">
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
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
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogicielsEbp;
