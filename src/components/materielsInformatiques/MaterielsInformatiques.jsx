import "./materielsinformatiques.scss";

function MaterielsInformatiques() {
  return (
    <div>
        <div className="container">
            <h1>Matériels Informatiques</h1>
            <h2 className="services_sub_title">Nous vous conseillons sur du matériels informatiques de marque constructeur et sur l’installation de solutions performantes au sein de votre structure.</h2>
            <h3>Conseils et installation de solutions :</h3>
            <div className="materiel_container">
                <div className="materiel_left_side">
                    <li>Architecture Réseau : <span>LAN, WAN, WIFI</span>.</li>
                    <li><span>Paramétrage d’interconnexion</span> de Sites (VPN, VPN Ipsec, TSE..).</li>
                    <li><span>Installation et paramétrages</span> : Messagerie Microsoft.</li>
                    <li><span>Connexion</span> de messagerie à Internet.</li>
                    <li>Mise en place de <span>réseau local ou public</span> : Intranet – Extranet.</li>
                    <li>Paramétrage des <span>droits d’accès</span> utilisateurs spécifique.</li>
                    <li>Sécurité, <span>Pare-Feu</span>, <span>Anti-Virus</span> et <span>Anti-spam</span> réseau.</li>
                    <li><span>Consolidation</span> de <span>Sauvegarde Réseau</span>.</li>
                    <li><span>Virtualisation de serveurs</span>.</li>
                </div>
                <div className="materiel_right_side">
                <img
                className="materiel_security"
                alt="logo_solution_logique_informatique"
                href=""
                src="assets/sécurité.jpg"
              ></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MaterielsInformatiques