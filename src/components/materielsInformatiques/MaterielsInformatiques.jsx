import "./materielsinformatiques.scss";

function MaterielsInformatiques() {
  return (
    <div>
        <div className="container">
            <h1>Matériels Informatiques</h1>
            <h2>Nous vous conseillons sur du matériels informatiques de marque constructeur et sur l’installation de solutions performantes au sein de votre structure. Celà peut concerner votre serveur de données, messagerie, ordinateurs de bureau et portables, tablette interactive, protection internet, firewall, écrans, anti-virus, anti-spam, onduleurs, imprimantes, copieur, fax, scanner et switch.</h2>
            <h1>Compétences Systèmes réseaux :</h1>
            <div className="materiel_container">
                <div className="materiel_left_side">
                    <li>Architecture Réseau : LAN, WAN, WIFI.</li>
                    <li>Paramétrage d’interconnexion de Sites (VPN, VPN Ipsec, TSE..).</li>
                    <li>Installation et paramétrages : Messagerie Microsoft.</li>
                    <li>Connexion de messagerie à Internet.</li>
                    <li>Mise en place de réseau local ou public : Intranet – Extranet.</li>
                    <li>Paramétrage des droits d’accès utilisateurs spécifique.</li>
                    <li>Sécurité, Pare-Feu, Anti-Virus et Anti-spam réseau.</li>
                    <li>Consolidation de Sauvegarde Réseau.</li>
                    <li>Virtualisation de serveurs.</li>
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