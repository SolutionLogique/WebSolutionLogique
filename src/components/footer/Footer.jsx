import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_global">
        <div className="footer_copyright_solution_logique">
          <p>
            <span>Adresse :</span>
          </p>
          <p>475 Rte des Vernes</p>
          <p>74370 Annecy</p>
        </div>
        <div className="footer_copyright_solution_logique">
          <p>
            <span>Copyright © 2022 - Solution Logique Informatique</span>
          </p>
          <p>Conditions Générales de Vente</p>
        </div>
        <div className="footer_copyright_solution_logique">
          <p>
            <span>Horaires :</span>
          </p>
          <p>Du Lundi au Vendredi</p>
          <p>8h30 - 12h00 / 14h00 - 18h00</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
