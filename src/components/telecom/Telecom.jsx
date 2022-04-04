import "./telecom.scss";

function Telecom() {
  return (
    <div>
      <div className="container">
        <h1>Opérateur Télécom</h1>
        <h2>
          Vous voulez accélérez le débit de vos connexions internet. Vous avez
          besoin d’accéder rapidement à vos ressources d’entreprise au
          quotidien. Enfin, vous souhaitez optimiser votre productivité.
        </h2>
        <div className="materiel_container">
          <div className="materiel_left_side">
            <li>Sites distants.</li>
            <li>Téléphonie sur IP.</li>
            <li>Connexion Wifi.</li>
            <li>Redondance de ligne.</li>
            <li>Ligne ADSL</li>
            <li>Ligne SDSL haute débit</li>
            <li>Fibre Optique</li>
          </div>
          <div className="materiel_right_side">
            <img
              className="materiel_security"
              alt="logo_solution_logique_informatique"
              href=""
              src="assets/telecom.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Telecom;
