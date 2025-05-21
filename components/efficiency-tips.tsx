"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Clock, Target, Sparkles, Lightbulb, LightbulbIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PrincipleIllustration } from "@/components/principle-illustration"

export function EfficiencyTips() {
  const [readingLevel, setReadingLevel] = useState<"concise" | "detailed" | "complete">("detailed")

  const tips = [
    {
      id: 1,
      elementId: "principle-1",
      title: "Concentrez-vous sur vos forces",
      icon: <Brain className="h-8 w-8" />,
      color: "bg-amber-100 dark:bg-amber-950",
      iconColor: "text-amber-600 dark:text-amber-400",
      borderColor: "border-amber-600 dark:border-amber-400",
      description: "Ignorez vos faiblesses et rendez vos forces productives",
      keyPoints: [
        "Les points forts produisent des résultats, pas les faiblesses",
        "N'améliorez vos faiblesses que si elles sont liées à votre caractère",
        "Faites en sorte que vos forces soient si fortes que vos faiblesses deviennent sans importance",
        "Observez-vous pour identifier vos points forts naturels",
        "Les personnes efficaces s'efforcent d'être elles-mêmes, elles ne prétendent pas être quelqu'un d'autre",
        "Posez-vous des questions : Travaillez-vous mieux seul ou en équipe ? Le matin ou le soir ?",
        "Aidez les autres à se concentrer sur leurs points forts plutôt que d'améliorer leurs faiblesses",
      ],
      quote: "Vos points forts sont de l'or, vos faiblesses de la poussière. Concentrez-vous sur l'or.",
      actionItems: [
        "Identifiez vos 3 plus grandes forces",
        "Observez quelles activités vous semblent faciles alors qu'elles sont difficiles pour d'autres",
        "Créez un environnement qui maximise l'utilisation de vos forces",
      ],
      directQuote: "Faites en sorte que vos forces soient si fortes que vos faiblesses deviennent sans importance.",
      modernApplication:
        "Dans un monde de spécialisation croissante, les entreprises et les individus qui réussissent sont ceux qui se concentrent sur leurs compétences distinctives. Les plateformes comme LinkedIn et les outils d'évaluation des compétences permettent aujourd'hui d'identifier plus facilement ses forces et de les mettre en valeur.",
      commonObstacles: [
        "La pression sociale pour être 'complet' et bon dans tous les domaines",
        "La difficulté à identifier objectivement ses propres forces",
        "La tendance à se comparer aux autres et à vouloir combler ses lacunes",
      ],
      caseStudy: {
        title: "Warren Buffett et Charlie Munger",
        content:
          "Warren Buffett et son partenaire Charlie Munger ont bâti Berkshire Hathaway en se concentrant exclusivement sur leurs forces en matière d'investissement. Buffett délègue presque tout ce qui ne concerne pas les décisions d'investissement, y compris la gestion quotidienne des entreprises qu'ils acquièrent.",
      },
      conciseVersion:
        "Concentrez-vous sur vos forces naturelles et ignorez vos faiblesses. Seuls les points forts produisent des résultats. Identifiez ce que vous faites bien naturellement et maximisez ces compétences.",
    },
    {
      id: 2,
      elementId: "principle-2",
      title: "Gérez votre temps efficacement",
      icon: <Clock className="h-8 w-8" />,
      color: "bg-blue-100 dark:bg-blue-950",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-600 dark:border-blue-400",
      description: "Suivez votre temps et éliminez les activités improductives",
      keyPoints: [
        "Commencez par suivre votre temps, pas par planifier vos tâches",
        "La mémoire n'est pas fiable pour estimer l'utilisation du temps",
        "Le temps est la ressource la plus rare, chaque jour vous en avez moins",
        "Posez-vous trois questions : Si j'arrête de faire cela, que se passe-t-il ? Quelqu'un d'autre peut-il le faire mieux ? Qu'est-ce que je fais qui fait perdre du temps aux autres ?",
        "Regroupez votre temps en blocs importants (demi-journée à semaines)",
      ],
      quote: "Ce qui est mesuré est amélioré.",
      actionItems: [
        "Tenez un journal de temps pendant une semaine",
        "Éliminez les activités qui ne produisent pas de résultats",
        "Créez des blocs de temps de 4 heures minimum pour les tâches importantes",
      ],
      example:
        "Un président d'entreprise pensait répartir son temps également entre trois domaines (réunions avec le personnel, clients principaux et activités communautaires), mais un relevé de 6 semaines a révélé qu'il fonctionnait principalement comme répartiteur de commandes clients.",
      directQuote: "Le temps est la ressource la plus rare et, s'il n'est pas géré, rien d'autre ne peut être géré.",
      modernApplication:
        "Les applications de suivi du temps comme RescueTime, Toggl ou les fonctionnalités de bien-être numérique des smartphones permettent aujourd'hui de suivre précisément comment nous utilisons notre temps, notamment face aux distractions numériques qui n'existaient pas à l'époque de Drucker.",
      commonObstacles: [
        "La sous-estimation systématique du temps nécessaire pour accomplir des tâches",
        "Les interruptions constantes (notifications, emails, réunions)",
        "La difficulté à dire non et à déléguer",
      ],
      caseStudy: {
        title: "Elon Musk et les blocs de temps",
        content:
          "Elon Musk, malgré la gestion de plusieurs entreprises, utilise un système de planification par blocs de 5 minutes. Il consacre des journées entières à des entreprises spécifiques (lundi pour SpaceX, mardi pour Tesla, etc.) plutôt que de fragmenter son attention.",
      },
      conciseVersion:
        "Suivez votre temps avant de le planifier. La mémoire est peu fiable pour estimer comment vous passez réellement votre temps. Éliminez les activités improductives et regroupez votre temps en blocs importants.",
    },
    {
      id: 3,
      elementId: "principle-3",
      title: "Faites d'abord la tâche la plus importante",
      icon: <Target className="h-8 w-8" />,
      color: "bg-red-100 dark:bg-red-950",
      iconColor: "text-red-600 dark:text-red-400",
      borderColor: "border-red-600 dark:border-red-400",
      description: "Concentrez-vous sur une seule chose à la fois",
      keyPoints: [
        "Chaque chose en son temps, et la deuxième chose n'y touchez pas",
        "La concentration est le secret de l'efficacité",
        "Adoptez un rythme lent et prévoyez du temps pour les imprévus",
        "L'inattendu est la seule chose à laquelle on peut s'attendre en toute confiance",
        "Créez une liste de choses à ne pas faire",
        "Il est plus important de décider ce qu'il ne faut pas faire que ce qu'il faut faire",
        "Même le maître jongleur ne peut maintenir plusieurs balles en l'air que pendant une dizaine de minutes",
      ],
      quote: "Quelle est la seule chose que je dois faire maintenant ?",
      actionItems: [
        "Identifiez chaque jour LA tâche la plus importante",
        "Prévoyez 50% de temps supplémentaire pour chaque tâche importante",
        "Nettoyez régulièrement votre liste de tâches pour éliminer celles qui ne sont plus pertinentes",
      ],
      directQuote:
        "Chaque chose en son temps, et la deuxième chose n'y touchez pas. Si l'efficacité a un secret, c'est bien la concentration.",
      modernApplication:
        "Les méthodes comme le 'Deep Work' de Cal Newport ou la technique Pomodoro sont des applications modernes de ce principe. Les outils comme Freedom ou Forest permettent de bloquer les distractions pour se concentrer sur une seule tâche importante.",
      commonObstacles: [
        "La culture de la multitâche valorisée dans de nombreuses entreprises",
        "L'afflux constant de notifications et d'informations",
        "La difficulté à identifier la tâche véritablement prioritaire parmi de nombreuses urgences",
      ],
      caseStudy: {
        title: "Bill Gates et ses 'Think Weeks'",
        content:
          "Bill Gates, pendant ses années à la tête de Microsoft, s'isolait deux fois par an pour des 'Think Weeks' - des semaines entières dédiées uniquement à la lecture et à la réflexion stratégique, sans aucune autre distraction. Plusieurs innovations majeures de Microsoft sont nées de ces périodes de concentration intense.",
      },
      conciseVersion:
        "Concentrez-vous sur une seule tâche importante à la fois. Ne passez à la suivante qu'après avoir terminé la première. Prévoyez du temps pour les imprévus et créez une liste de choses à ne PAS faire.",
    },
    {
      id: 4,
      elementId: "principle-4",
      title: "Concentrez-vous sur la contribution",
      icon: <Sparkles className="h-8 w-8" />,
      color: "bg-green-100 dark:bg-green-950",
      iconColor: "text-green-600 dark:text-green-400",
      borderColor: "border-green-600 dark:border-green-400",
      description: "Visez les résultats, pas l'effort fourni",
      keyPoints: [
        "Demandez-vous : Quelle contribution puis-je apporter qui améliorera significativement les résultats ?",
        "Se concentrer sur l'effort fait de vous un suiveur, se concentrer sur les résultats fait de vous un leader",
        "La valeur réside dans les résultats, pas dans l'effort fourni",
        "Viser trop bas est aussi mauvais que se tromper de cible",
        "Personne ne s'intéresse à la quantité d'efforts fournis, seulement aux résultats",
      ],
      quote: "Ce qui compte, c'est le résultat, pas l'effort.",
      actionItems: [
        "Pour chaque projet, définissez clairement le résultat attendu",
        "Évaluez vos activités en fonction de leur impact, pas du temps qu'elles prennent",
        "Concentrez-vous sur les 20% d'activités qui produisent 80% des résultats",
      ],
      example:
        "Un candidat à un poste qui, au lieu de demander le salaire et les heures de travail, a proposé un essai gratuit pour prouver la valeur de ses résultats.",
      directQuote:
        "Si vous vous contentez d'accomplir vos tâches, vous êtes un suiveur quel que soit votre titre. En revanche, si vous cherchez à faire la différence et que vous vous concentrez sur les résultats, vous êtes un leader quel que soit votre titre.",
      modernApplication:
        "L'économie des freelances et le travail à distance ont accéléré cette tendance : de plus en plus d'entreprises se concentrent sur les livrables et les résultats plutôt que sur le temps passé au bureau. Les KPIs (indicateurs clés de performance) sont devenus centraux dans la gestion moderne.",
      commonObstacles: [
        "Les systèmes d'évaluation basés sur le présentéisme plutôt que sur les résultats",
        "La difficulté à mesurer l'impact réel de certaines activités",
        "La tendance à valoriser l'activité visible plutôt que l'impact réel",
      ],
      caseStudy: {
        title: "Netflix et sa culture de la responsabilité",
        content:
          "Netflix a révolutionné sa culture d'entreprise en se concentrant uniquement sur les résultats et non sur les efforts ou le temps passé. Ils n'ont pas de politique de congés ou d'horaires fixes - les employés sont jugés uniquement sur leur contribution aux objectifs de l'entreprise.",
      },
      conciseVersion:
        "Concentrez-vous sur les résultats, pas sur l'effort fourni. Demandez-vous quelle contribution aura un impact significatif. Les personnes efficaces se demandent toujours comment améliorer les résultats, pas comment justifier leur temps.",
    },
    {
      id: 5,
      elementId: "principle-5",
      title: "Prenez des décisions efficaces",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "bg-purple-100 dark:bg-purple-950",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-600 dark:border-purple-400",
      description: "Concentrez-vous sur quelques décisions stratégiques importantes",
      keyPoints: [
        "Prenez peu de décisions, mais des décisions stratégiques",
        "Une décision stratégique peut résoudre automatiquement 10-15 petites décisions",
        "Commencez par les opinions et les idées des autres, pas par les faits",
        "Organisez le désaccord pour obtenir toutes les alternatives possibles",
        "Ayez toujours un plan B en cas d'échec du premier plan",
        "Une décision sans plan B est vouée à l'échec",
      ],
      quote: "La bonne décision naît du désaccord et du choc d'opinions différentes.",
      actionItems: [
        "Identifiez les décisions stratégiques qui résoudront plusieurs problèmes",
        "Consultez systématiquement des personnes ayant des points de vue différents",
        "Pour chaque décision importante, développez au moins un plan alternatif",
      ],
      example:
        "Exemples de décisions stratégiques : cuisiner tous les dimanches pour toute la semaine, engager quelqu'un pour s'occuper des tâches administratives.",
      directQuote:
        "Les personnes efficaces savent que la bonne décision naît du désaccord et du choc d'opinions différentes. Elles organisent donc le désaccord pour obtenir toutes les alternatives possibles.",
      modernApplication:
        "Les méthodologies agiles et le concept de 'minimum viable product' (MVP) incarnent cette approche : prendre des décisions stratégiques, tester rapidement, avoir des plans alternatifs. Les outils de prise de décision collaborative comme Loomio permettent aujourd'hui d'organiser efficacement le désaccord constructif.",
      commonObstacles: [
        "La peur du conflit qui pousse à éviter les désaccords",
        "La tendance à s'entourer de personnes qui pensent comme nous (biais de confirmation)",
        "L'urgence qui pousse à prendre des décisions sans plan B",
      ],
      caseStudy: {
        title: "Jeff Bezos et la prise de décision chez Amazon",
        content:
          "Jeff Bezos distingue les décisions 'de type 1' (irréversibles, qui nécessitent une réflexion approfondie) et 'de type 2' (réversibles, qui peuvent être prises rapidement). Cette approche permet à Amazon de se concentrer sur les quelques décisions stratégiques vraiment importantes tout en avançant rapidement sur le reste.",
      },
      conciseVersion:
        "Prenez peu de décisions, mais des décisions stratégiques qui résolvent automatiquement plusieurs petits problèmes. Recherchez activement des opinions différentes et ayez toujours un plan B.",
    },
  ]

  const renderContent = (tip: any, level: "concise" | "detailed" | "complete") => {
    if (level === "concise") {
      return (
        <div className="space-y-4">
          <p>{tip.conciseVersion}</p>
          <blockquote className="border-l-4 pl-4 italic border-slate-300 dark:border-slate-600">{tip.quote}</blockquote>
        </div>
      )
    }

    if (level === "detailed") {
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Points clés :</h3>
            <ul className="space-y-2 list-disc pl-5">
              {tip.keyPoints.map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <blockquote className="border-l-4 pl-4 italic border-slate-300 dark:border-slate-600">{tip.quote}</blockquote>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Actions concrètes :</h3>
            <ul className="space-y-1">
              {tip.actionItems.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="rounded-full bg-slate-200 dark:bg-slate-800 h-5 w-5 flex items-center justify-center text-xs mt-0.5">
                    {index + 1}
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {tip.example && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Exemple :</h3>
              <p>{tip.example}</p>
            </div>
          )}
        </div>
      )
    }

    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Points clés :</h3>
          <ul className="space-y-2 list-disc pl-5">
            {tip.keyPoints.map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md border">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <LightbulbIcon className="h-4 w-4 mr-2" />
            Citation directe de Drucker :
          </h3>
          <blockquote className="italic">"{tip.directQuote}"</blockquote>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Actions concrètes :</h3>
          <ul className="space-y-1">
            {tip.actionItems.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <div className="rounded-full bg-slate-200 dark:bg-slate-800 h-5 w-5 flex items-center justify-center text-xs mt-0.5">
                  {index + 1}
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {tip.example && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Exemple :</h3>
            <p>{tip.example}</p>
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Application moderne :</h3>
          <p>{tip.modernApplication}</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Obstacles courants :</h3>
          <ul className="space-y-1 list-disc pl-5">
            {tip.commonObstacles.map((obstacle: string, index: number) => (
              <li key={index}>{obstacle}</li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md border">
          <h3 className="text-lg font-semibold mb-2">Étude de cas : {tip.caseStudy.title}</h3>
          <p>{tip.caseStudy.content}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-12 mb-12">
      <div className="flex justify-end mb-4">
        <Tabs value={readingLevel} onValueChange={(value) => setReadingLevel(value as any)}>
          <TabsList>
            <TabsTrigger value="concise">Concis</TabsTrigger>
            <TabsTrigger value="detailed">Détaillé</TabsTrigger>
            <TabsTrigger value="complete">Complet</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-12">
        {tips.map((tip) => (
          <Card
            key={tip.id}
            id={tip.elementId}
            className="overflow-hidden border-t-4 scroll-mt-24"
            style={{ borderTopColor: tip.iconColor }}
          >
            <CardHeader className={`${tip.color} flex flex-row items-center gap-4`}>
              <div className={`rounded-full p-3 ${tip.iconColor} bg-white dark:bg-slate-900`}>{tip.icon}</div>
              <div>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-2xl">{tip.title}</CardTitle>
                  <Badge variant="outline" className={tip.borderColor}>
                    Principe {tip.id}
                  </Badge>
                </div>
                <CardDescription className="text-lg font-medium mt-1">{tip.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-8">
                <div>{renderContent(tip, readingLevel)}</div>
                <div className="block">
                  <PrincipleIllustration principleId={tip.id} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
