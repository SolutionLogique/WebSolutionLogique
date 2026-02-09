import React from "react";

function ConditionsGeneralesVente() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* En-tête principal */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conditions Générales de Vente
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos conditions générales de vente et de prestations de services
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sommaire collant */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <nav className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-h-[80vh] overflow-y-auto">
                <h2 className="text-xl font-bold text-blue-600 mb-6 text-center">
                  Sommaire
                </h2>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#article1" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 1 – Définitions
                    </a>
                  </li>
                  <li>
                    <a href="#article2" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 2 – Objet
                    </a>
                  </li>
                  <li>
                    <a href="#article3" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 3 – Conditions générales d'exécution
                    </a>
                  </li>
                  <li>
                    <a href="#article4" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 4 – Obligations du Prestataire
                    </a>
                  </li>
                  <li>
                    <a href="#article5" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 5 – Obligations du Client
                    </a>
                  </li>
                  <li>
                    <a href="#article6" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 6 – Prix et conditions de paiement
                    </a>
                  </li>
                  <li>
                    <a href="#article7" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 7 – Contrat de maintenance
                    </a>
                  </li>
                  <li>
                    <a href="#article7-1" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 7-1 – Durée des contrats
                    </a>
                  </li>
                  <li>
                    <a href="#article7-2" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 7-2 – Révision des prix
                    </a>
                  </li>
                  <li>
                    <a href="#article7-3" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 7-3 – Exclusions
                    </a>
                  </li>
                  <li>
                    <a href="#article8" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 8 – Logiciel
                    </a>
                  </li>
                  <li>
                    <a href="#article8-1" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 8-1 – Contrat maintenance EBP
                    </a>
                  </li>
                  <li>
                    <a href="#article8-2" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 8-2 – Exclusion
                    </a>
                  </li>
                  <li>
                    <a href="#article8-3" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 8-3 – Accès aux logiciels
                    </a>
                  </li>
                  <li>
                    <a href="#article8-4" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 8-4 – Obligation du client
                    </a>
                  </li>
                  <li>
                    <a href="#article8-5" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 8-5 – Limitations de Responsabilité
                    </a>
                  </li>
                  <li>
                    <a href="#article8-6" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 8-6 – Remise des identifiants
                    </a>
                  </li>
                  <li>
                    <a href="#article9" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 9 – Conditions particulières
                    </a>
                  </li>
                  <li>
                    <a href="#article10" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 10 – Pénalités
                    </a>
                  </li>
                  <li>
                    <a href="#article11" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 11 – Vente de matériels
                    </a>
                  </li>
                  <li>
                    <a href="#article12" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 12 – Loi informatique et libertés
                    </a>
                  </li>
                  <li>
                    <a href="#article13" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 13 – Territoire
                    </a>
                  </li>
                  <li>
                    <a href="#article14" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 14 – Nullité
                    </a>
                  </li>
                  <li>
                    <a href="#article15" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 15 – Loi applicable
                    </a>
                  </li>
                  <li>
                    <a href="#article16" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 16 – Tribunaux compétents
                    </a>
                  </li>
                  <li>
                    <a href="#article17" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-1">
                      Article 17 – Règlement des litiges
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Section d'introduction */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    CONDITIONS GÉNÉRALES DE VENTES ET DE PRESTATIONS DE SERVICES
                  </h2>
                  <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Applicables au 1er décembre 2011 et modifiables sans préavis
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ENTRE LES PARTIES :</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-blue-600 mb-2">Le Client</h4>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-blue-600 mb-2">Société Solution Logique</h4>
                      <p className="text-sm text-gray-600">
                        Sarl au capital social de 15 000 Euros<br />
                        RCS Annecy : 379 868 540<br />
                        475 route des Vernes 74370 Pringy<br />
                        <span className="font-semibold">Prestataire Solution Logique</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ÉTANT PRÉALABLEMENT EXPOSÉ QUE :</h3>
                  <div className="prose prose-gray max-w-none">
                    <p className="mb-4">
                      La société <span className="font-semibold text-blue-600">Solution logique</span> est une société de prestations de services informatiques divers tels que, notamment, dépannage, installation de logiciels et de matériels, assistance, formation, maintenance… et ce auprès des entreprises, professions libérales, administrations.
                    </p>
                    <p className="mb-4">
                      La société <span className="font-semibold text-blue-600">Solution logique</span> réalise de la vente de produits informatiques (ordinateur, imprimante, logiciels…) sur commande.
                    </p>
                    <p className="mb-4">L'offre de prestations de service de la société <span className="font-semibold text-blue-600">Solution logique</span> se décline comme suit :</p>
                    <div className="grid md:grid-cols-2 gap-3 mt-4">
                      <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-blue-500">
                        <span className="text-sm">Installation et intervention (service à la carte)</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-green-500">
                        <span className="text-sm">Contrat en temps partagé (CTP)</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-purple-500">
                        <span className="text-sm">Contrat de maintenance matériel ou logiciel</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-orange-500">
                        <span className="text-sm">Contrat pack cartouche</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-red-500">
                        <span className="text-sm">Contrat de maintenance EBP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 1 */}
              <div id="article1" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Article 1 – Définitions
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p><strong>Conditions générales de Vente et de Services :</strong> le présent acte.</p>
                  <p><strong>Parties :</strong> le Client et Solution logique.</p>
                  <p><strong>Matériels :</strong> les marchandises commandées et livrées par Solution logique au Client.</p>
                  <p><strong>Prestation :</strong> toute intervention de Solution logique au domicile du Client ou en ses locaux professionnels.</p>
                  <p><strong>Installation ou Intervention :</strong> une intervention de Solution logique au domicile ou dans les locaux professionnels du Client afin de dépanner un ordinateur, une imprimante, un périphérique, Internet, un réseau…, installer un nouveau matériel ou logiciel, éradiquer un virus… et ce de façon ponctuelle (« service à la carte ») ou dans le cadre de l'achat d'un « Contrat en temps partagé » CTP.</p>
                  <p><strong>Contrat en temps partagé :</strong> un nombre d'heures de services de Solution logique acheté par le Client pour les besoins informatiques de ce dernier. Ce crédit d'intervention est géré par le Client à sa convenance et peut être utilisé pour toute opération logicielle ou matérielle, pour toute formation informatique, pour tout autre type d'assistance informatique.</p>
                  <p><strong>Vente de matériels :</strong> la commande et la livraison de matériels tels que logiciel, serveur, ordinateur, imprimante, firewall … par Solution logique au Client.</p>
                </div>
              </div>

              {/* Article 2 */}
              <div id="article2" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Article 2 – Objet
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  <p>Les Conditions générales de Vente et de Services ont pour objet d'organiser le cadre dans lequel le Client sollicite Solution logique afin d'obtenir une intervention, une installation, un Contrat en temps partagé ou une vente de matériels…</p>
                </div>
              </div>

              {/* Article 3 */}
              <div id="article3" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Article 3 – Conditions générales d'exécution
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>Les Prestations sont destinées à assister, conseiller, informer, former le Client, toutes autres personnes du même foyer ou tout subordonné du Client ; à aider à l'installation, la configuration des équipements appartenant au Client ou lui étant vendu par Solution logique ; à aider à résoudre les pannes de ces mêmes équipements.</p>

                  <p>Les Prestations sont réalisées sur le lieu de résidence du Client s'il est particulier ou en ses locaux professionnels s'il s'agit d'une personne morale.</p>

                  <p>Le Client se doit d'être à jour des licences d'exploitation des logiciels installés sur ses différents équipements et doit être à même de fournir tous les documents des fabricants et/ou distributeurs et/ou fournisseurs nécessaires à la réalisation des Prestations. Il n'est en aucun cas du rôle de Solution logique de vérifier cet élément.</p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <h4 className="font-bold text-yellow-800 mb-2">Mise en garde</h4>
                    <div className="space-y-3 text-yellow-700">
                      <p>Solution logique ne pourra assurer ses Prestations, si l'environnement physique des équipements est non-conforme aux prescriptions du constructeur et/ou distributeur et/ou fournisseur aux règles de sécurité ; si les équipements ont fait état d'une manipulation anormale (volontaire ou non) ayant modifié leurs environnements physiques ; en cas d'évènement accidentel, de force majeure ou d'une cause exonératoire limitant partiellement ou totalement l'accès aux équipements pour lesquels le Client a expressément demandé une intervention de Solution logique notamment que les équipements soient inaccessibles pour quelles que raisons que ce soit, que les conditions d'alimentation électrique, téléphonique ou autres soient défectueuses ou qu'il soit impossible d'accéder au domicile ou dans les bureaux professionnels du Client.</p>

                      <p>Solution logique peut immédiatement cesser d'assurer la ou les Prestations en cours, si de l'avis raisonnable de l'intervenant, les conditions de travail au domicile ou dans les locaux professionnels du Client risquent de mettre sa sécurité en danger ou s'il suspecte le Client d'avoir modifié ses équipements sans l'avoir préalablement averti, ou si le Client ne possède pas l'ensemble des licences d'utilisation pour les équipements ou logiciels en sa possession. Le cas échéant, la Prestation sera entièrement due quel que soit le type de Prestation sollicitée par le Client.</p>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <h4 className="font-bold text-red-800 mb-2">Responsabilité des données</h4>
                    <div className="space-y-3 text-red-700">
                      <p>Le client est seul responsable des données présentes sur ses équipements. Par conséquent, il prendra toutes les précautions nécessaires pour assurer la sauvegarde de ses données personnelles. Cela signifie que les opérations de sauvegarde, quelles qu'elles soient, sont à la charge du client et non de Solution Logique. Ainsi, la responsabilité de Solution Logique ne peut être engagée en cas de perte totale ou partielle de données de quelque nature que ce soit.</p>

                      <p>La clause précédente ne s'applique pas en cas d'opération de sauvegarde demandée par le client à Solution Logique. Dans cette hypothèse, Solution Logique pourrait être responsable de la perte de données qu'il occasionne directement. Cependant, en cas de défaillance quelconque du matériel ou du logiciel avant ou au cours de l'opération, la responsabilité de Solution Logique ne saurait être engagée.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 4 */}
              <div id="article4" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Article 4 – Obligations du Prestataire
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Solution logique s'engage à fournir les moyens humains nécessaires à l'accomplissement des Prestations définies à l'Article 1 de Conditions Générales de Vente et de Services.</p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <h4 className="font-bold text-blue-800 mb-2">Exonération de responsabilité</h4>
                    <p className="text-blue-700">Le Client est informé que la réalisation des Prestations entraîne une rupture de la garantie du constructeur et/ou du distributeur auprès duquel le Client a acquis ses équipements et à laquelle ne se substitue en aucun cas une garantie de Solution logique.</p>
                  </div>

                  <p>De convention expresse entre les parties, Solution logique n'est soumis, au titre des présentes qu'à une <strong>obligation de moyen</strong> et en aucun cas à une obligation de résultats. Solution logique intervient uniquement sur demande expresse du Client, aussi en aucun cas Solution logique ne peut être tenu responsable des dommages directs et/ou indirects, matériels ou immatériels.</p>
                </div>
              </div>

              {/* Article 5 */}
              <div id="article5" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                  Article 5 – Obligations du Client
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Le Client s'engage à établir et entretenir un environnement physique des équipements conforme aux spécifications des fabricants et/ou distributeurs et aux normes de sécurité ; à respecter les procédures d'utilisation des équipements (logiciels, accessoires, périphériques, consommables…) et en particulier à ne pas procéder à des modifications techniques. Le Client s'engage à tenir à disposition l'ensemble de la documentation technique remis par les fabricants et/ou distributeurs notamment les supports numériques d'installation (CDRom, Disquette, DVDRom…) ainsi que les numéros de licences.</p>

                  <p>Le Client est informé que l'ensemble des frais, quels qu'ils soient, afférents à l'exécution des Prestations et notamment les frais d'électricité, de connexions à internet ou d'usure des consommables informatiques ou bureautiques engendrées par les manipulations effectuées par Solution logique sont et restent à sa charge, aussi le Client s'engage-t-il à les régler. Le Client s'engage donc à ne pas en demander le remboursement total ou partiel sous quelque forme que ce soit.</p>

                  <p>Le Client s'engage à déplacer ou à nettoyer tout élément considéré d'un avis raisonnable par l'intervenant comme gênant pour assurer les Prestations.</p>

                  <p>Le Client s'engage à informer au mieux Solution logique en cas de panne afin que l'intervention de dépannage puisse avoir lieu le plus rapidement possible et le plus efficacement possible.</p>
                </div>
              </div>

              {/* Article 6 */}
              <div id="article6" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
                  Article 6 – Prix et conditions de paiement
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>Tous les prix communiqués par Solution logique sont facturés selon les tarifs en vigueur au jour de la commande et en considération de la connexion d'un ou plusieurs postes. Toute commande livrée en carton sera expédiée par un transporteur choisi par Solution logique ou par Solution logique elle-même. Un forfait minimum sera facturé au Client. Ce forfait est d'un montant établi selon la distance entre l'adresse de Solution logique 475 route des Vernes 74370 ANNECY et l'adresse de livraison donnée par le Client.</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Délai de paiement</h4>
                    <p className="text-blue-700">Sauf dispositions contraires figurant sur la facture ou sur la fiche d'ouverture de compte remplie et signée par le Client, le délai de paiement des sommes dues est fixé au maximum le <strong>trentième jour</strong> suivant la date de réception des marchandises ou d'exécution de la prestation demandée (c. com. Art. L.441-6).</p>
                  </div>

                  <p>Les versements effectués avant la livraison ou la facturation du matériel sont considérés comme acompte à valoir sur le prix définitif.</p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">Règlements échelonnés</h4>
                    <p className="text-red-700">Dans le cas de règlements échelonnés, concrétisés ou non par des traites, le non-paiement d'une seule échéance rendra immédiatement exigible la totalité du solde restant dû, sans qu'il soit besoin d'une mise en demeure et sans préjudice de tous autres droits.</p>
                  </div>

                  <p>Solution logique se réserve le droit de prendre, pour toute commande, les garanties financières qui leur sembleront appropriées.</p>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">Particularités afférentes aux Contrats de Maintenance matériel ou logiciel</h4>
                    <p className="text-amber-700">Tant le prix du forfait hors taxes que le coût/copie hors taxes pourront être réajustés une fois par an proportionnellement : soit à l'issue de la première période, le vendeur se réserve le droit d'augmenter ses tarifs librement dans les conditions suivantes : si les modifications tarifaires entraînent, pour chaque période future, une hausse inférieure ou égale à 10 % du tarif en vigueur, l'augmentation s'appliquera de plein droit ; dans le cas où le prix du contrat de maintenance est compris dans le montant de la vente, seules les augmentations sont payables périodiquement. Si le prix de maintenance est inclus dans le financement avec le matériel, la part annuelle revenant à la maintenance le montant sera imputée au montant total HT des loyers. Soit par la variation de l'indice du coût horaire du travail tous salariés des Industries Mécaniques et Electriques publié mensuellement au BOCC, les indices de référence étant les derniers indices publiés à la date de variation (cas de disparition de cet indice, tout indice analogue lui sera substitué).</p>
                  </div>
                </div>
              </div>

              {/* Article 7 */}
              <div id="article7" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7</span>
                  Article 7 – Contrat de maintenance : Matériel ou logiciel
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">Objet</h4>
                    <p className="text-green-700">Le bon fonctionnement du matériel et des programmes sont garanties pour la durée mentionnée sur le(s) dit(s) contrat(s) signé(s) par le client. Cette garantie couvre les vices cachés de construction pendant un an et les défauts de matière, mais ne couvre pas les « bugs » des éditeurs de logiciels. Toute pièce défectueuse sera remplacée si elle est couverte par une garantie constructeur et validé par un contrat de maintenance matériel en cours de validité indiquant clairement son changement, ce dit contrat de maintenance doit être obligatoirement contracté par le client auprès de Solution Logique étant précisé sous réserve que l'ensemble des factures émises aient été réglées à la date de(s) échéance(s) indiquée(s).</p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">Résiliation anticipée</h4>
                    <p className="text-red-700">En cas de résiliation par anticipation d'un ou des contrats de maintenance matériel, logiciel ou prestation souscrit par le client ce dernier s'engage à indemniser Solution Logique en partie à titre de dédommagement du préjudice sur les prévisions d'embauche du personnel technique, ou administratif que Solution Logique engage afin d'assurer ces contrats ou prestation de maintenance matériel ou logiciel. Dans tous les cas de résiliation survenant avant l'expiration du ou des contrats matériel ou logiciel, le client procédera au paiement à Solution Logique d'une indemnité égale à la totalité des montants dus ou à devoir jusqu'à la date d'expiration de la période contracté jusqu'à un maximum de cinq ans.</p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">Contrats spécifiques (CTP, pack cartouche)</h4>
                    <p className="text-amber-700">Pour les contrats spécifiques de temps partagé (CTP) ou de contrats de maintenance ''pack cartouche'' ou contrat ne prenant en compte que la prestation de maintenance hors pièces détachées, devront être payé en totalité en cas de résiliation par anticipation et ce jusqu'à l'expiration des dits contrats pour un maximum de cinq ans. Le calcul prise en compte que le client accepte se fera sur la base des heures déjà effectuées et ou des consommables utilisés des périodes précédentes, la moyenne sera prise en compte et multiplié par la durée restante à échoir jusqu'à un maximum de cinq ans. Cependant un montant minimum de 895 € HT par an sera facturé.</p>
                  </div>

                  <p>Les fournitures consommables (encre, ruban, papier, disque dur externe et autres) ne font pas l'objet du présent contrat. Le technicien interviendra pendant les heures ouvrables des jours ouvrés du service de maintenance désigné. Le bénéficiaire de la garantie ne pourra prétendre à aucune indemnité pour privation de jouissance qu'elle qu'en soit la cause. Les conditions générales sont établies pour des appareils dont l'utilisation journalière ne dépasse pas l'horaire légal d'un utilisateur.</p>

                  <p>Ne font pas l'objet de la garantie, les pannes dues aux négligences, aux défauts d'utilisation ou de surveillance, d'entretien ainsi que les dépannages de programmes dus aux coupures de courant si le matériel n'est pas équipé d'un onduleur, si les sauvegardes ne sont pas faîtes, et de façon générale, toute utilisation non conforme aux prescriptions ou spécifications précisées dans le manuel des constructeurs.</p>

                  <p>Pour les réparations importantes, hors garantie et hors contrat, un devis sera préalablement validé sur demande expresse du client et signé par le client. Le vendeur est déchargé de toute responsabilité en cas de suspension ou d'inexécution de son obligation de service imputable à un évènement indépendant de sa volonté (grève, incendie, etc…) l'empêchant de s'exécuter.</p>

                  <p>L'appréciation de la périodicité des visites et la nécessité du remplacement des pièces sont laissées à l'initiative du vendeur. Le déplacement d'un appareil sera subordonné à son accord, le non-respect de cette clause pourra entraîner la résiliation de plein droit du contrat par ce dernier, tous les frais consécutifs à ce déplacement resteront à la charge du client.</p>

                  <p>Tout déplacement non-pré facturé (ou non couvert par le contrat) sera facturé, en sus, au tarif en vigueur. Ledit contrat de maintenance ne peut être cédé avec la vente du matériel à un tiers ; dans ce cas, les obligations du vendeur cesseront de plein droit sans qu'il lui soit fait obligation de rembourser tout ou partie des sommes versées.</p>

                  <p>En cas d'absence de document dument signé par le client depuis un an, la présente facture tient lieu de contrat et prend en compte les conditions inscrites dans l'article 7, que le client accepte dans son intégralité et sans réserve.</p>
                </div>
              </div>

              {/* Article 7-1 */}
              <div id="article7-1" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7.1</span>
                  Article 7-1 – Durée des contrats de maintenance ou abonnement
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>La durée de base du contrat est mentionnée pour une durée irrévocable maximum de <strong>CINQ ANS</strong> sauf accord expresse des deux parties notifiées par écrit à compter de la date de signature de devis, commande, offre de service ou de date du procès verbale de livraison en cas de livraison différée ou de contrat de location et ou crédit-bail, à l'expiration de cette durée initiale, il sera renouvelé automatiquement pour la même durée initiale par tacite reconduction.</p>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-800 mb-2">Dénonciation</h4>
                    <p className="text-yellow-700">Toute dénonciation par l'un ou l'autres des parties se fera par lettre recommandée A.R reçue effectivement par l'autre partie au moins <strong>90 jours</strong> avant l'expiration de la durée initiale où, après celle-ci, de la période de renouvellement en cours.</p>
                  </div>

                  <p>En cas de contrat de maintenance prenant en compte un volume d'impression ou de scan, ces copies ou scans supplémentaires seront facturés au terme de chaque période, avec possibilité selon le contrat d'intégrer les consommables (hors fourniture du papier).</p>
                </div>
              </div>

              {/* Article 7-2 */}
              <div id="article7-2" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7.2</span>
                  Article 7-2 – Révision des prix
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>À l'issue de la première période, le vendeur se réserve le droit d'augmenter ses tarifs dans les conditions suivantes : si les modifications tarifaires entraînent, pour chaque période future, une hausse inférieure ou égale à 10 % du tarif en vigueur, l'augmentation s'appliquera de plein droit ; dans le cas où le prix du contrat de maintenance est compris dans le montant de la vente, seules les augmentations sont payables périodiquement. Si le prix de maintenance est inclus dans le financement du matériel, la part annuelle revenant à la maintenance est le montant défini au départ et imputé au montant total HT des loyers.</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Conditions de paiement</h4>
                    <p className="text-blue-700">Les factures sont payables au comptant, à réception et sans escompte. Elles sont payables d'avance pour chaque période. En cas de non-paiement des échéances et huit jours après mise en demeure par lettre recommandée avec accusé de réception restée sans effet, ledit contrat pourra être résilié à l'encontre du client, moyennant toutes conséquences de droit.</p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-bold text-purple-800 mb-2">Attribution de compétence</h4>
                    <p className="text-purple-700">Toute contestation relative au présent contrat sera soumise au Tribunal de Commerce du siège social de notre société.</p>
                  </div>
                </div>
              </div>

              {/* Article 7-3 */}
              <div id="article7-3" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7.3</span>
                  Article 7-3 – Exclusions des contrats de maintenance
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <h4 className="font-bold text-red-800 mb-2">Exclusions</h4>
                    <div className="space-y-2 text-red-700">
                      <p>Les virus et tous les problèmes qui en découlent, ainsi que tout piratage informatique ou risque cyber, ne sont pas couverts par le(s) contrat(s) de maintenance matérielle ou logiciels. Cette exclusion s'applique même si le client est équipé de pare-feu, d'antispam ou de tout autre matériel et logiciel disponible sur le marché.</p>
                      <p>Solution Logique ne prend également pas en charge toutes erreurs ou mauvaises manipulations de l'utilisateur.</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Prestations possibles</h4>
                    <p className="text-blue-700">Cependant ces prestations pourront être effectuées par Solution Logique, un bon de commande devra être validé et accepté par le client.</p>
                  </div>
                </div>
              </div>

              {/* Article 8 */}
              <div id="article8" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8</span>
                  Article 8 – Logiciel
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Si le logiciel fait l'objet d'un cahier des charges soumis à l'accord écrit et signé du client, cet accord conditionne les opérations ultérieures nécessaires à l'aboutissement du dossier.</p>

                  <p>En cas de vente de progiciel, l'acheteur doit vérifier ou faire vérifier que le produit est bien propre à satisfaire ses besoins et qu'il est compatible avec le matériel ou les logiciels existant déjà.</p>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">Logiciels standards</h4>
                    <p className="text-amber-700">En cas de vente de logiciels standards, pour lesquels nous ne sommes que distributeurs, nous n'avons aucune possibilité de modifier les programmes : en aucun cas nous ne serons responsables des performances et du suivi de ces programmes qui ne pourront être que sous la responsabilité du client qui en accepte les risques éventuels.</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Propriété intellectuelle</h4>
                    <p className="text-blue-700">Les logiciels bénéficient de la protection attachée aux droits de la propriété littéraire et industrielle appartenant au concepteur. En conséquence, le client ne peut jamais céder les droits d'utilisation des logiciels à un tiers.</p>
                  </div>

                  <p>La formation devra permettre au personnel de connaître et d'exécuter de manière satisfaisante la mise en œuvre des applications. Pour chaque application, la durée de formation est indiquée sur le bon de commande ou sur le devis. Le fournisseur mettra à la disposition du client un formateur compétent, toute demande de formation supplémentaire sera facturée en sus.</p>

                  <p>En tout état de cause, la possible responsabilité du vendeur, éventuellement admise, est limitée au maximum, au montant du prix de vente HT du logiciel.</p>
                </div>
              </div>

              {/* Article 8-1 */}
              <div id="article8-1" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8.1</span>
                  Article 8-1 – Contrat de maintenance EBP
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p><strong>Solution Logique</strong> s'engage à fournir au client, qui accepte, le service de maintenance des logiciels EBP dans les conditions prévues à la signature de son contrat.</p>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">Engagements de Solution Logique</h4>
                    <p className="text-green-700 mb-3">Dans le cadre de ces contrats de maintenance et sous réserve que l'ensemble des factures émises aient été réglées à la date de(s) échéance(s) indiquée(s), Solution Logique s'engage :</p>
                    <ul className="list-disc list-inside text-green-700 space-y-2">
                      <li>À assister le client dans l'utilisation des logiciels EBP. À cet effet, une ligne téléphonique est mise à la disposition du client (de 9H à 12H et de 14H à 17H30 du lundi au vendredi).</li>
                      <li>Des coordinateurs sont désignés au sein de l'entreprise afin que le client puisse rentrer rapidement en contact avec un de nos spécialistes et trouver ainsi une réponse aux préoccupations du client sur le(s) logiciel(s) EBP concerné(s).</li>
                      <li>La durée d'un appel téléphonique ne saurait excéder 15 minutes. Au-delà, il conviendra de prévoir une intervention à un tarif privilégié.</li>
                    </ul>
                  </div>

                  <p>Après acceptation du client, nous interviendrons à l'aide de notre outil de support sécurisé pour gérer ce supplément d'intervention à distance via le web. Dans tous les cas de figure, l'assistance téléphonique ne se substitue pas à une formation initiale sur le(s)-dit(s) logiciel(s).</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Note Logiciel de Paie</h4>
                    <p className="text-blue-700">Le client peut souscrire par le biais de Solution Logique à un contrat Paie ''Privilège'' dans ce cas l'assistance téléphonique sera effectuée par EBP France directement.</p>
                  </div>
                </div>
              </div>

              {/* Article 8-2 */}
              <div id="article8-2" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8.2</span>
                  Article 8-2 – Exclusion
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <h4 className="font-bold text-red-800 mb-2">Ne peuvent en aucun cas être inclus dans la maintenance de(s) Logiciel(s) EBP :</h4>
                    <ul className="list-disc list-inside text-red-700 space-y-2">
                      <li>La reconstitution des fichiers en cas de destruction accidentelle</li>
                      <li>Le développement de nouveaux programmes, ces interventions complémentaires ne s'exécutant que sur demande expresse du client pour la réalisation de travaux ponctuels (Réinstallation de(s) logiciel(s), paramétrages de toutes natures, clôture de compte, DADS, réalisations de documents et d'états…)</li>
                      <li>Le travail d'exploitation</li>
                      <li>Les sauvegardes des fichiers et saisies d'exploitation</li>
                      <li>Les logiciels autres que ceux spécifiés qui fonctionneraient en enchaînement avec eux</li>
                      <li>L'utilisation de logiciels pirates</li>
                      <li>L'entretien ou les modifications techniques effectuées directement par le client ou tout autres intervenants autres que les représentants de Solution Logique</li>
                      <li>Le matériel, les accessoires et fournitures non conforme aux prérequis de bon fonctionnement</li>
                      <li>Les modifications à apporter au(x) logiciel(s) pour leur utilisation sur un autre matériel que celui prévu à l'origine</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-800 mb-2">Antivirus</h4>
                    <p className="text-yellow-700">Solution Logique n'est pas en mesure d'assurer la lutte anti-virus du parc informatique, le client devra avoir un antivirus à jour sur le(s) ordinateur(s) ou serveur(s).</p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-bold text-purple-800 mb-2">Limitation de responsabilité</h4>
                    <p className="text-purple-700">Concernant le(s) logiciel(s) de gestion, les services distribués par Solution Logique n'ont aucune prétention de remplacer les compétences d'un comptable ou d'un cabinet d'expertise comptable, seules habilités à organiser, vérifier, apprécier et redresser les comptabilités et comptes de toute nature. De même, et concernant les logiciels de paye, les services distribués ne pourraient être assimilés à des compétences dont disposent les professionnels en droit du travail ou des personnes dûment formées à cette discipline. Solution Logique ne pourra pas être tenu responsable des calculs ou formules qui doivent être fournis par le client ou son conseil habituel, ces données doivent être validées et certifiées par un Expert-comptable habilité.</p>
                  </div>
                </div>
              </div>

              {/* Article 8-3 */}
              <div id="article8-3" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8.3</span>
                  Article 8-3 – Accès au(x) logiciel(s)
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Le client s'engage à laisser au personnel de Solution Logique, le libre accès au matériel, il devra lui laisser un espace suffisant et lui assurer l'assistance nécessaire, il devra notamment mettre à sa disposition les différents opérateurs et le matériel à l'exécution des services de maintenance de Solution Logique.</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Heures d'intervention</h4>
                    <p className="text-blue-700">Les interventions en clientèle seront effectuées par les techniciens de Solution Logique, pendant les heures normales de travail correspondant à 7 heures par jour du lundi au vendredi.</p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">Heures supplémentaires</h4>
                    <p className="text-amber-700">Si les interventions sont effectuées en dehors des heures normales de travail, ou les samedis, dimanches ou jours fériés, les déplacements et interventions seront facturés en sus, suivant les tarifs en vigueur.</p>
                  </div>

                  <p>Au cas où le(s) technicien(s) envoyé par Solution Logique ne pourrait pas avoir l'accès au(x) matériel(s) du fait du client, le temps passé par le(s) technicien(s) serait alors facturé en supplément.</p>
                </div>
              </div>

              {/* Article 8-4 */}
              <div id="article8-4" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8.4</span>
                  Article 8-4 – Obligation du client
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Le client s'engage à respecter les conditions normales d'utilisation des logiciels EBP, à appliquer strictement toutes les instructions données par Solution Logique.</p>

                  <p>Le client informera Solution Logique de tous changements qui pourraient survenir dans l'organisation.</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Interlocuteur unique</h4>
                    <p className="text-blue-700">Le client devra désigner au sein de son personnel une personne qualifiée qui sera le seul interlocuteur de Solution Logique.</p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">Non-respect du contrat</h4>
                    <p className="text-red-700">En cas de non-respect de l'une des dispositions du contrat ou des obligations prévues, Solution Logique pourra mettre fin au présent contrat en respectant un préavis de 90 jours.</p>
                  </div>

                  <p>Il appartient au client de prendre toutes les mesures utiles et notamment de contracter une assurance pour se protéger contre tout dommage immatériel tels que manque à gagner, pertes d'exploration, préjudice commercial.</p>
                </div>
              </div>

              {/* Article 8-5 */}
              <div id="article8-5" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8.5</span>
                  Article 8-5 – Limitations de Responsabilité Logiciels d'entreprise EBP
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Solution Logique sera dégagé de toute responsabilité en cas d'inobservation par le Client d'une des clauses de(s) contrat(s) signé(s) et dans les cas prévus dans Article 8-2 « Exclusions ».</p>

                  <p>Solution Logique pourra mettre tout en œuvre et particulièrement en se rapprochant de l'éditeur de logiciel EBP, pour la résolution de problème ou amélioration du produit, cependant Solution Logique ne peut donner aucune garantie n'étant pas l'éditeur des programmes EBP.</p>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <h4 className="font-bold text-red-800 mb-2">Exclusions de responsabilité</h4>
                    <ul className="list-disc list-inside text-red-700 space-y-2">
                      <li>Solution Logique ne pourra en aucun cas être considéré comme responsable des dommages directs ou indirects, y compris en cas de pertes de données ou d'informations.</li>
                      <li>Solution Logique ne pourra être rendu responsable des anomalies de fonctionnement des Logiciels EBP, quelles que puissent être les conséquences ou la durée d'immobilisation du système.</li>
                      <li>Solution Logique ne pourra apporter les ajouts ou modifications sur les programmes EBP existants imposés ou non par un changement de la réglementation en vigueur.</li>
                      <li>La responsabilité de Solution Logique ne pourra être recherchée en cas de cessation d'activité de la société éditrice EBP, ou d'arrêt du suivi, temporaire ou définitif desdits logiciels par la société éditrice EBP.</li>
                      <li>La responsabilité de Solution Logique ne pourra être recherchée en cas de force majeure ou pour d'autres motifs indépendants de sa volonté tels que grèves, conflits sociaux, sinistres ou accidents.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Article 8-6 */}
              <div id="article8-6" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8.6</span>
                  Article 8-6 – Remise des identifiants et mots de passe
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-slate-800 mb-4">1. Objet</h4>
                    <p>La présente clause définit les conditions dans lesquelles Solution Logique (ci-après « le Prestataire ») remet au Client les identifiants et mots de passe permettant l'accès aux services, outils ou plateformes mis à disposition dans le cadre de la prestation convenue.</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-4">2. Conditions préalables à la remise</h4>
                    <p className="mb-4">La remise des identifiants et mots de passe est subordonnée au respect cumulatif des conditions suivantes :</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <div>
                          <strong>Demande expresse et écrite :</strong> Le Client doit formuler une demande écrite (courrier, email signé ou formulaire dédié) adressée au Prestataire, précisant explicitement la nature des accès sollicités.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <div>
                          <strong>Lettre de décharge :</strong> Le Client s'engage à signer et retourner une lettre de décharge, attestant qu'il reconnaît avoir reçu les identifiants et mots de passe, s'engage à en assurer la confidentialité et à ne les communiquer à aucun tiers, et assume l'entière responsabilité de leur utilisation, y compris en cas de perte, de vol ou d'utilisation frauduleuse.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <div>
                          <strong>Règlement intégral des factures :</strong> Tous les montants dus au titre des prestations réalisées par le Prestataire doivent être intégralement réglés. À défaut, le Prestataire se réserve le droit soit de suspendre la remise des identifiants jusqu'à régularisation de la situation, soit de les conserver jusqu'au règlement intégral.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-green-800 mb-4">3. Modalités de remise</h4>
                    <p>Une fois que la totalité des factures ont été réglées en totalité, Solution Logique procédera à la remise des identifiants et mots de passe, qui seront transmis par voie sécurisée (en présentiel, email chiffré, plateforme dédiée ou courrier recommandé), dans un délai raisonnable suivant la réception de la demande écrite, de la lettre de décharge et du règlement intégral des factures.</p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-amber-800 mb-4">4. Obligations du Client</h4>
                    <p className="mb-3">Le Client s'engage à :</p>
                    <ul className="space-y-2">
                      <li><strong>Protéger les identifiants :</strong> Mettre en œuvre toutes les mesures nécessaires pour garantir leur confidentialité et leur sécurité (ex. : stockage sécurisé, non-partage).</li>
                      <li><strong>Informer le Prestataire :</strong> Signaler sans délai toute suspicion de compromission ou d'utilisation non autorisée des identifiants.</li>
                      <li><strong>Respecter les usages autorisés :</strong> Utiliser les identifiants uniquement pour les finalités prévues dans le contrat, sous peine de suspension immédiate des accès.</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-purple-800 mb-4">5. Responsabilité</h4>
                    <p>Le Prestataire décline toute responsabilité en cas de préjudice résultant :</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>D'une utilisation non conforme des identifiants par le Client ou ses préposés ;</li>
                      <li>D'un manquement du Client à ses obligations de confidentialité ou de sécurité.</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-red-800 mb-4">6. Suspension ou retrait des accès</h4>
                    <p className="mb-3">Le Prestataire se réserve le droit de suspendre ou retirer les identifiants, sans préavis, en cas de :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Non-respect des présentes CGV ;</li>
                      <li>Utilisation frauduleuse ou abusive ;</li>
                      <li>Non-paiement des factures après demande formulée par écrit ou mise en demeure infructueuse.</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-indigo-800 mb-4">7. Données personnelles</h4>
                    <p>Si les identifiants permettent d'accéder à des données à caractère personnel, le Client s'engage à respecter les dispositions du Règlement Général sur la Protection des Données (RGPD) et à ne pas utiliser ces données à des fins autres que celles prévues contractuellement.</p>
                  </div>
                </div>
              </div>

              {/* Article 9 */}
              <div id="article9" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">9</span>
                  Article 9 – Conditions particulières
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                    <h4 className="font-bold text-amber-800 mb-2">Clause de réserve de propriété (Article 65 de la loi No 67-503 du 13.07.1967 modifiée par la loi 80-335 J.O du 12.05.1980)</h4>
                    <p className="text-amber-700">Le vendeur conserve la propriété des biens vendus jusqu'au paiement effectif de l'intégralité du prix en principal et accessoire. Le défaut de paiement de l'une quelconque des échéances peut entraîner la revendication des biens. Ces dispositions ne font pas obstacle au transfert à l'acheteur, dès la livraison, des risques de perte et de détérioration des biens vendus ainsi que des dommages qu'ils pourraient occasionner.</p>
                  </div>

                  <p>A défaut de paiement, notre société se réserve le droit de reprendre possession de sa livraison sans formalité préalable, indépendamment de toute poursuite judiciaire et le client s'engage à ne pas s'opposer à une telle reprise. Tous les frais resteront à la charge du client. En ce qui concerne les logiciels, nous nous réservons le droit de procéder à leur désinstallation en cas de non-paiement des factures correspondantes.</p>

                  <p>Ces précédentes conditions de reprise s'appliquent aussi à tout produit mis à disposition du client que notre société souhaiterait légitimement reprendre (dépôt, prêt, remplacement, location).</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Location ou crédit-bail</h4>
                    <p className="text-blue-700">En cas de demande de location ou de crédit-bail, l'exécution du bon de commande du Client est conditionnée par l'accord donné par l'organisme de financement. A défaut d'obtention par le Client du financement sollicité auprès du ou des organismes, la commande objet du contrat devient caduque de plein droit ; le Client ne pourra prétendre à la livraison totale ou partielle du matériel et s'engage, à notification, même verbale du refus de financement, à restituer le matériel déjà livré ou mis à l'essai ainsi qu'à restituer toute somme versée par Solution logique notamment en application d'une reprise ou participation à un solde de contrat.</p>
                  </div>

                  <p>Dans le cas où un contrat de financement remplace un précédent contrat, le Client reconnaît et accepte que le montant des sommes versées au titre de cette résiliation par Solution logique soit intégré dans le nouveau contrat de financement. Le versement par Solution logique dudit montant à l'occasion du présent contrat constitue un tout indissociable avec celui-ci.</p>
                </div>
              </div>

              {/* Article 10 */}
              <div id="article10" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">10</span>
                  Article 10 – Pénalités
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <h4 className="font-bold text-red-800 mb-2">Pénalités de retard</h4>
                    <p className="text-red-700">En cas de retard de paiement, le Client est tenu de régler en sus du montant de la facture une pénalité de retard d'un montant égal à <strong>3 (trois) fois le taux d'intérêt légal</strong>, calculée sur montant de la totalité des sommes dues, conformément aux dispositions de l'article L.441-6 du code du commerce et du décret suivant (Décret 2009-138 du 9 février 2009).</p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">Frais de recouvrement</h4>
                    <p className="text-amber-700">En plus de cette indemnité un forfait pour frais de recouvrement d'un montant de <strong>40 euros (quarante euros)</strong> pour les professionnels (décret 2012-1115 du 9 octobre 2012) sera exigible.</p>
                  </div>
                </div>
              </div>

              {/* Article 11 */}
              <div id="article11" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">11</span>
                  Article 11 – Conditions d'exécution propres à la commande et à la vente de matériels
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">

                  {/* Article 11-1 */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-slate-800 mb-4">Article 11-1 – Enregistrement de la commande</h4>
                    <p className="mb-3">A défaut de confirmation du devis par télécopie ou par mail, aucune commande ne sera prise en compte. De convention expresse les Parties reconnaissent les suscitées télécopie ou mail comme mode de preuve de la commande et ce quel que soit le montant du devis.</p>
                    <p className="mb-3">De même, aucune commande n'est prise en compte antérieurement au versement d'un <strong>acompte de 40%</strong> sur le montant hors taxe du devis.</p>
                    <p className="mb-3">Par l'envoi du devis signé, le Client reconnaît accepter les Conditions Générales de Ventes et de Prestations de Services.</p>
                    <p>La date de prise de la commande est réputée être celle de la réception de la confirmation par Solution logique.</p>
                  </div>

                  {/* Article 11-2 */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-amber-800 mb-4">Article 11-2 – Clause de réserve de propriété du Matériel</h4>
                    <p className="mb-3">Solution logique se réserve la propriété des marchandises désignées sur le devis accepté par le Client, jusqu'au paiement intégral de leur prix en principal et intérêts. A défaut de paiement du prix à l'échéance convenue, Solution logique pourra reprendre les marchandises, la vente sera résolue de plein droit si bon semble à Solution logique et les acomptes déjà versés lui resteront acquis en contrepartie de la jouissance des marchandises dont aura bénéficié le Client.</p>
                    <p className="mb-3">Les marchandises resteront la propriété de Solution logique jusqu'au paiement intégral de leur prix mais le Client en deviendra responsable dès leur remise matérielle, le transfert de possession entraînant celui des risques. Le Client s'engage, en conséquence, à souscrire, dès à présent, un contrat d'assurance garantissant les risques de perte, vol ou destruction des marchandises désignées.</p>
                    <p>Les marchandises restant la propriété de Solution logique, jusqu'au paiement intégral de leur prix, il est interdit au Client d'en disposer pour les revendre ou les transformer. Toutefois, à titre de simple tolérance et pour les seuls besoins de son activité, Solution logique autorise le Client à revendre les marchandises désignées sous réserve que le Client s'acquitte, dès la revente, de l'intégralité du prix restant dû, les sommes correspondantes étant, dès à présent, nanties au profit de Solution logique conformément à l'article 2071 du code civil, le Client devenant simple dépositaire du prix.</p>
                  </div>

                  {/* Article 11-3 */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-4">Article 11-3 – Propriété et utilisation des licences et logiciels</h4>
                    <p className="mb-3">Le Client reconnaît sur le logiciel concédé l'entière propriété de l'éditeur, et se doit de respecter la législation en vigueur.</p>
                    <p className="mb-3">Le Client s'engage formellement à l'utiliser pour son seul usage et sur un seul système. Il est rigoureusement interdit au Client de faire au profit de qui que ce soient des travaux à façon sur le logiciel concédé. De même, il lui est formellement interdit d'en faire une quelconque copie, sauf à titre exclusif de sauvegarde.</p>
                    <p>Le Client respecte et s'engage à faire respecter par ses subordonnés notamment les droits d'auteur reconnus par le Code de la Propriété Intellectuelle.</p>
                  </div>

                  {/* Article 11-4 */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-green-800 mb-4">Article 11-4 – Délais de livraison</h4>
                    <p className="mb-3">Les délais de livraison peuvent varier d'une commande à l'autre et ce même dans l'hypothèse de la commande de matériel identique, aussi en aucun cas Solution logique ne s'engage à proposer le même délai de livraison pour des commandes identiques.</p>
                    <p className="mb-3">Si le délai de livraison par Solution logique au Client devait dépasser de plus de six mois sans raison de force majeure les délais indiqués, le Client pourrait dénoncer le contrat par lettre recommandée avec accusé de réception.</p>
                    <p className="mb-3">Si un article se révèle indisponible et ce à postérieurement à la commande, Solution logique en informe dans les meilleurs délais le Client et lui adresse en échange un produit objectivement équivalent en termes de prix et de qualité. Le Client n'est alors pas en mesure de refuser et ne peut réclamer un dédommagement différent à ce titre.</p>
                    <p className="mb-3">En tout état de cause, les délais de livraison indiqués ne sont qu'indicatifs. Les retards ne peuvent en aucun cas justifier l'annulation de la commande ou donner lieu à pénalités ou dommages et intérêts.</p>
                    <p className="mb-3">L'incendie, la panne, la grève, les difficultés d'approvisionnement sont assimilées par les Parties à la force majeure.</p>
                    <p>L'adduction et la fourniture du courant électrique, l'aménagement des locaux, l'acquisition et l'installation d'un dispositif de sécurité sont à la charge du Client. Les travaux sont réalisés par ce dernier. La responsabilité des dommages, qui ont pour origine l'installation ou l'équipement du domicile du client ou toute autre cause extérieure aux machines, est à la charge du Client.</p>
                  </div>

                  {/* Article 11-5 */}
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-purple-800 mb-4">Article 11-5 – Réception</h4>
                    <p className="mb-3">Les réclamations sur le vice apparent ou sur la non-conformité du Matériel livré doivent être formulées par écrit dans les <strong>sept jours</strong> de la réception des produits.</p>
                    <p className="mb-3">Il appartient au Client de fournir toutes justifications quant à la réalité des vices ou anomalies constatés. Le Client doit laisser à Solution logique toute facilité pour procéder à la constatation de ce vice et pour y porter remède. Le Client s'abstient d'intervenir lui-même ou de faire intervenir un tiers à cette fin.</p>
                  </div>

                  {/* Article 11-6 */}
                  <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-indigo-800 mb-4">Article 11-6 – Garanties</h4>
                    <p className="mb-3">Le matériel vendu est garanti par le constructeur ou l'éditeur suivant des modalités qui leur sont propres.</p>
                    <p className="mb-3">De plus, le Matériel bénéficie de la garantie légale pour vices cachés à la condition que le Client agisse dans un bref délai. Cette garantie porte sur les pièces et la main d'œuvre pour les articles retournés au constructeur et/ou au distributeur. Les frais de transport étant à la charge du Client, les envois en port dû ou contre remboursement sont refusés.</p>
                    <p className="mb-3">L'utilisation du Matériel fourni se fait sous la responsabilité exclusive du Client à qui il appartient d'assumer la direction et la surveillance dudit Matériel. Sont exclus de la garantie tous dommages résultant notamment d'une mauvaise utilisation, d'une utilisation abusive des articles ou négligence du Client, de la foudre, du non-respect des instructions d'installation ou d'exploitation, d'une intervention effectuée sur les articles par un tiers non agréé expressément par le constructeur ou/et le fournisseur ainsi que tous dommages résultant de l'emploi de fournitures non agrées, de la force majeure ou du fait de tiers.</p>
                    <p className="mb-3">Toute réclamation selon laquelle le Matériel serait défectueux quant à leur matière ou à leur fabrication devra être faite par écrit sans délai auprès de Solution logique par le Client et inclure toutes explications nécessaires.</p>
                    <p className="mb-3">Le Client dégage Solution logique de toute responsabilité en cas de perte ou dommage résultant de l'emploi de données, résultats, programmes ou documents mis à sa disposition. A l'égard des tiers, le Client fera son affaire personnelle de toute réclamation.</p>
                    <p>Les accessoires, batteries et consommables ne sont pas couverts par une garantie.</p>
                  </div>

                  {/* Article 11-7 */}
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-red-800 mb-4">Article 11-7 – Risques</h4>
                    <p className="mb-3">Le Matériel, même expédié franco, voyage aux risques et périls du Client auquel il appartient de vérifier l'état des colis et de la marchandise à la livraison et d'exercer, s'il y a lieu, tous recours contre le transporteur. Les marchandises ne sont assurées que sur demande expresse du Client.</p>
                    <p className="mb-3">La signature du bon de mise à disposition par le Client est une reconnaissance par ce dernier de la machine livrée et les risques passent à sa charge, tant en ce qui concerne les sinistres subis par le Matériel qu'en ce qui concerne les dommages causés à des personnes ou d'autres biens. Le Client contracte, s'il le désire, les polices d'assurances nécessaires sans recours possible contre le fournisseur, pour quelque cause et risque que ce soit.</p>
                    <p className="mb-3">Solution logique ne pourra être recherché si l'exécution du présent contrat est retardée ou empêchée en raison de conflits sociaux, cas fortuit ou de force majeure. Au cas où sa responsabilité serait retenue par suite de l'inexécution ou de la mauvaise exécution du présent contrat ou pour toute autre cause, le total des indemnisations ne pourra, de convention expresse, dépasser un montant cumulé égal à 10% du prix de la machine ou du programme, qui est à l'origine du dommage.</p>
                    <p className="mb-3">L'utilisation du Matériel et des logiciels livrés par Solution logique est faite sous la seule responsabilité du Client qui déclare ici renoncer expressément à tout recours contre Solution logique pour quelque cause, motif ou risque que ce soit, et les garantit contre tout action éventuelle intentée par des tiers, Solution logique n'étant tenu qu'à la fourniture des moyens.</p>
                    <p>Solution logique ne saurait être poursuivie pour tout vice provenant du système d'exploitation ou de logiciels de base non développés par Solution logique, pouvant entraîner un mauvais fonctionnement des logiciels ou du matériel fourni.</p>
                  </div>
                </div>
              </div>

              {/* Article 12 */}
              <div id="article12" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">12</span>
                  Article 12 – Loi informatique et libertés
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Conformément à la loi informatique et liberté du 6 janvier 1978, le Client dispose d'un droit d'accès et de rectification aux données le concernant. Ces données ont pu être communiquées à des entreprises tierces et le Client peut donc être amené à recevoir de ces sociétés des propositions commerciales.</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Droit d'opposition</h4>
                    <p className="text-blue-700">S'il ne le souhaite pas, il lui suffit d'écrire à Solution logique en indiquant ses noms, prénoms, adresse, adresse email afin que Solution logique puisse faire le nécessaire dans les meilleurs délais.</p>
                  </div>
                </div>
              </div>

              {/* Article 13 */}
              <div id="article13" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">13</span>
                  Article 13 – Territoire
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>L'ensemble des Prestations sont uniquement proposés dans la <strong>région Rhône-Alpes</strong>.</p>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">En cas de changement de localisation géographique du Client</h4>
                    <p className="text-amber-700 mb-3">Solution logique peut choisir :</p>
                    <ul className="list-disc list-inside text-amber-700 space-y-2">
                      <li>De ne pas fournir la Prestation payée par le Client et de le rembourser de toutes les prestations non réalisées,</li>
                      <li>De réaliser les Prestations souscrites par le Client malgré le changement de localisation et ce au même tarif,</li>
                      <li>De proposer un nouveau tarif au Client compte tenu de son nouvel emplacement géographique et des déplacements que cela occasionne, le Client est alors libre d'accepter ou de refuser.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Article 14 */}
              <div id="article14" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">14</span>
                  Article 14 – Nullité
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Si l'une des clauses des Conditions Générales de Vente et de Prestations de Services s'avère nulle, la validité des autres clauses ne serait pas remise en cause.</p>
                  <p>Solution logique s'engage alors à remplacer la clause ainsi annulée dans les meilleurs délais et ce en respectant l'économie du contrat.</p>
                </div>
              </div>

              {/* Article 15 */}
              <div id="article15" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">15</span>
                  Article 15 – Loi applicable
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>De convention expresse, les Conditions Générales de Vente et de Prestations de Services sont gouvernés par le <strong>droit français</strong>.</p>
                  <p>Ces Conditions Générales de Vente et de Prestations de Services ne doivent pas être interprétées comme limitant les droits statutaires du Client et rien ne limite les droits statutaires du Client en tant que consommateur.</p>
                </div>
              </div>

              {/* Article 16 */}
              <div id="article16" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">16</span>
                  Article 16 – Tribunaux compétents et règlements des différends
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-bold text-purple-800 mb-2">Juridiction compétente</h4>
                    <p className="text-purple-700">En cas d'échec d'une procédure amiable, tout litige découlant des présentes conditions est de la compétence exclusive du <strong>Tribunal de Commerce d'Annecy</strong>.</p>
                  </div>
                </div>
              </div>

              {/* Article 17 */}
              <div id="article17" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">17</span>
                  Article 17 – Règlement des litiges
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>En cas de contestation sur ou à l'occasion d'une livraison ou de son règlement, les tribunaux d'inscription au Registre du Commerce sont seuls compétents, quelles que soient les conditions de vente et le mode de paiement acceptés ; toute clause contraire figurant éventuellement dans les conditions générales de nos clients reste sans effet.</p>

                  <p>L'acceptation d'un règlement par chèque, mandat, virement, traite ou autre effet sur une autre ville que le siège ne peut constituer dérogation de cette clause essentielle d'attribution de juridiction.</p>

                  <p>Toute convention particulière ou toute dérogation à l'une des présentes conditions générales doit faire de notre part l'objet de stipulations spéciales écrites ; toutes les conditions générales définies qui ne seraient pas expressément modifiées ou abrogées par ces stipulations spéciales, conservent leur plein et entier effet.</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Accès aux CGV</h4>
                    <p className="text-blue-700">Les conditions générales complètes sont accessibles et consultables sur le site internet de Solution Logique : <a href="http://solution-logique.fr" className="underline">http://solution-logique.fr</a> modifiables sans préavis.</p>
                  </div>
                </div>
              </div>

              {/* Footer de contact */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Des questions sur nos CGV ?</h3>
                <p className="mb-6 text-blue-100">
                  Notre équipe est à votre disposition pour toute clarification concernant nos conditions générales de vente.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
                    <span className="text-sm">475 route des Vernes, 74370 Pringy</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
                    <span className="text-sm">Contactez-nous pour plus d'informations</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConditionsGeneralesVente;
