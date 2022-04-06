import "./data.scss";

function Data() {
  return (
    <div>
      <div className="container">
        <h1>Sauvegarde de données</h1>
        <h2 className="services_sub_title">
        Protégez vos données sensibles contre les risques de vol, virus,
          incendie ou défaillance informatique. Sécurisez et automatisez la
          sauvegarde de vos documents, via Internet sur des plateformes
          distantes et contrôler et d’assurer l’authentification et la
          traçabilité de toutes les connexions Inter­net.
        </h2>
        <h3>Quels sont les bénéfices de notre Solution ? :</h3>
        <div className="materiel_container">
          <div className="materiel_left_side">
            <li>
              <span>Backup automatique</span> et régulier sans l’intervention de
              personnel.
            </li>
            <li>
              <span>Gain de temps</span> et limitation d’erreurs ou d’oublis.
            </li>
            <li>
              <span>Cryptage des données</span> pour la sécurité de vos
              informations.
            </li>
            <li>
              <span>Consultation des données</span> à tout moment et partout via
              l’interface Web après authentification du demandeur.
            </li>
            <li>
              <span>Reprise de l’activité informatique</span> plus rapide après
              un «crash» matériel
            </li>
          </div>
          <div className="materiel_right_side">
            <img
              className="materiel_security"
              alt="logo_solution_logique_informatique"
              href=""
              src="assets/data.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
