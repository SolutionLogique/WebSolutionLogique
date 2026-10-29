import React from "react";
import Link from "next/link";

/* Politique de confidentialite (RGPD, art. 13).

   Elle decrit ce que le site fait reellement, lu dans le code le 29/10/2026 :
   - formulaire de /contact (app/contact/page.tsx) et demande de rappel
     (components/Modal/CallbackModal.tsx) : envoi par lib/utils.ts getApiUrl()
     vers les fonctions app/api/contact et app/api/callback, deployees chez
     Vercel (solutionlogique.vercel.app, region cdg1 de vercel.json), qui
     envoient un e-mail par Resend a site@solution-logique.fr ; l'adresse IP
     sert a limiter les envois (lib/security.ts, lib/monitoring.ts) ;
   - carte Google Maps en iframe sur /contact ;
   - polices auto-hebergees (next/font), aucun outil de mesure d'audience,
     aucun cookie depose par le site lui-meme ;
   - journaux d'acces de l'hebergeur OVH.
   A mettre a jour a chaque changement de ces points. */

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 font-display text-h3 font-semibold text-sand-900">{titre}</h2>
      <div className="space-y-3 leading-relaxed text-sand-600">{children}</div>
    </div>
  );
}

export default function Confidentialite() {
  return (
    <>
      <section className="border-b border-sand-200 bg-sand-50">
        <div className="mx-auto max-w-3xl px-gutter py-14 lg:py-16">
          <h1 className="mb-4 font-display text-h1 font-bold text-sand-900">
            Politique de confidentialité
          </h1>
          <p className="text-lg leading-relaxed text-sand-600">
            Ce que ce site collecte sur vous, pourquoi, qui le reçoit, et comment exercer vos droits.
          </p>
        </div>
      </section>

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-3xl space-y-12 px-gutter">
          <Bloc titre="Responsable du traitement">
            <p>
              Solution Logique, SAS, 475 route des Vernes, Pringy, 74370 Annecy (RCS Annecy
              379 868 540). Pour toute question sur vos données :{" "}
              <a href="mailto:site@solution-logique.fr" className="font-medium text-primary-600 hover:underline">
                site@solution-logique.fr
              </a>{" "}
              ou 04 50 64 02 33.
            </p>
          </Bloc>

          <Bloc titre="Ce que le site collecte">
            <p>
              <strong className="text-sand-900">Le formulaire de contact</strong> (page Contact) :
              votre nom, votre adresse e-mail, votre message et, si vous le donnez, votre numéro
              de téléphone.
            </p>
            <p>
              <strong className="text-sand-900">La demande de rappel</strong> : votre numéro de
              téléphone.
            </p>
            <p>
              Dans les deux cas, votre adresse IP est utilisée au moment de l&apos;envoi pour
              limiter le nombre de messages et bloquer les robots qui envoient du spam ; elle peut
              figurer dans les journaux de sécurité du service d&apos;envoi.
            </p>
            <p>
              <strong className="text-sand-900">La consultation du site</strong> : comme tout
              serveur web, celui de notre hébergeur enregistre dans ses journaux techniques
              l&apos;adresse IP, la date, la page demandée, la page de provenance et le type de
              navigateur. Ces journaux servent au fonctionnement et à la sécurité du site.
            </p>
            <p>
              Le site n&apos;utilise aucun outil de mesure d&apos;audience ni de publicité, et ne
              dépose lui-même aucun cookie. Ses polices de caractères sont hébergées sur le site,
              sans appel à un service extérieur.
            </p>
          </Bloc>

          <Bloc titre="Pourquoi">
            <p>
              Uniquement pour répondre à votre demande (information, devis, rappel, inscription à
              une formation) et pour suivre la relation qui peut en découler. Base légale : les
              mesures précontractuelles prises à votre demande (article 6.1.b du RGPD).
            </p>
          </Bloc>

          <Bloc titre="Qui les reçoit">
            <p>
              Votre message arrive par e-mail dans la boîte site@solution-logique.fr et n&apos;est lu
              que par l&apos;équipe de Solution Logique. Pour l&apos;acheminer, nous faisons appel à
              des prestataires techniques :
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-sand-900">Vercel</strong>, qui exécute le service
                d&apos;envoi des formulaires ;
              </li>
              <li>
                <strong className="text-sand-900">Resend</strong>, qui transmet l&apos;e-mail
                jusqu&apos;à notre boîte ;
              </li>
              <li>
                <strong className="text-sand-900">OVH</strong>, qui héberge le site et ses journaux
                techniques.
              </li>
            </ul>
            <p>
              Vercel et Resend sont des sociétés établies aux États-Unis : les données d&apos;un
              formulaire peuvent donc être traitées hors de l&apos;Union européenne.
            </p>
          </Bloc>

          <Bloc titre="Combien de temps">
            <p>
              Les messages reçus sont conservés dans notre messagerie le temps de traiter votre
              demande et de suivre la relation commerciale qui peut en découler. Vous pouvez à tout
              moment demander leur suppression. Les journaux techniques sont conservés par
              l&apos;hébergeur pour la durée qu&apos;il fixe.
            </p>
          </Bloc>

          <Bloc titre="La carte de la page Contact">
            <p>
              La page Contact affiche une carte Google Maps, chargée depuis les serveurs de Google.
              En l&apos;affichant, votre navigateur transmet votre adresse IP à Google, qui peut
              aussi déposer ses propres cookies, selon sa{" "}
              <a
                href="https://policies.google.com/privacy?hl=fr"
                className="font-medium text-primary-600 hover:underline"
                rel="noopener noreferrer"
              >
                politique de confidentialité
              </a>
              .
            </p>
          </Bloc>

          <Bloc titre="Les liens de télémaintenance">
            <p>
              Sur la page Télémaintenance, le code de session que vous saisissez vous conduit vers le
              service NinjaOne de Solution Logique (solution-logique.rmmservice.eu), et le bouton
              RustDesk télécharge le logiciel depuis ce site. Rien n&apos;est envoyé tant que vous
              n&apos;avez pas cliqué.
            </p>
          </Bloc>

          <Bloc titre="Vos droits">
            <p>
              Vous pouvez accéder à vos données, les faire rectifier ou effacer, vous opposer à
              leur traitement ou en demander la limitation, en écrivant à{" "}
              <a href="mailto:site@solution-logique.fr" className="font-medium text-primary-600 hover:underline">
                site@solution-logique.fr
              </a>{" "}
              ou à l&apos;adresse postale ci-dessus. Si vous estimez que vos droits ne sont pas
              respectés, vous pouvez saisir la CNIL (
              <a href="https://www.cnil.fr" className="font-medium text-primary-600 hover:underline" rel="noopener noreferrer">
                www.cnil.fr
              </a>
              ).
            </p>
            <p>
              Voir aussi les{" "}
              <Link href="/mentions-legales" className="font-medium text-primary-600 hover:underline">
                mentions légales
              </Link>
              .
            </p>
          </Bloc>
        </div>
      </section>
    </>
  );
}
