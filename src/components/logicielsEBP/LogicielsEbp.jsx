import "./logicielsebp.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faHeart,
  faPeopleGroup,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

function LogicielsEbp() {
  return (
    <div>
      <div className="profile-card">
        <div className="container">
          <h1 className="heading_logiciels">NOS LOGICIELS EBP </h1>
          <div className="card-grid">
            <div
              className="card card0"
              style={{
                backgroundImage: "url(/assets/compta.jpg)",
              }}
            >
              <div className="overlay">
                <div className="content">
                  <h2>Comptabilité</h2>
                  <p>
                    "Optimisez la gestion de votre trésorerie et analysez la
                    santé financière de votre entreprise avec nos logiciels de
                    comptabilité."
                  </p>
                  <Link className="learn-more-btn" to="/ebpcomptabilite">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card card1"
              style={{ backgroundImage: "url(/assets/gestion-co.jpg)" }}
            >
              <div className="overlay">
                <div className="content">
                  <h2>Gestion Commerciale</h2>
                  <p>
                    "Gérez tous les aspects commerciaux de votre entreprise et
                    gagnez en efficacité avec nos logiciels de Gestion
                    Commerciale"
                  </p>
                  <Link className="learn-more-btn" to="/ebpgestionco">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card card2"
              style={{ backgroundImage: "url(/assets/batiments.jpg)" }}
            >
              <div className="overlay">
                <div className="content">
                  <h2>Batiment</h2>
                  <p>
                    "Optimisez la rentabilité de vos chantiers, chiffrez et
                    facturez efficacement et gagnez un temps précieux au
                    quotidien pour vous consacrer pleinement à votre cœur de
                    métier : le chantier !"
                  </p>
                  <Link className="learn-more-btn" to="/ebpbatiment">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-card">
        <div className="container">
          <h1>NOS FORMATIONS</h1>
          <div className="counter_formations_SLI">
            <div className="cards_statistic">
              <div className="card_statistic">
                <div className="top_card_statistic">
                  <FontAwesomeIcon
                    className="satisfaction_heart"
                    icon={faPeopleGroup}
                  />
                </div>
                <div className="mid_card_statistic">
                  <CountUp end={52} duration={5} />
                </div>
              </div>
              <div className="card_statistic">
                <div className="top_card_statistic">
                  <FontAwesomeIcon
                    className="satisfaction_heart"
                    icon={faClock}
                  />
                </div>
                <div className="mid_card_statistic">
                  <CountUp end={403} duration={6} /> heures
                </div>
              </div>
              <div className="card_statistic">
                <div className="top_card_statistic">
                  <FontAwesomeIcon
                    className="satisfaction_heart"
                    icon={faHeart}
                  />
                </div>
                <div className="mid_card_statistic">
                  <CountUp end={100} duration={7} />%
                </div>
              </div>
            </div>
          </div>
          <div className="form_formations_sli">
            <h3>
              Nos formations sont accessibles selon les modalités ci-dessous :
            </h3>
            <h2>Les modalités de formation</h2>
            <div className="forms_sli">
              <div className="group_form_sli">
                <div className="form_sli">
                  <FontAwesomeIcon className="formations_group" icon={faUser} />
                  <h4>Individuel</h4>
                </div>
                <div className="form_sli">
                  <FontAwesomeIcon
                    className="formations_group"
                    icon={faUsers}
                  />
                  <h4>Intra-entreprise (3 max)</h4>
                </div>
              </div>
            </div>
            <div className="formations_place">
              <div className="formations_block">
                <h2>Les formations peuvent avoir lieu :</h2>
                <p>
                  En présentiel, dans les locaux de Solution Logique, Nos locaux
                  peuvent également vous accueillir et sont adaptés aux
                  personnes à mobilité réduite.
                </p>
                <p>En présentiel, dans les locaux de votre entreprise</p>
                <p>
                  En distanciel via Internet en utilisant l’application
                  <span>
                    <a
                      href="https://www.islonline.com/fr/fr/join/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      ISL Online
                    </a>
                  </span>
                </p>
              </div>
              <div className="formations_block">
                <h2>
                  Nos formations sont accessibles selon les modalités ci-dessous
                  :
                </h2>
                <p>
                  Solution Logique vous proposera des dates le plus tôt possible
                  en fonction de vos disponibilités et de celles du formateur
                  pressenti. Pour pouvoir démarrer la formation, votre rapidité
                  de réponse sur toutes les questions administratives permettra
                  d’accélérer le démarrage de votre formation. Vous êtes acteur
                  de votre demande et seul décisionnaire, les délais de
                  traitement sont donc très rapides si une date de formation est
                  déjà fixée.
                </p>
              </div>

              <div className="formations_block"></div>
              <h2>Modalités de financement</h2>
              <p>
                Plusieurs modes de financement vous permettent d’accéder à nos
                formations en tant que salarié via votre entreprise ou en tant
                que particulier (salarié, demandeur d’emploi ou indépendant). La
                question du financement d’une formation peut s’avérer complexe
                et ramène bien souvent à de nombreux financeurs ou dispositifs.
              </p>
              <div className="formations_block">
                <h2>Les différents organismes financeurs </h2>
                <h3>Les OPCOS</h3>
                <p>
                  Au service des salariés et des entreprises, les OPCO, qui sont
                  des opérateurs de compétences. Pour savoir à quel OPCO est
                  affilié votre entreprise, vous devez connaître votre numéro de
                  convention collective (IDCC) qui figure sur votre bulletin de
                  paie. Trouver votre OPCO.
                </p>
              </div>
              <div className="formations_block">
                <h2>
                  Les FAF (Fonds d’Assurance Formation) pour les indépendants
                </h2>
                <p>- Le FIF PL est le FAF des professions libérales. </p>
                <p>
                  - L’AGEFICE est le FAF du Commerce, de l’Industrie et des
                  Services. Il finance des actions de formation les dirigeants
                  d’entreprise et conjoints collaborateurs ou conjoints
                  associés.
                </p>
              </div>
              <div className="formations_block">
                <h2>Les autres financeurs</h2>
                <p>
                  Les régions, l'Europe, Pole Emploi, l'Agefiph... financent
                  directement ou indirectement, via des partenariats ou des
                  co-financements, de nombreux projets de formation.
                </p>
              </div>
              <div className="formations_block">
                {" "}
                <h2>Notre engagement dans le handicap</h2>
                <p>Référent, contacts, site internet…</p>
                <p>
                  <span>Référent en Entreprise</span> : M. Pascal REY
                  04.50.64.02.33 - pr@solution-logique.fr
                </p>
                <p>
                  <span>Présentation handicap et insertion</span>: CCI
                  Haute-Savoie (mail){" "}
                </p>
              </div>
              <div className="formations_block">
                <h2>
                  Aménagement et accessibilité des locaux Solution Logique :
                </h2>
                <p>
                  - Porte d’entrée et ascenseur prévu pour l’accessibilité aux
                  candidats.
                </p>
                <p>- Toilette et salle de réunion accessible et aux normes.</p>
                <p>
                  Coordonnées MDPH 74 - Maison départementale des personnes
                  handicapées de Haute-Savoie (Administration départementale à
                  Annecy).
                </p>
              </div>
              <div className="formations_block">
                <h2>Adresse :</h2>
                <p>26 Av. de Chevéne, 74000 Annecy</p>
                <p>Téléphone : 04 50 33 22 50</p>
                <p>
                  <span>
                    <a
                      href="https://www.mdph74.fr"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site internet : MDPH{" "}
                    </a>
                  </span>
                </p>
              </div>
              <div className="formations_block">
                <h2>Coordonnées Agefiph </h2>
                <p>
                  <span>Téléphone</span> : 0 800 11 10 09
                </p>
                <p>
                  <span>
                    <a
                      href="https://www.agefiph.fr/auvergne-rhone-alpes"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site internet : AGEFIPH{" "}
                    </a>
                  </span>
                </p>
                <p>
                  <span>Contact départemental</span> : Mme Gruyelle :
                  04.74.94.20.21 / Mme Barot : 06.22.10.01.52
                </p>
              </div>
              <div className="formations_block">
                {" "}
                <h2>
                  Coordonnées Chambre Métier et de l’Artisanat Haute-Savoie
                </h2>
                <p>28 avenue de France 74000 Annecy</p>
                <p>
                  <span>Téléphone</span> : 04 50 23 92 22
                </p>
                <p>
                  <span>
                    <a href="mailto:contact.hautesavoie@cma-auvergnerhonealpes.fr">
                      Courriel : Auverge-Rhone-Alpes
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    <a
                      href="https://www.agefiph.fr/auvergne-rhone-alpes"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site internet : AGEFIPH Auverge-Rhone-Alpes
                    </a>
                  </span>
                </p>
              </div>
              <div className="formations_block">
                {" "}
                <h2>Coordonnées Cap Emploi Savoie Haute-Savoie</h2>
                <p>5 Rue du Chaudairon, 74960 Annecy</p>
                <p>
                  <span>Téléphone</span> : 09 70 19 26 09
                </p>
                <p>
                  <span>
                    <a
                      href="https://www.capemploi-73-74.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site internet : CAP Emploi
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    <a
                      href="https://www.capemploi-73-74.com/espace-employeur/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Page Espace Employeur : CAP Emploi
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    <a
                      href="https://www.monparcourshandicap.gouv.fr/services/autodiag/#/home/accueil-questionnaire"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site internet : Réalisez le bilan de vos actions handicap
                      et progressez en autonomie
                    </a>
                  </span>
                </p>
              </div>

              <h4>Étape 1 </h4>
              <p>
                Je renseigne des informations sur ma structure (taille, secteur
                d’activité et périmètre géographique).
              </p>
              <h4>Étape 2 </h4>
              <p>
                Je réponds à 26 questions sur 6 thématiques (stratégie,
                sensibilisation, recrutement, prévention et maintien,
                accessibilité et secteur protégé et entreprises adaptées).
              </p>
              <h4>Étape 3 </h4>
              <p>
                J’accède à mon bilan et je définis mon plan d’action handicap en
                autonomie ou avec un conseiller.
              </p>
            </div>
            <h2>Prix à la ½ journée</h2>
            <h1>485€</h1>
          </div>
          <div className="card-grid">
            <div
              className="card card0"
              style={{
                backgroundImage: "url(/assets/compta.jpg)",
              }}
            >
              <div className="overlay">
                <div className="content">
                  <h2> Formation Comptabilité</h2>
                  <p>
                    <li>
                      {" "}
                      Maîtriser le travail quotidien de la tenue d’une
                      comptabilité : lecture, saisie, lettrage et éditer un état
                      comptable…
                    </li>
                    <li>
                      {" "}
                      Gérer son quotidien comptable : échéancier, relances,
                      comptes à lettrer, imputation de règlement …
                    </li>
                    <li> Suivre sa trésorerie</li>
                  </p>
                  <Link className="learn-more-btn" to="/">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card card1"
              style={{ backgroundImage: "url(/assets/gestion-co.jpg)" }}
            >
              <div className="overlay">
                <div className="content">
                  <h2> Formation Gestion Commerciale</h2>
                  <p>
                    <li>
                      Créer, modifier et enrichir ses bases clients, articles,
                      modes de règlement….
                    </li>
                    <li>
                      Créer, modifier et émettre des documents commerciaux :
                      devis, commandes, bons de livraison, factures, avoirs,
                      retours…
                    </li>
                  </p>
                  <Link className="learn-more-btn" to="/">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card card2"
              style={{ backgroundImage: "url(/assets/batiments.jpg)" }}
            >
              <div className="overlay">
                <div className="content">
                  <h2>Formation Batiment</h2>
                  <p>
                    <li>Maîtriser le chiffrage de son devis de bâtiment</li>
                    <li>Créer et modifier des documents d’achat et de vente</li>
                    <li>
                      Gérer les stocks, le suivi des chantiers et des affaires
                    </li>
                    <li>Gérer le flux financier de son entreprise</li>
                  </p>
                  <Link className="learn-more-btn" to="/">
                    En savoir plus
                  </Link>
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogicielsEbp;
