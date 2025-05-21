import type React from "react"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <title>Drucker5 - Les principes d'efficacité</title>
        <meta name="description" content="Maîtrisez les 5 principes d'efficacité de Drucker en 30 jours." />
      </head>
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
