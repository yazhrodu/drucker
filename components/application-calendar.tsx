"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Brain, Clock, Target, Sparkles, Lightbulb, X, Info, Calendar, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export function ApplicationCalendar() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [activeWeek, setActiveWeek] = useState("week-1")
  const [activeView, setActiveView] = useState("weekly")

  // Données du programme
  const programData = {
    weeks: [
      {
        id: "week-1",
        title: "Semaine 1: Comprendre et observer",
        description:
          "Cette première semaine est consacrée à l'observation et à la collecte d'informations sur vos forces et votre utilisation du temps.",
        days: [1, 2, 3, 4, 5, 6, 7],
      },
      {
        id: "week-2",
        title: "Semaine 2: Premières applications",
        description:
          "Mettez en pratique les principes avec des actions concrètes et commencez à transformer vos habitudes de travail.",
        days: [8, 9, 10, 11, 12, 13, 14],
      },
      {
        id: "week-3",
        title: "Semaine 3: Approfondissement",
        description: "Approfondissez votre pratique des principes et intégrez-les dans votre quotidien professionnel.",
        days: [15, 16, 17, 18, 19, 20, 21],
      },
      {
        id: "week-4",
        title: "Semaine 4: Intégration et habitudes",
        description: "Consolidez vos nouvelles habitudes et préparez-vous à maintenir ces pratiques sur le long terme.",
        days: [22, 23, 24, 25, 26, 27, 28, 29, 30],
      },
    ],
    days: [
      {
        day: 1,
        principle: 1,
        icon: <Brain className="h-4 w-4" />,
        color: "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200",
        task: "Identifiez 3 activités où vous excellez naturellement",
        details: {
          description:
            "Prenez le temps d'identifier trois activités dans lesquelles vous excellez naturellement, sans effort particulier.",
          instructions: [
            "Réfléchissez aux tâches que vous accomplissez facilement alors que d'autres les trouvent difficiles",
            "Pensez aux activités qui vous donnent de l'énergie plutôt que d'en consommer",
            "Considérez les compliments que vous recevez régulièrement",
          ],
          example:
            "Marie a identifié trois forces : sa capacité à synthétiser des informations complexes, son aisance à parler en public, et sa facilité à établir des relations de confiance rapidement.",
          tips: "Notez ces forces dans un journal et réfléchissez à la façon dont vous pourriez les utiliser davantage dans votre travail quotidien.",
        },
      },
      {
        day: 2,
        principle: 1,
        icon: <Brain className="h-4 w-4" />,
        color: "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200",
        task: "Demandez à 3 personnes quelles sont vos forces selon elles",
        details: {
          description:
            "Notre perception de nous-mêmes est souvent biaisée. Les autres peuvent voir des forces que nous ne reconnaissons pas.",
          instructions: [
            "Choisissez 3 personnes qui vous connaissent bien dans différents contextes (professionnel, personnel)",
            "Demandez-leur : 'Selon vous, quelles sont mes 3 plus grandes forces ?'",
            "Notez leurs réponses sans les contester",
          ],
          example:
            "Thomas a été surpris d'apprendre que ses collègues valorisaient sa patience et sa capacité à résoudre les conflits, des qualités qu'il n'avait jamais considérées comme des forces.",
          tips: "Comparez ces réponses avec votre propre liste. Les points communs sont probablement vos forces les plus évidentes.",
        },
      },
      {
        day: 3,
        principle: 2,
        icon: <Clock className="h-4 w-4" />,
        color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        task: "Commencez à tenir un journal de temps (jour 1/3)",
        details: {
          description: "La première étape pour gérer votre temps est de savoir comment vous l'utilisez réellement.",
          instructions: [
            "Créez un tableau avec des intervalles de 30 minutes",
            "Notez chaque activité immédiatement après l'avoir réalisée (pas à la fin de la journée)",
            "Soyez précis et honnête, même pour les activités comme 'vérifier les réseaux sociaux'",
          ],
          example:
            "8h00-8h30 : Réponse aux emails, 8h30-9h00 : Réunion d'équipe, 9h00-9h15 : Pause café et discussion informelle...",
          tips: "Utilisez une application comme Toggl ou simplement un carnet. L'important est de noter les activités en temps réel, pas de mémoire.",
        },
      },
      {
        day: 4,
        principle: 2,
        icon: <Clock className="h-4 w-4" />,
        color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        task: "Continuez votre journal de temps (jour 2/3)",
        details: {
          description: "Poursuivez le suivi de votre temps pour la deuxième journée.",
          instructions: [
            "Continuez à noter chaque activité avec le même niveau de détail",
            "Essayez d'être encore plus précis sur les interruptions et les transitions",
            "Notez votre niveau d'énergie (haut/moyen/bas) pour chaque période",
          ],
          example:
            "14h00-14h45 : Travail sur le rapport (énergie: haute), 14h45-15h00 : Interruption - appel d'un collègue (énergie: moyenne)...",
          tips: "Notez également les moments où vous êtes le plus productif et ceux où vous avez tendance à procrastiner.",
        },
      },
      {
        day: 5,
        principle: 2,
        icon: <Clock className="h-4 w-4" />,
        color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        task: "Terminez votre journal de temps (jour 3/3)",
        details: {
          description: "Complétez la dernière journée de votre journal de temps.",
          instructions: [
            "Finalisez votre suivi avec le même niveau de détail",
            "Notez également les activités que vous avez reportées ou évitées",
            "Essayez d'identifier les schémas récurrents sur ces trois jours",
          ],
          example:
            "Sophie a remarqué qu'elle passait systématiquement 45 minutes chaque matin à répondre à des emails qui auraient pu être traités en lot l'après-midi.",
          tips: "Ne jugez pas vos habitudes pour l'instant, contentez-vous d'observer et de documenter.",
        },
      },
      {
        day: 6,
        principle: 2,
        icon: <Clock className="h-4 w-4" />,
        color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        task: "Analysez votre journal de temps et identifiez les pertes de temps",
        details: {
          description:
            "Maintenant que vous avez collecté des données sur trois jours, analysez-les pour identifier les schémas et les pertes de temps.",
          instructions: [
            "Catégorisez vos activités (travail productif, réunions, emails, distractions, etc.)",
            "Calculez le temps total passé dans chaque catégorie",
            "Identifiez au moins 3 activités qui consomment du temps sans produire de résultats significatifs",
          ],
          example:
            "Après analyse, Marc a découvert qu'il passait 2h30 par jour en réunions dont la moitié n'exigeait pas vraiment sa présence.",
          tips: "Posez-vous la question : 'Si j'arrêtais complètement cette activité, quelles seraient les conséquences ?'",
        },
      },
      {
        day: 7,
        principle: 3,
        icon: <Target className="h-4 w-4" />,
        color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
        task: "Créez votre première liste de tâches à ne PAS faire",
        details: {
          description:
            "Plutôt que de vous concentrer sur ce que vous devez faire, identifiez ce que vous devez arrêter de faire.",
          instructions: [
            "Basez-vous sur l'analyse de votre journal de temps",
            "Listez au moins 5 activités que vous allez délibérément arrêter ou limiter drastiquement",
            "Pour chaque activité, notez ce que vous ferez à la place",
          ],
          example:
            "Liste de Julie : 1. Ne plus vérifier mes emails toutes les 15 minutes (à la place : vérifier 3 fois par jour à heures fixes), 2. Ne plus accepter de réunions sans ordre du jour clair...",
          tips: "Affichez cette liste bien en vue et consultez-la chaque fois que vous êtes tenté de retomber dans vos anciennes habitudes.",
        },
      },
      {
        day: 8,
        principle: 3,
        icon: <Target className="h-4 w-4" />,
        color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
        task: "Identifiez LA tâche la plus importante de la journée et faites-la en premier",
        details: {
          description:
            "Concentrez-vous sur l'identification et l'exécution de la tâche la plus importante de votre journée.",
          instructions: [
            "Avant de commencer votre journée (idéalement la veille), identifiez LA tâche qui aura le plus d'impact",
            "Bloquez du temps en début de journée pour cette tâche, avant de consulter vos emails ou messages",
            "Éliminez toutes les distractions pendant ce temps dédié",
          ],
          example:
            "Carlos a identifié la rédaction d'une proposition commerciale comme sa tâche la plus importante. Il a bloqué 8h-10h pour s'y consacrer, téléphone en mode avion et notifications désactivées.",
          tips: "Si vous n'arrivez pas à déterminer quelle tâche est la plus importante, demandez-vous : 'Quelle est la tâche qui, une fois accomplie, rendrait le reste de ma journée plus facile ou moins important ?'",
        },
      },
      {
        day: 9,
        principle: 3,
        icon: <Target className="h-4 w-4" />,
        color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
        task: "Bloquez 2 heures ininterrompues pour une tâche importante",
        details: {
          description: "Expérimentez avec un bloc de temps conséquent dédié à une seule tâche importante.",
          instructions: [
            "Choisissez une tâche qui nécessite de la réflexion profonde ou de la créativité",
            "Bloquez 2 heures dans votre calendrier et communiquez votre indisponibilité",
            "Éliminez toutes les sources de distraction (téléphone, emails, notifications)",
          ],
          example:
            "Léa a bloqué 14h-16h pour travailler sur la stratégie marketing du prochain trimestre. Elle a mis un message d'absence sur sa messagerie et s'est installée dans une salle de réunion isolée.",
          tips: "Préparez tout ce dont vous aurez besoin avant de commencer pour éviter les interruptions. Si possible, changez d'environnement pour signaler à votre cerveau que c'est un moment différent.",
        },
      },
      {
        day: 10,
        principle: 4,
        icon: <Sparkles className="h-4 w-4" />,
        color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
        task: "Pour chaque tâche, définissez clairement le résultat attendu",
        details: {
          description: "Concentrez-vous sur les résultats plutôt que sur les activités.",
          instructions: [
            "Pour chaque tâche de votre liste, reformulez-la en termes de résultat attendu",
            "Soyez précis sur ce à quoi ressemble le 'travail terminé'",
            "Définissez des critères mesurables de réussite",
          ],
          example:
            "Au lieu de 'Travailler sur la présentation', Alexandre a écrit 'Finaliser les 10 diapositives de la présentation client avec tous les graphiques et notes explicatives'.",
          tips: "Demandez-vous : 'Comment saurai-je que cette tâche est vraiment terminée ? Quel résultat concret aura été produit ?'",
        },
      },
      {
        day: 11,
        principle: 4,
        icon: <Sparkles className="h-4 w-4" />,
        color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
        task: "Identifiez une tâche à fort impact que vous reportez",
        details: {
          description: "Nous reportons souvent les tâches qui pourraient avoir le plus d'impact.",
          instructions: [
            "Identifiez une tâche importante que vous reportez depuis longtemps",
            "Analysez pourquoi vous la reportez (peur, complexité, manque de clarté)",
            "Décomposez-la en étapes plus petites et définissez la première action concrète",
          ],
          example:
            "Mathieu reportait depuis des mois la refonte du système de suivi client. Il a réalisé que c'était par peur de l'ampleur du projet. Il a défini comme première étape : 'Lister les 5 principales fonctionnalités nécessaires'.",
          tips: "Parfois, nous procrastinons sur les tâches les plus importantes précisément parce qu'elles sont importantes et que nous craignons de ne pas être à la hauteur.",
        },
      },
      {
        day: 12,
        principle: 5,
        icon: <Lightbulb className="h-4 w-4" />,
        color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
        task: "Identifiez une décision stratégique à prendre",
        details: {
          description:
            "Concentrez-vous sur l'identification d'une décision stratégique qui simplifiera de nombreuses petites décisions.",
          instructions: [
            "Listez les décisions récurrentes qui vous prennent du temps",
            "Identifiez une décision stratégique qui pourrait éliminer ou simplifier plusieurs de ces décisions",
            "Formulez clairement cette décision sous forme de question",
          ],
          example:
            "Après réflexion, Nathalie a identifié cette décision stratégique : 'Devrions-nous externaliser notre comptabilité pour nous concentrer sur notre cœur de métier ?'",
          tips: "Les décisions stratégiques concernent souvent des questions comme : quoi déléguer, quels projets abandonner, quels processus standardiser, ou quelles règles établir.",
        },
      },
      {
        day: 13,
        principle: 5,
        icon: <Lightbulb className="h-4 w-4" />,
        color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
        task: "Consultez 3 personnes avec des points de vue différents sur cette décision",
        details: {
          description: "Recherchez activement des perspectives diverses pour enrichir votre décision.",
          instructions: [
            "Identifiez 3 personnes ayant des perspectives différentes sur votre décision",
            "Présentez-leur la question sans révéler votre propre opinion",
            "Écoutez attentivement et notez leurs arguments, même ceux qui contredisent votre pensée initiale",
          ],
          example:
            "Pour sa décision d'externalisation, Nathalie a consulté : un collègue favorable à l'externalisation, son directeur financier réticent, et un consultant externe neutre.",
          tips: "Posez des questions ouvertes comme 'Quels facteurs devrais-je considérer ?' plutôt que des questions fermées comme 'Pensez-vous que je devrais faire X ?'",
        },
      },
      {
        day: 14,
        principle: 5,
        icon: <Lightbulb className="h-4 w-4" />,
        color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
        task: "Développez un plan B pour votre décision stratégique",
        details: {
          description: "Préparez-vous à l'échec potentiel de votre première solution.",
          instructions: [
            "Imaginez que votre première solution échoue complètement",
            "Développez un plan B détaillé et réaliste",
            "Identifiez les signes avant-coureurs qui indiqueraient que vous devez passer au plan B",
          ],
          example:
            "Plan B de Nathalie : 'Si l'externalisation ne fonctionne pas après 3 mois, nous embaucherons un comptable à temps partiel et investirons dans un logiciel de comptabilité plus performant.'",
          tips: "Un bon plan B n'est pas une version diluée du plan A, mais une approche alternative qui pourrait fonctionner même si le plan A échoue complètement.",
        },
      },
      {
        day: 15,
        principle: 1,
        icon: <Brain className="h-4 w-4" />,
        color: "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200",
        task: "Réorganisez votre journée pour maximiser l'utilisation de vos forces",
        details: {
          description: "Restructurez votre emploi du temps pour tirer parti de vos forces naturelles.",
          instructions: [
            "Examinez votre emploi du temps typique et identifiez les moments où vous utilisez vos forces",
            "Réorganisez votre journée pour consacrer plus de temps à ces activités",
            "Planifiez les tâches qui exploitent vos forces pendant vos heures de pointe d'énergie",
          ],
          example:
            "David, excellent en analyse mais moins à l'aise en communication, a réorganisé sa journée pour faire ses analyses le matin (quand il est le plus concentré) et ses appels l'après-midi.",
          tips: "Tenez compte également de vos rythmes naturels : êtes-vous plus créatif le matin ? Plus analytique l'après-midi ?",
        },
      },
      {
        day: 16,
        principle: 1,
        icon: <Brain className="h-4 w-4" />,
        color: "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200",
        task: "Identifiez une tâche à déléguer (correspondant à vos faiblesses)",
        details: {
          description: "Libérez du temps en déléguant les tâches qui correspondent à vos faiblesses.",
          instructions: [
            "Identifiez une tâche régulière qui correspond à vos faiblesses",
            "Trouvez quelqu'un dont les forces correspondent à cette tâche",
            "Préparez un plan de délégation clair (quoi, quand, comment, résultats attendus)",
          ],
          example:
            "Isabelle, excellente stratège mais désorganisée, a délégué la gestion de son agenda et le classement de ses documents à son assistant, dont l'organisation est la force principale.",
          tips: "La délégation n'est pas un aveu de faiblesse mais une reconnaissance intelligente que d'autres peuvent faire certaines choses mieux que vous.",
        },
      },
      {
        day: 17,
        principle: 2,
        icon: <Clock className="h-4 w-4" />,
        color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        task: "Créez votre premier bloc de temps de 4 heures",
        details: {
          description: "Expérimentez avec un bloc de temps étendu pour un travail profond.",
          instructions: [
            "Identifiez un projet important qui nécessite une réflexion approfondie",
            "Bloquez 4 heures consécutives dans votre agenda",
            "Préparez votre environnement pour éliminer toutes les distractions",
            "Divisez ces 4 heures en sessions de 50 minutes avec des pauses de 10 minutes",
          ],
          example:
            "Paul a bloqué 8h-12h pour travailler sur la stratégie de développement produit. Il a désactivé son téléphone, fermé sa porte avec une note 'Ne pas déranger', et préparé tous les documents nécessaires la veille.",
          tips: "Ces blocs de temps étendus sont idéaux pour les tâches créatives, stratégiques ou complexes qui nécessitent une immersion totale.",
        },
      },
      {
        day: 18,
        principle: 2,
        icon: <Clock className="h-4 w-4" />,
        color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        task: "Éliminez 3 activités improductives identifiées dans votre journal",
        details: {
          description: "Passez à l'action en éliminant des activités qui consomment du temps sans produire de valeur.",
          instructions: [
            "Sélectionnez 3 activités improductives identifiées dans votre journal de temps",
            "Pour chacune, décidez si vous allez l'éliminer, la déléguer, l'automatiser ou la réduire drastiquement",
            "Mettez en place des barrières pour éviter de retomber dans ces habitudes",
          ],
          example:
            "Activités éliminées par Lucie : 1. Vérification compulsive des emails (remplacée par 3 vérifications programmées par jour), 2. Participation à des réunions d'information générale (remplacée par la lecture des comptes-rendus), 3. Formatage manuel de rapports (automatisé avec un modèle).",
          tips: "Pour chaque activité éliminée, calculez le temps gagné sur une semaine et sur un an pour rester motivé.",
        },
      },
      {
        day: 19,
        principle: 3,
        icon: <Target className="h-4 w-4" />,
        color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
        task: "Prévoyez 50% de temps supplémentaire pour votre tâche principale",
        details: {
          description:
            "Appliquez la loi de Hofstadter : 'Tout prend plus de temps que prévu, même en tenant compte de la loi de Hofstadter.'",
          instructions: [
            "Identifiez votre tâche principale pour demain",
            "Estimez le temps nécessaire pour la compléter",
            "Ajoutez 50% de temps supplémentaire à votre estimation",
            "Bloquez ce temps dans votre agenda et protégez-le",
          ],
          example:
            "Antoine estimait avoir besoin de 2 heures pour finaliser sa présentation. Il a bloqué 3 heures dans son agenda et a effectivement utilisé 2h45, gérant sereinement un problème technique imprévu.",
          tips: "Cette marge de 50% n'est pas du temps perdu - c'est une reconnaissance réaliste des imprévus et de notre tendance à sous-estimer la durée des tâches.",
        },
      },
      {
        day: 20,
        principle: 4,
        icon: <Sparkles className="h-4 w-4" />,
        color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
        task: "Identifiez les 20% d'activités qui produisent 80% de vos résultats",
        details: {
          description: "Appliquez le principe de Pareto (80/20) à votre travail.",
          instructions: [
            "Listez vos principales réalisations des 3 derniers mois",
            "Pour chacune, identifiez les activités spécifiques qui y ont contribué",
            "Analysez quelles activités reviennent le plus souvent dans vos succès",
            "Identifiez les 20% d'activités qui semblent produire 80% de vos résultats",
          ],
          example:
            "En analysant ses ventes, Stéphane a réalisé que 80% de son chiffre d'affaires provenait des appels de suivi personnalisés avec ses clients existants, qui ne représentaient que 20% de son temps de travail.",
          tips: "Une fois ces activités à haute valeur identifiées, votre objectif sera d'y consacrer plus de temps en éliminant ou déléguant les activités à faible valeur.",
        },
      },
      {
        day: 21,
        principle: 5,
        icon: <Lightbulb className="h-4 w-4" />,
        color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
        task: "Prenez votre décision stratégique et commencez à la mettre en œuvre",
        details: {
          description: "Passez à l'action avec votre décision stratégique.",
          instructions: [
            "Synthétisez toutes les informations et perspectives recueillies",
            "Prenez votre décision en vous basant sur les faits et les opinions diverses",
            "Documentez votre décision, vos raisons et les résultats attendus",
            "Identifiez les 3 premières actions concrètes pour mettre en œuvre cette décision",
          ],
          example:
            "Après avoir pesé tous les facteurs, Nathalie a décidé d'externaliser la comptabilité. Ses premières actions : 1. Contacter 3 cabinets recommandés, 2. Préparer un cahier des charges précis, 3. Planifier la transition sur 6 semaines.",
          tips: "Une fois la décision prise, engagez-vous pleinement dans sa mise en œuvre tout en restant attentif aux signaux qui indiqueraient la nécessité de passer au plan B.",
        },
      },
      {
        day: 22,
        principle: 1,
        icon: <Brain className="h-4 w-4" />,
        color: "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200",
        task: "Aidez un collègue à identifier et utiliser ses forces",
        details: {
          description: "Partagez ce que vous avez appris en aidant quelqu'un d'autre à identifier ses forces.",
          instructions: [
            "Choisissez un collègue ou un ami avec qui vous avez une bonne relation",
            "Partagez avec lui ce que vous percevez comme ses forces naturelles",
            "Posez-lui des questions pour l'aider à identifier ses propres forces",
            "Discutez de la façon dont il pourrait utiliser davantage ces forces",
          ],
          example:
            "Claire a organisé un déjeuner avec son collègue Romain et lui a partagé qu'elle admirait sa capacité à simplifier des concepts complexes. Elle lui a demandé s'il avait pensé à créer des formations internes.",
          tips: "Cette conversation peut être transformative pour l'autre personne, car nous avons souvent du mal à reconnaître nos propres forces.",
        },
      },
      {
        day: 23,
        principle: 2,
        icon: <Clock className="h-4 w-4" />,
        color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        task: "Refaites un journal de temps pour voir les améliorations",
        details: {
          description: "Mesurez vos progrès en matière de gestion du temps.",
          instructions: [
            "Tenez à nouveau un journal de temps pendant une journée complète",
            "Utilisez le même format que lors de votre premier journal",
            "Comparez les résultats avec votre premier journal de temps",
            "Identifiez les améliorations et les domaines qui nécessitent encore du travail",
          ],
          example:
            "En comparant ses journaux, François a constaté qu'il avait réduit le temps passé sur les emails de 2h à 45 minutes par jour, et augmenté son temps de travail concentré de 1h à 3h par jour.",
          tips: "Célébrez vos progrès, même s'ils sont modestes. Le changement d'habitudes est progressif.",
        },
      },
      {
        day: 24,
        principle: 3,
        icon: <Target className="h-4 w-4" />,
        color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
        task: "Nettoyez votre liste de tâches et éliminez celles qui ne sont plus pertinentes",
        details: {
          description: "Faites le ménage dans votre liste de tâches pour vous concentrer sur l'essentiel.",
          instructions: [
            "Passez en revue toutes vos listes de tâches (professionnelles et personnelles)",
            "Pour chaque tâche, demandez-vous : 'Est-ce vraiment nécessaire ? Est-ce aligné avec mes priorités ?'",
            "Éliminez sans remords les tâches qui ne sont plus pertinentes ou importantes",
            "Regroupez les tâches similaires pour une exécution plus efficace",
          ],
          example:
            "En révisant sa liste, Émilie a supprimé 12 tâches qui traînaient depuis des mois et n'étaient plus pertinentes. Elle a ressenti un immense soulagement et une clarté renouvelée.",
          tips: "Cette pratique de 'nettoyage' devrait devenir régulière, idéalement mensuelle.",
        },
      },
      {
        day: 25,
        principle: 4,
        icon: <Sparkles className="h-4 w-4" />,
        color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
        task: "Évaluez vos activités de la semaine en fonction de leur impact réel",
        details: {
          description: "Développez l'habitude d'évaluer vos activités en fonction de leur contribution réelle.",
          instructions: [
            "Listez toutes vos activités principales de la semaine écoulée",
            "Pour chacune, évaluez son impact réel sur une échelle de 1 à 10",
            "Identifiez les activités à faible impact que vous pourriez réduire ou éliminer",
            "Planifiez comment augmenter le temps consacré aux activités à fort impact",
          ],
          example:
            "En évaluant sa semaine, Vincent a réalisé que sa participation à un comité de pilotage (4h) avait un impact de 2/10, tandis que sa session de coaching avec un membre de son équipe (1h) avait un impact de 9/10.",
          tips: "L'impact n'est pas toujours immédiatement visible. Certaines activités, comme le mentorat ou la réflexion stratégique, ont un impact à long terme qui peut être difficile à mesurer.",
        },
      },
      {
        day: 26,
        principle: 5,
        icon: <Lightbulb className="h-4 w-4" />,
        color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
        task: "Identifiez votre prochaine décision stratégique",
        details: {
          description: "Continuez à développer votre capacité à prendre des décisions stratégiques.",
          instructions: [
            "Réfléchissez aux domaines de votre vie professionnelle ou personnelle qui bénéficieraient d'une décision stratégique",
            "Identifiez une nouvelle décision stratégique à explorer",
            "Formulez-la clairement sous forme de question",
            "Planifiez comment vous allez recueillir des perspectives diverses sur cette question",
          ],
          example:
            "Après avoir résolu sa question d'externalisation, Nathalie a identifié sa prochaine décision stratégique : 'Devrions-nous nous concentrer sur l'expansion géographique ou sur le développement de nouveaux produits pour notre croissance ?'",
          tips: "Les meilleures décisions stratégiques sont celles qui simplifient de nombreuses décisions futures et créent un cadre clair pour l'action.",
        },
      },
      {
        day: 27,
        principle: 0,
        icon: null,
        color: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200",
        task: "Révisez vos progrès sur les 5 principes",
        details: {
          description: "Faites le point sur vos progrès dans l'application des 5 principes d'efficacité.",
          instructions: [
            "Pour chacun des 5 principes, notez vos principales réalisations",
            "Évaluez votre niveau d'application actuel sur une échelle de 1 à 10",
            "Identifiez les obstacles persistants pour chaque principe",
            "Notez les bénéfices que vous avez observés en appliquant ces principes",
          ],
          example:
            "Bilan de Thomas : Principe 1 (Forces) - 8/10 - J'ai réorganisé 70% de mon travail autour de mes forces. Principe 2 (Temps) - 6/10 - J'ai encore du mal avec les interruptions...",
          tips: "Soyez honnête mais bienveillant dans votre auto-évaluation. Le changement prend du temps.",
        },
      },
      {
        day: 28,
        principle: 0,
        icon: null,
        color: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200",
        task: "Identifiez les obstacles rencontrés et les solutions",
        details: {
          description: "Analysez les obstacles qui limitent votre efficacité et trouvez des solutions.",
          instructions: [
            "Listez les 3 principaux obstacles qui limitent votre application des principes d'efficacité",
            "Pour chaque obstacle, identifiez sa cause profonde (pas seulement les symptômes)",
            "Brainstormez au moins 3 solutions possibles pour chaque obstacle",
            "Choisissez une solution à mettre en œuvre pour chaque obstacle",
          ],
          example:
            "Obstacle de Sarah : 'Je n'arrive pas à maintenir mes blocs de temps sans interruptions.' Cause : collègues qui viennent poser des questions. Solutions : 1. Travailler dans une salle de réunion, 2. Établir des heures de disponibilité, 3. Porter des écouteurs comme signal visuel.",
          tips: "Les obstacles sont souvent liés à l'environnement ou aux attentes des autres, pas seulement à vos habitudes personnelles.",
        },
      },
      {
        day: 29,
        principle: 0,
        icon: null,
        color: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200",
        task: "Planifiez vos objectifs pour le mois suivant",
        details: {
          description: "Définissez vos objectifs d'efficacité pour le mois à venir.",
          instructions: [
            "Pour chacun des 5 principes, définissez un objectif spécifique pour le mois suivant",
            "Assurez-vous que chaque objectif est SMART (Spécifique, Mesurable, Atteignable, Réaliste, Temporel)",
            "Identifiez les actions concrètes nécessaires pour atteindre chaque objectif",
            "Planifiez quand et comment vous évaluerez vos progrès",
          ],
          example:
            "Objectif de Pierre pour le Principe 3 : 'Pendant les 4 prochaines semaines, je vais identifier et accomplir ma tâche la plus importante avant 10h chaque jour ouvrable, et je vais suivre mon taux de réussite dans mon journal.'",
          tips: "Visez des objectifs ambitieux mais réalistes. Il vaut mieux réussir pleinement 3 objectifs modestes que d'échouer sur 10 objectifs trop ambitieux.",
        },
      },
      {
        day: 30,
        principle: 0,
        icon: null,
        color: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200",
        task: "Célébrez vos réussites et partagez vos apprentissages",
        details: {
          description: "Prenez le temps de célébrer vos progrès et de partager ce que vous avez appris.",
          instructions: [
            "Listez au moins 5 réussites ou progrès réalisés au cours de ce mois d'application",
            "Identifiez les 3 apprentissages les plus importants pour vous",
            "Partagez ces apprentissages avec au moins une personne (collègue, ami, mentor)",
            "Réfléchissez à comment vous allez maintenir ces nouvelles habitudes sur le long terme",
          ],
          example:
            "Céline a invité deux collègues à déjeuner pour partager comment la concentration sur ses forces et la gestion de son temps avaient transformé sa productivité. Elle leur a offert le livre de Drucker comme cadeau.",
          tips: "La célébration n'est pas futile - c'est une étape cruciale pour renforcer les nouvelles habitudes et maintenir la motivation.",
        },
      },
    ],
  }

  // Fonction pour obtenir les détails complets d'un jour
  const getDayDetails = (dayNumber: number) => {
    return programData.days.find((day) => day.day === dayNumber) || null
  }

  // Fonction pour obtenir la couleur et l'icône en fonction du principe
  const getPrincipleVisuals = (principleNumber: number) => {
    switch (principleNumber) {
      case 1:
        return {
          icon: <Brain className="h-4 w-4" />,
          color: "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200",
          name: "Concentrez-vous sur vos forces",
          badgeColor: "border-amber-600 text-amber-600 dark:text-amber-400",
        }
      case 2:
        return {
          icon: <Clock className="h-4 w-4" />,
          color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
          name: "Gérez votre temps efficacement",
          badgeColor: "border-blue-600 text-blue-600 dark:text-blue-400",
        }
      case 3:
        return {
          icon: <Target className="h-4 w-4" />,
          color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
          name: "Faites d'abord la tâche la plus importante",
          badgeColor: "border-red-600 text-red-600 dark:text-red-400",
        }
      case 4:
        return {
          icon: <Sparkles className="h-4 w-4" />,
          color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
          name: "Concentrez-vous sur la contribution",
          badgeColor: "border-green-600 text-green-600 dark:text-green-400",
        }
      case 5:
        return {
          icon: <Lightbulb className="h-4 w-4" />,
          color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
          name: "Prenez des décisions efficaces",
          badgeColor: "border-purple-600 text-purple-600 dark:text-purple-400",
        }
      default:
        return {
          icon: <Info className="h-4 w-4" />,
          color: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200",
          name: "Bilan et intégration",
          badgeColor: "border-slate-600 text-slate-600 dark:text-slate-400",
        }
    }
  }

  // Fonction pour rendre un jour du calendrier
  const renderDay = (dayNumber: number) => {
    const dayData = getDayDetails(dayNumber)
    if (!dayData) return null

    const { icon, color } = getPrincipleVisuals(dayData.principle)

    return (
      <Card
        key={dayNumber}
        className={`overflow-hidden cursor-pointer transition-all hover:shadow-md ${
          selectedDay === dayNumber ? "ring-2 ring-offset-2 ring-slate-400 dark:ring-slate-500" : ""
        }`}
        onClick={() => setSelectedDay(dayNumber)}
      >
        <div className={`p-2 ${color} flex items-center justify-between`}>
          <span className="font-medium">Jour {dayNumber}</span>
          {icon}
        </div>
        <CardContent className="p-3">
          <p className="text-sm">{dayData.task}</p>
        </CardContent>
      </Card>
    )
  }

  // Fonction pour rendre un jour du calendrier en version compacte (pour la vue complète)
  const renderCompactDay = (dayNumber: number) => {
    const dayData = getDayDetails(dayNumber)
    if (!dayData) return null

    const { icon, color } = getPrincipleVisuals(dayData.principle)

    return (
      <Card
        key={dayNumber}
        className={`overflow-hidden cursor-pointer transition-all hover:shadow-md ${
          selectedDay === dayNumber ? "ring-2 ring-offset-2 ring-slate-400 dark:ring-slate-500" : ""
        }`}
        onClick={() => setSelectedDay(dayNumber)}
      >
        <div className={`p-1 sm:p-2 ${color} flex items-center justify-between`}>
          <span className="font-medium text-xs sm:text-sm">Jour {dayNumber}</span>
          <div>{icon}</div>
        </div>
        <CardContent className="p-1 sm:p-2">
          <p className="text-xs line-clamp-1 sm:line-clamp-2">{dayData.task}</p>
        </CardContent>
      </Card>
    )
  }

  // Fonction pour rendre le dialogue de détails
  const renderDayDetailsDialog = () => {
    if (selectedDay === null) return null

    const dayData = getDayDetails(selectedDay)
    if (!dayData) return null

    const { icon, color, name, badgeColor } = getPrincipleVisuals(dayData.principle)

    return (
      <Dialog open={selectedDay !== null} onOpenChange={(open) => !open && setSelectedDay(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto p-3 sm:p-6">
          <DialogHeader className="p-0 sm:p-2">
            <div className="flex items-center gap-2">
              <div className={`p-1 sm:p-2 rounded-full ${color}`}>{icon}</div>
              <div>
                <DialogTitle className="text-base sm:text-lg">
                  Jour {dayData.day}: {dayData.task}
                </DialogTitle>
                <DialogDescription className="flex items-center gap-2 mt-1 text-xs sm:text-sm">
                  <Badge variant="outline" className={badgeColor}>
                    Principe {dayData.principle}: {name}
                  </Badge>
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Description</h3>
              <p className="text-sm">{dayData.details.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Instructions</h3>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm">
                {dayData.details.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-3 sm:p-4 rounded-md">
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Exemple</h3>
              <p className="italic text-sm">{dayData.details.example}</p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Conseil</h3>
              <p className="text-sm">{dayData.details.tips}</p>
            </div>
          </div>
          <div className="flex justify-between mt-3 sm:mt-4 gap-1">
            <Button
              variant="outline"
              size="sm"
              className="text-xs sm:text-sm"
              disabled={dayData.day === 1}
              onClick={() => setSelectedDay(dayData.day - 1)}
            >
              Précédent
            </Button>
            <DialogClose asChild>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <X className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Fermer
              </Button>
            </DialogClose>
            <Button
              variant="outline"
              size="sm"
              className="text-xs sm:text-sm"
              disabled={dayData.day === 30}
              onClick={() => setSelectedDay(dayData.day + 1)}
            >
              Suivant
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className="space-y-6">
      {/* Sélection de la vue */}
      <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
        <TabsList className="grid grid-cols-2 w-full mb-4">
          <TabsTrigger value="weekly" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Vue par semaine</span>
          </TabsTrigger>
          <TabsTrigger value="complete" className="flex items-center gap-2">
            <List className="h-4 w-4" />
            <span>Vue complète</span>
          </TabsTrigger>
        </TabsList>

        {/* Vue par semaine */}
        <TabsContent value="weekly" className="mt-0">
          {/* Vue d'ensemble du programme */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Vue d'ensemble du programme</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {[1, 2, 3, 4].map((weekNum) => (
                  <div key={weekNum} className="text-center">
                    <div className="text-sm font-medium mb-2">Semaine {weekNum}</div>
                    <div className="flex gap-1">
                      {Array.from({ length: weekNum === 4 ? 9 : 7 }).map((_, i) => {
                        const dayNumber = (weekNum - 1) * 7 + i + 1
                        if (dayNumber > 30) return null

                        const dayData = getDayDetails(dayNumber)
                        if (!dayData) return null

                        const { color } = getPrincipleVisuals(dayData.principle)
                        return (
                          <div
                            key={dayNumber}
                            className={`w-3 h-3 rounded-full ${color} cursor-pointer`}
                            onClick={() => {
                              setActiveWeek(`week-${weekNum}`)
                              setSelectedDay(dayNumber)
                            }}
                            title={`Jour ${dayNumber}: ${dayData.task}`}
                          />
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation par semaines */}
          <Tabs value={activeWeek} onValueChange={setActiveWeek} className="mt-6">
            <TabsList className="grid grid-cols-4 mb-4">
              {programData.weeks.map((week) => (
                <TabsTrigger key={week.id} value={week.id}>
                  {week.title.split(":")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {programData.weeks.map((week) => (
              <TabsContent key={week.id} value={week.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{week.title}</CardTitle>
                    <p className="text-muted-foreground">{week.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
                      {week.days.map((dayNumber) => renderDay(dayNumber))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>

        {/* Vue complète */}
        <TabsContent value="complete" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Calendrier complet des 30 jours</CardTitle>
              <p className="text-muted-foreground">
                Vue d'ensemble de tous les jours du programme d'application des principes d'efficacité
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 sm:gap-2">
                {Array.from({ length: 30 }).map((_, i) => renderCompactDay(i + 1))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Légende des principes */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 bg-slate-50 dark:bg-slate-800 p-2 sm:p-4 rounded-lg text-[10px] sm:text-xs">
        {[1, 2, 3, 4, 5, 0].map((principleNum) => {
          const { icon, color, name } = getPrincipleVisuals(principleNum)
          return (
            <div key={principleNum} className="flex items-center gap-1">
              <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center ${color}`}>
                {principleNum > 0 ? (
                  <span className="text-[8px] sm:text-xs">{principleNum}</span>
                ) : (
                  <span className="text-[8px] sm:text-xs">B</span>
                )}
              </div>
              <span className="hidden xs:inline">{name}</span>
              <span className="xs:hidden">{principleNum > 0 ? `P${principleNum}` : "Bilan"}</span>
            </div>
          )
        })}
      </div>

      {/* Dialogue de détails */}
      {renderDayDetailsDialog()}
    </div>
  )
}
