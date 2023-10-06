import "./home.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faComputer,
    faServer,
    faPrint,
    faFloppyDisk,
    faPhone,
    faShield, faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import {Link} from "react-router-dom";


const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
];

function Home() {
    return (
        <div className="card_home_page">
            <div className="container">
                <div className="home_container_both">
                    <div className="home_container_left_side">
                        <div className="left_top_side">
                        </div>
                        <div className="left_bot_side">
                            <h1>BIENVENUE A SOLUTION LOGIQUE</h1>
                            <h2>Qui sommes-nous ?</h2>
                            <p>
                                L’équipe de <span>Solution Logique</span> est à{" "}
                                <span>votre écoute</span> pour réaliser vos projets
                                informatiques.
                            </p>
                            <p>
                                Depuis <span>plus de 30 ans</span>, nous avons toujours voulu
                                marquer <span>notre volonté</span>, d’une forte implantation
                                locale en Rhône-Alpes.
                            </p>
                        </div>
                    </div>
                    <div className="home_container_right_side">
                        <h1>Solution informatique?</h1>
                        <p>
                            Intégrateur de solutions complètes et prestataire de services en
                            conseils informatiques, nous innovons quotidiennement pour les
                            PME, PMI, TPE, indépendants et collectivités.
                        </p>
                    </div>
                </div>
            </div>

            <div className="titleExpertise">
                     <span className='expertise'>
            <h1>Notre Expertise</h1>
                         <h2> Explorez nos compétences </h2>
                         <p>
                             Notre équipe hautement qualifiée, composée de collaborateurs diplômés et certifiés, se distingue par
                son engagement inébranlable envers la prestation de services professionnels de la plus haute
                qualité. Nos techniciens sont dédiés à l'amélioration des performances de votre système informatique
                et à la préservation de la productivité de votre environnement de travail.</p>
            </span></div>
            <div className="wave-container">
                <div className="center-container">
                    <div className="grid-container">
                        <Link to="informatique">
                            <div className="grid-item"><FontAwesomeIcon
                                className="home_services_icons"
                                icon={faComputer}/>
                                <h1>Matériels Informatique</h1>
                                <FontAwesomeIcon className="arrow" icon={faArrowDown} style={{color: "#ffffff",}}/>
                                <p>Optez pour une solution sur mesure</p></div>
                        </Link>
                        <Link to="informatique">
                            <div className="grid-item"><FontAwesomeIcon className="home_services_icons"
                                                                        icon={faServer}/>
                                <h1>Virtualisation & Serveur</h1>
                                <FontAwesomeIcon className="arrow" icon={faArrowDown} style={{color: "#ffffff",}}/>
                                <p>Gérez tout à distance</p></div>
                        </Link>
                        <Link to="informatique">
                            <div className="grid-item"><FontAwesomeIcon className="home_services_icons" icon={faPrint}/>
                                <h1>Système d'impression</h1>
                                <FontAwesomeIcon className="arrow" icon={faArrowDown} style={{color: "#ffffff",}}/>
                                <p>Mettez-vous à la page</p></div>
                        </Link>
                        <Link to="informatique">
                            <div className="grid-item"><FontAwesomeIcon
                                className="home_services_icons"
                                icon={faFloppyDisk}/>
                                <h1>Sauvegarde de données</h1>
                                <FontAwesomeIcon className="arrow" icon={faArrowDown} style={{color: "#ffffff",}}/>
                                <p>Protégez vos données</p></div>
                        </Link>
                        <Link to="/telecom">
                            <div className="grid-item"><FontAwesomeIcon className="home_services_icons" icon={faPhone}/>
                                <h1>Opérateur Télécom</h1>
                                <FontAwesomeIcon className="arrow" icon={faArrowDown} style={{color: "#ffffff",}}/>
                                <p>Choisissez une téléphonie.</p></div>
                        </Link>
                        <Link to="/securite">
                            <div className="grid-item"><FontAwesomeIcon className="home_services_icons"
                                                                        icon={faShield}/>
                                <h1>Sécurité Informatique</h1>
                                <FontAwesomeIcon className="arrow" icon={faArrowDown} style={{color: "#ffffff",}}/>
                                <p>Protégez votre système</p></div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="home_conseils_sli">
                    <div className="home_conseils_sli_left">
                        <img
                            height={520} width={520}
                            className="img_right_side"
                            loading='lazy'
                            alt="logo_solution_logique_informatique"
                            src="assets/assistance.webp"
                        ></img>
                    </div>
                    <div className="home_conseils_sli_right">
                        <h1>Nous contacter</h1>
                        <Link to="Contact">
                            <button className="btnContact">Contact</button>
                        </Link>

                        <h2>Besoin d'une aide en télémaintenance ?</h2>
                        <p>
                            Accédez à la télémaintenance pour que Solution Logique intervienne
                            directement sur votre ordinateur.
                        </p>
                        <a
                            href="https://www.islonline.com/fr/fr/join/"
                            className="btn_help btn_help_right"
                            target="blank"
                            aria-label="besoin d'aide"
                        >
                            Besoin d'aide ?
                        </a>{" "}
                    </div>
                </div>
                <a href="#" className="to-top">
                    <FontAwesomeIcon className="arrow" icon={faArrowDown} style={{color: "#1889C3",}}/>
                </a>
                <h1>PARTENAIRE ASSOCIATIF </h1>
            </div>
            <div className="home_carousel_partner">
                <Carousel breakPoints={breakPoints}
                          enableAutoPlay={true}
                          className="carousel"
                >
                    <Item>
                        <img
                            className="device_sli"
                            loading='lazy'
                            alt="logo_solution_logique_informatique"
                            src="assets/ebp.webp"
                        ></img>
                    </Item>
                    <Item>
                        <img
                            className="device_sli"
                            loading='lazy'
                            alt="logo_solution_logique_informatique"
                            src="assets/dell.webp"
                        ></img>
                    </Item>
                    <Item>
                        <img
                            className="device_sli"
                            loading='lazy'
                            alt="logo_solution_logique_informatique"
                            src="assets/stormshield.webp"
                        ></img>
                    </Item>
                    <Item>
                        <img
                            className="device_sli"
                            loading='lazy'
                            alt="logo_solution_logique_informatique"
                            href=""
                            src="assets/3cx.webp"
                        ></img>
                    </Item>
                    <Item>
                        <img
                            className="device_sli"
                            loading='lazy'
                            alt="logo_solution_logique_informatique"
                            src="assets/vmware.webp"
                        ></img>
                    </Item>
                    <Item>
                        <img
                            className="device_sli"
                            loading='lazy'
                            alt="logo_solution_logique_informatique"
                            src="assets/lenovo.webp"
                        ></img>
                    </Item>
                    <Item>
                        <img
                            className="device_sli"
                            loading='lazy'
                            alt="logo_solution_logique_informatique"
                            src="assets/oxatis.webp"
                        ></img>
                    </Item>
                    <Item>
                        <img
                            className="device_sli"
                            loading='lazy'
                            alt="logo_solution_logique_informatique"
                            src="assets/kyocera.webp"
                        ></img>
                    </Item>
                </Carousel>

            </div>
        </div>
    );
}

export default Home;
