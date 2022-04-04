import "./print.scss";

function Print() {
  return (
    <div>
      <div className="container">
        <h1>Matériels Informatiques</h1>
        <h2>
          Avec recto-verso automatique, chargeur automatique de documents,
          multi-bac papier, vitesse d’impression, nous vous conseillons sur le
          modèle d’imprimante multifonction correspondant le mieux à votre
          besoin. De plus, nous proposons également des imprimantes réseau
          Ethernet ou sans fil Wi-Fi, partagées entre plusieurs ordinateurs de
          votre réseau d’entreprise.
        </h2>
        <h1>Système d'impression :</h1>
        <div className="materiel_container">
          <div className="materiel_left_side">
            <li>Meilleure organisation et gain de temps.</li>
            <li>Communication & Image professionnelles.</li>
            <li>Impressions de qualité.</li>
            <li>Lancements et volumes d’impression selon vos besoins.</li>
            <li>
              Stock maîtrisé en flux tendu pour le respect de l’environnement
            </li>
            <li>Une mise à jour constante de vos supports</li>
          </div>
          <div className="materiel_right_side">
            <img
              className="materiel_security"
              alt="logo_solution_logique_informatique"
              href=""
              src="assets/print.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Print;
