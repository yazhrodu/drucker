import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto py-8 px-4">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Politique de Confidentialité</h1>
          <p className="text-xl text-muted-foreground">Drucker5 - Les principes d'efficacité</p>
          <p className="mt-4 text-sm text-muted-foreground">Dernière mise à jour : 21 mai 2025</p>
        </header>

        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-lg shadow-sm p-6 mb-10">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Aucune collecte de données</h2>
              <p className="mb-3">
                Drucker5 est une application éducative qui présente les cinq principes d'efficacité de Peter Drucker et
                propose un programme d'application sur 30 jours. Notre application est conçue pour respecter entièrement
                votre vie privée.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md border border-green-200 dark:border-green-800 my-6">
                <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">
                  Notre engagement envers votre confidentialité
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Aucune collecte de données personnelles</strong> - Nous ne collectons, ne stockons ni ne
                    traitons aucune donnée personnelle vous concernant.
                  </li>
                  <li>
                    <strong>Aucun partage avec des tiers</strong> - Puisque nous ne collectons aucune donnée, il n'y a
                    rien à partager avec des tiers.
                  </li>
                  <li>
                    <strong>Aucune publicité</strong> - Notre application ne contient aucune publicité et n'utilise
                    aucun tracker publicitaire.
                  </li>
                  <li>
                    <strong>Aucun cookie</strong> - Nous n'utilisons pas de cookies ni de technologies similaires pour
                    vous suivre.
                  </li>
                </ul>
              </div>
              <p>
                Toutes les fonctionnalités de l'application fonctionnent localement sur votre appareil. Votre
                progression dans le programme de 30 jours et vos préférences sont stockées uniquement sur votre appareil
                et ne sont jamais transmises à nos serveurs ou à des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Pourquoi cette politique de confidentialité ?</h2>
              <p>
                Même si nous ne collectons aucune donnée, nous tenons à être transparents sur nos pratiques en matière
                de confidentialité. Cette politique existe pour vous assurer que votre vie privée est respectée lorsque
                vous utilisez notre application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Modifications de cette politique</h2>
              <p>
                Si nos pratiques en matière de confidentialité devaient changer à l'avenir, nous mettrions à jour cette
                politique et vous en informerions clairement avant de mettre en œuvre tout changement qui impliquerait
                la collecte de données personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Nous contacter</h2>
              <p className="mb-3">
                Si vous avez des questions concernant cette politique de confidentialité ou l'application, vous pouvez
                nous contacter à l'adresse suivante :
              </p>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-md">
                <p>Email : doctor974damien@gmail.com</p>
              </div>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700">
            <Link href="/" className="text-primary hover:underline">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
