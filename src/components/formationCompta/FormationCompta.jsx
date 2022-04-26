import "./formationcompta.scss";


function FormationCompta() {
  return (
    <div className="container">
      <h1>FORMATION AU LOGICIEL EBP COMPTABILITE</h1>
      <div className="home_conseils_sli">
          <div className="home_conseils_sli_left">
            <img
              className="img_right_side"
              alt="logo_solution_logique_informatique"
              href=""
              src="assets/formations_ebp.jpg"
            ></img>
          </div>
          <div className="home_conseils_sli_right">
            <h1>Notre programme Comptabilité</h1>
            <h2>Vous voulez en savoir plus ?</h2>
            <p>
              Accédez à notre programme EBP comptabilité, une formation complète et personnalisée pour enrichir vos compétences.
            </p>
            <a
              href="assets/Programme_Comptabilite_NivInitial.pdf"
              class="btn_help btn_help_right"
              target="blank"
            >
             En savoir plus 
            </a>
          </div>
        </div>
    </div>
  );
}

export default FormationCompta;
