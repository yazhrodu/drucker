"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { EfficiencyTips } from "@/components/efficiency-tips"
import { ApplicationCalendar } from "@/components/application-calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar, FileText, ListChecks } from "lucide-react"
import { TableOfContents } from "@/components/table-of-contents"

export function MainContent() {
  const [activeTab, setActiveTab] = useState("principles")

  return (
    <div className="space-y-6">
      <TableOfContents onTabChange={setActiveTab} />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 w-full mb-8">
          <TabsTrigger value="principles" className="flex items-center gap-2">
            <ListChecks className="h-4 w-4" />
            <span>Principes</span>
          </TabsTrigger>
          <TabsTrigger value="summary" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Résumé</span>
          </TabsTrigger>
          <TabsTrigger value="calendar" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Calendrier</span>
          </TabsTrigger>
          <TabsTrigger value="about" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>À propos</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="principles" className="mt-0">
          <EfficiencyTips />
        </TabsContent>

        <TabsContent value="summary" className="mt-0">
          <Card id="summary" className="bg-slate-50 dark:bg-slate-900">
            <CardHeader>
              <CardTitle>Résumé des 5 principes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal pl-5 space-y-4">
                <li className="font-medium">
                  <span className="text-amber-600 dark:text-amber-400">Ignorez vos faiblesses</span> - C'est une perte
                  de temps de les améliorer. Identifiez vos points forts et rendez-les productifs. Aidez les personnes
                  qui vous entourent à se concentrer sur leurs points forts.
                </li>
                <li className="font-medium">
                  <span className="text-blue-600 dark:text-blue-400">Gérez votre temps</span> - Premièrement, faites un
                  suivi régulier de votre temps afin d'identifier les pertes de temps. Deuxièmement, éliminez les pertes
                  de temps et déléguez autant que possible. Troisièmement, consolidez et créez des blocs de temps
                  importants pour les tâches qui comptent vraiment.
                </li>
                <li className="font-medium">
                  <span className="text-red-600 dark:text-red-400">Commencez par le début</span> - Ignorez la deuxième
                  chose, concentrez-vous sur la première chose et faites-la bien. Allez-y lentement et prévoyez une
                  marge de sécurité. Nettoyez régulièrement votre liste de choses à faire pour faire de la place à de
                  nouvelles tâches et opportunités. Choisissez l'avenir, pas le passé.
                </li>
                <li className="font-medium">
                  <span className="text-green-600 dark:text-green-400">Concentrez-vous sur la contribution</span> -
                  Posez-vous la question : quelle est ma contribution qui aura un impact significatif sur les résultats
                  ? Si vous ne vous posez pas cette question, vous risquez de cibler des tâches à faible impact.
                  N'oubliez pas que la valeur réside dans les résultats obtenus et non dans la quantité d'effort fourni.
                </li>
                <li className="font-medium">
                  <span className="text-purple-600 dark:text-purple-400">Prenez des décisions stratégiques</span> -
                  Prenez des décisions peu nombreuses mais stratégiques qui vous permettront de prendre en compte la
                  plupart des petites décisions. Dans la mesure du possible, discutez vos décisions avec d'autres
                  personnes et demandez-leur leur avis.
                </li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="mt-0">
          <Card id="calendar">
            <CardHeader>
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-2" />
                <CardTitle>Calendrier d'application sur 30 jours</CardTitle>
              </div>
              <CardDescription>
                Un programme progressif pour mettre en pratique les 5 principes d'efficacité
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ApplicationCalendar />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about" className="mt-0">
          <Card id="about">
            <CardHeader>
              <CardTitle>À propos de Peter Drucker</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="float-right ml-4 mb-4 w-1/3 rounded-md overflow-hidden">
                <img src="/peter-drucker-portrait.png" alt="Peter Drucker" className="w-full h-auto rounded-md" />
                <p className="text-xs text-center mt-1 text-muted-foreground">Peter Drucker (1909-2005)</p>
              </div>
              <p>
                Peter Drucker est considéré comme le père du management moderne. Bill Gates l'a qualifié de meilleur
                expert en gestion du siècle dernier.
              </p>
              <p>
                Il a coaché des chefs d'entreprise influents dans des sociétés renommées telles que Procter & Gamble,
                IBM, General Electric et Intel.
              </p>
              <p>
                En 1966, il a écrit "The Effective Executive", combinant toutes ses connaissances en matière
                d'efficacité, de gestion du temps et de performance maximale.
              </p>
              <p>
                Né en Autriche en 1909, Drucker a fui le nazisme pour s'installer aux États-Unis où il a enseigné, écrit
                et conseillé pendant plus de six décennies. Il a publié 39 livres et d'innombrables articles,
                transformant profondément notre compréhension du management.
              </p>
              <p>
                Sa vision du management comme discipline humaniste plutôt que purement technique a révolutionné la façon
                dont les organisations sont dirigées. Il a été le premier à considérer les travailleurs comme des
                "travailleurs du savoir" dont la valeur réside dans leur capacité à penser et à innover.
              </p>
              <p className="font-medium">
                Ces cinq principes d'efficacité sont tirés de son livre "The Effective Executive" et peuvent transformer
                votre productivité et votre impact professionnel.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
