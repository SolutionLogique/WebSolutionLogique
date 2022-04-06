import "./print.scss";

function Print() {
  return (
    <div>
      <div className="container">
        <h1>Matériels Informatiques</h1>
        <h2 className="services_sub_title">Gérez les flux de vos documents et faîtes forte impression</h2>
        <h3>Imprimante / Copieur / Fax / Scanner :</h3>
        <div className="materiel_container">
          <div className="materiel_left_side">
            <li>
              Meilleure <span>organisation</span> et <span>gain de temps</span>.
            </li>
            <li>
              <span>Communication</span> & Image professionnelles.
            </li>
            <li>
              <span>Impressions</span> de <span>qualité</span>.
            </li>
            <li>
              Lancements et <span>volumes d’impression</span> selon vos besoins.
            </li>
            <li>
              Stock maîtrisé en flux tendu pour le <span>respect de l’environnement</span>.
            </li>
            <li>Une <span>mise à jour constante</span> de vos supports.</li>
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
