import "./telecom.scss";

function Telecom() {
  return (
    <div>
      <div className="container">
        <h1>Opérateur Télécom</h1>
        <h2 className="services_sub_title">
          Vous voulez accélérez le débit de vos connexions internet. Vous avez
          besoin d’accéder rapidement à vos ressources d’entreprise au
          quotidien.
        </h2>
        <h3>
          Solution Logique, Opérateur Telecom, vous propose des solutions
          concrètes pour améliorer vos communications :
        </h3>
        <div className="materiel_container">
          <div className="materiel_left_side">
            <li>
              <span>Sites distants</span>.
            </li>
            <li>
              <span>Téléphonie sur IP</span>.
            </li>
            <li>
              <span>Connexion Wifi</span>.
            </li>
            <li>
              <span>Redondance de ligne</span>.
            </li>
            <li>
              <span>Ligne ADSL</span>.
            </li>
            <li>
              <span>Ligne SDSL haute débit</span>.
            </li>
            <li>
              <span>Fibre Optique</span>.
            </li>
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
