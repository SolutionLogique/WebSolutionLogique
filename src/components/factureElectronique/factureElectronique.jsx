import React from "react";
import "./factureElectronique.scss";

function FactureElectronique() {
    return (
        <div>
            <div className="formations_block">
                <h1>Facture électronique</h1>
                <h3>Afin de renforcer la lutte contre la fraude sur la TVA, le gouvernement Français va procéder à la
                    mise
                    en place d'un système de contrôle
                    via une plateforme informatique pour toutes les entreprises du secteur privé, selon une directive
                    Européenne sur la TVA.

                    La facturation électronique entre
                    les entreprises françaises assujetties à la TVA interviendra
                    progressivement entre 2024 et 2026.
                    Celles-ci devront se conformer à des procédures encadrées.</h3>

                <h4>Explications sommaires et dates clés</h4>
                <div className="formations_block-facture">
                    Pour ce faire, 3 type d'acteurs (plateformes) seront en mesure de
                    gérer des factures électroniques :

                    <ul>
                        <li> PPF => Portail Publique de Facturation gérée par l'état, entièrement gratuite.</li>
                        <li> PDP => Plateforme de Dématérialisation Partenaire gérée par des entreprises privées, sous
                            couvert
                            d'accréditation de l'état et payante.
                        </li>
                        <li> OD => Opérateur de Dématérialisation qui devra obligatoirement être rattaché à un PPF ou
                            un PDP
                            (partenariat)
                        </li>
                    </ul>
                    <a
                        href="https://www.compta-online.com/pdp-od-ppf-tout-savoir-sur-les-futures-plateformes-de-factures-electroniques-ao5514"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Pour en savoir plus
                    </a>
                    Les formats des documents acceptés seront les mêmes que pour Chorus Pro et sont les suivants :
                    <ul>
                        <li>- l'UBL => Universal Business Language (langage XML)</li>
                        <li>- le C2I => Certificat Informatique et Internet (langage XML)</li>
                        <li> - Facture X => PDF lisible embarquant les données directement à l'intérieur du fichier</li>
                        https://www.infocert.org/dematerialisation-des-factures-podcast-e02/ </ul></div>


                <div className="formations_block-facture">
                    Dates clés selon le calendrier en vigueur, qui sera surement
                    soumis à modifications.
                    <ul> - De Janvier 2024 à fin Juin 2024 :
                        <li>L'ensemble des entreprises (TPE, PME, ETI, GE) devra procéder au choix de la plateforme pour
                            la
                            réception et l'émission des factures.</li>
                        <li> Début Juillet 2024 émission des factures pour les GE</li>
                        <li> Début Janvier 2025 émission des factures pour les ETI</li>
                        <li> Début Janvier 2026 émission des factures pour les PME, TPE et micro-entreprises</li>


                        Liens utiles :
                        <ul>
                            <li><a
                                href='https://www.facturation-electronique.eu/le-portail-public-de-facturation-ppf'>https://www.facturation-electronique.eu/le-portail-public-de-facturation-ppf</a>
                            </li>
                            <li><a
                                href='https://www.economie.gouv.fr/cedef/facturation-electronique-entreprises'>https://www.economie.gouv.fr/cedef/facturation-electronique-entreprises</a>
                            </li>
                            <li><a
                                href='https://www.impots.gouv.fr/facturation-electronique-et-plateformes-partenaires'>https://www.impots.gouv.fr/facturation-electronique-et-plateformes-partenaires</a>
                            </li>
                        </ul>
                    </ul>
                </div>

                <div className="formations_block-facture">
                    <h2>Pour les détenteurs des solutions logiciels EBP</h2>
                    <ul>
                        <li> L'éditeur EBP informatique se positionne comme un Opérateur de Dématérialisation et
                            proposera
                            une
                            liaison directe avec le PPF et facilitera l'échange avec les PDP
                        </li>
                        <li> Il faudra obligatoirement être sous couvert d'un contrat de maintenance pour la(les)
                            solution(s)
                            logicielle(s) EBP.
                        </li>
                        <li> Toutes les fiches clients devront être mises à jour avec les 4 nouvelles mentions
                            obligatoires :
                        </li>
                        <ul>
                         <li>L'adresse de livraison des marchandises (si différente de l'adresse client)</li>
                         <li> numéro SIREN du client et/ou son numéro de TVA intracommunautaire</li>
                         <li>La distinction entre les livraisons de biens et les prestations de services</li>
                         <li>L'option "TVA d'après les débits" (lorsque le prestataire a opté pour le paiement de la taxe
                        sur
                             les débits</li>
                        PDF explicatif :
                        ebp-infographie-que-doit-contenir-une-facture-electronique-0423.pdf"</ul>
                    </ul>
                </div>

                Attention, nous attirons votre attention sur des abus de langage de la part de certains OD ou PDP
                entre:
                "La facture électronique" et "La facture numérique", afin de vendre leur(s) service(s).

                <div className="formations_block-facture"><h2>Facture électronique</h2>
                    Une facture est dite électronique
                    (ou digitale), lorsque le processus
                    de facturation est dématérialisé
                    de bout en bout. </div>

                <div className="formations_block-facture"><h2>Facture numérique</h2>
                    Une facture papier numérisée /
                    dématérialisée via un outil de
                    lecture automatique des données
                    (LAD/RAD), n’est pas considérée
                    comme électronique.
                    C’est l’exemplaire papier qui
                    conserve la valeur légale dans
                    ce cas et il doit être conservé.
                    Consultez le 4ème paragraphe du livre blanc de la facture électronique pour éviter les pièges et
                    de
                    plus amples informations.
                    """" Lien fichier PDF explicatif :
                    ebp_Livres-Blanc_Facturation_electronique_2024_preparez-vous.pdf

                </div>
            </div>
        </div>

    );
}

export default FactureElectronique;