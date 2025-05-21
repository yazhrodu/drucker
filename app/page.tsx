import { MainContent } from "@/components/main-content"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto py-8 px-4">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Drucker5</h1>
          <p className="text-xl text-muted-foreground">Les 5 Principes d'Efficacité</p>
          <p className="mt-4 text-sm text-muted-foreground">Temps de lecture estimé: 15 minutes</p>
        </header>
        <MainContent />
        <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700 text-center text-sm text-muted-foreground">
          <div>
            <Link href="/confidentialite" className="hover:underline">
              Politique de confidentialité
            </Link>
          </div>
          <p className="mt-2">© 2025 Drucker5. Tous droits réservés.</p>
        </footer>
      </div>
    </main>
  )
}
