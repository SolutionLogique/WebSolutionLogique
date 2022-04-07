import "./securite.scss";

function Securite() {
  return (
    <div>
      <div className="container">
      <h1>Sécurité Internet</h1>
        <h2 className="services_sub_title">
        Sécurité Internet Par Solution Logique : nous mettons en place d’une
          manière cohérente tous les outils de connexion à distance avec
          certification, pour réduire vos coûts d’exploitation avec plus de
          performance et de réactivité.
        </h2>
        <h3>Solution Logique : Vous conseille dans votre projet pour le déploiement, l’installation et le paramétrage des différentes solutions de sécurité :</h3>
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
              src="assets/security.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Securite;
