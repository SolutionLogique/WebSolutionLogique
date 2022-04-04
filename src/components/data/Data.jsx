import "./data.scss";

function Data() {
  return (
    <div>
      <div className="container">
        <h1>Sauvegarde de données</h1>
        <h2>
          Protégez vos données sensibles contre les risques de vol, virus,
          incendie ou défaillance informatique. Sécurisez et automatisez la
          sauvegarde de vos documents, via Internet sur des plateformes
          distantes. Aujourd’hui, les données informatiques représentent un
          actif vital de l’entreprise. C’est pourquoi Solution Logique propose
          une Solution Professionnelle de Sauvegarde Externalisée des données.
          Les données sont stockées en chambre blanche pour sécurité optimum.
        </h2>
        <div className="materiel_container">
          <div className="materiel_left_side">
            <li>Backup automatique et régulier sans l’intervention de personnel.</li>
            <li>Gain de temps et limitation d’erreurs ou d’oublis.</li>
            <li>Cryptage des données pour la sécurité de vos informations.</li>
            <li>Consultation des données à tout moment et partout via l’interface Web après authentification du demandeur.</li>
            <li>
            Reprise de l’activité informatique plus rapide après un «crash» matériel
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
