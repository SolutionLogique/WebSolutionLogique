import "./home.scss"

function Home() {
  return (
    <div className="card_home_page">
      <img className="banner" alt="logo_solution_logique_informatique" href="" src="assets/cloud.jpg"></img>
      <div className="container">
      <img className="device_sli" alt="logo_solution_logique_informatique" href="" src="assets/sli.png"></img>
      </div>
      <div className="container">
      <div className="banner_white"></div>
      <div className="bv_solution_logique_intro">
      <h1>Bienvenue à Solution Logique</h1>
        <p>Depuis <span>plus de 25 ans</span>, nous avons toujours voulu marquer <span>notre volonté</span>, d’une forte implantation locale en Rhône-Alpes.</p>
        <p>Nous assurons le maintien d’un large segment de <span>clientèles de professionnels</span>, PME, PMI, TPE, Avocats, Notaires, Décolleteurs, Associations, Administrations, Artisans, Éducation, Professions libérales et médicales …</p>
        <p>L’équipe de <span>Solution Logique</span> est à <span>votre écoute</span> pour réaliser vos projets informatiques.</p>
      </div>
      </div>
    </div>
  )
}

export default Home