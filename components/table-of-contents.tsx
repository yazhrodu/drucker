"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Clock, Target, Sparkles, Lightbulb, Menu, ChevronDown, ChevronUp, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  onTabChange?: (tab: string) => void
}

export function TableOfContents({ onTabChange }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktopOpen, setIsDesktopOpen] = useState(false)

  const principles = [
    {
      id: "principle-1",
      title: "Concentrez-vous sur vos forces",
      icon: <Brain className="h-4 w-4" />,
      color: "text-amber-600 dark:text-amber-400",
    },
    {
      id: "principle-2",
      title: "Gérez votre temps efficacement",
      icon: <Clock className="h-4 w-4" />,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      id: "principle-3",
      title: "Faites d'abord la tâche la plus importante",
      icon: <Target className="h-4 w-4" />,
      color: "text-red-600 dark:text-red-400",
    },
    {
      id: "principle-4",
      title: "Concentrez-vous sur la contribution",
      icon: <Sparkles className="h-4 w-4" />,
      color: "text-green-600 dark:text-green-400",
    },
    {
      id: "principle-5",
      title: "Prenez des décisions efficaces",
      icon: <Lightbulb className="h-4 w-4" />,
      color: "text-purple-600 dark:text-purple-400",
    },
  ]

  const scrollToSection = (id: string) => {
    // Si c'est un principe, on reste sur l'onglet principes et on scroll
    if (id.startsWith("principle-")) {
      if (onTabChange) {
        onTabChange("principles")
      }

      // Attendre un peu que l'onglet change avant de scroller
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          const yOffset = -100 // Ajustement pour tenir compte de la hauteur de l'en-tête
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
        }
      }, 100)
    }
    // Sinon, on change d'onglet
    else {
      const tabId =
        id === "summary" ? "summary" : id === "calendar" ? "calendar" : id === "about" ? "about" : "principles"

      if (onTabChange) {
        onTabChange(tabId)
      }
    }

    if (window.innerWidth < 768) {
      setIsOpen(false)
    } else {
      setIsDesktopOpen(false)
    }
  }

  return (
    <div className="z-10 mb-8">
      {/* Version mobile */}
      <div className="md:hidden">
        <Button
          variant="outline"
          className="w-full flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center">
            <Menu className="h-4 w-4 mr-2" />
            <span>Table des matières</span>
          </div>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {isOpen && (
          <Card className="mt-2 absolute w-full z-50">
            <CardContent className="p-2">
              <ul className="space-y-1">
                {principles.map((principle) => (
                  <li key={principle.id}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left"
                      onClick={() => scrollToSection(principle.id)}
                    >
                      <div className={cn("flex items-center", principle.color)}>
                        {principle.icon}
                        <span className="ml-2 text-sm">{principle.title}</span>
                      </div>
                    </Button>
                  </li>
                ))}
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => scrollToSection("summary")}
                  >
                    <span className="ml-6 text-sm">Résumé</span>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => scrollToSection("about")}
                  >
                    <span className="ml-6 text-sm">À propos de Peter Drucker</span>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => scrollToSection("calendar")}
                  >
                    <span className="ml-6 text-sm">Calendrier d'application</span>
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Version desktop - bouton flottant */}
      <div className="hidden md:block fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
          onClick={() => setIsDesktopOpen(!isDesktopOpen)}
        >
          <List className="h-4 w-4" />
          <span>Table des matières</span>
          {isDesktopOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </Button>

        {isDesktopOpen && (
          <Card className="absolute right-0 mt-2 w-64">
            <CardContent className="p-4">
              <h2 className="font-semibold mb-4">Table des matières</h2>
              <ul className="space-y-2">
                {principles.map((principle) => (
                  <li key={principle.id}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left"
                      onClick={() => scrollToSection(principle.id)}
                    >
                      <div className={cn("flex items-center", principle.color)}>
                        {principle.icon}
                        <span className="ml-2">{principle.title}</span>
                      </div>
                    </Button>
                  </li>
                ))}
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => scrollToSection("summary")}
                  >
                    <span className="ml-6">Résumé</span>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => scrollToSection("about")}
                  >
                    <span className="ml-6">À propos de Peter Drucker</span>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => scrollToSection("calendar")}
                  >
                    <span className="ml-6">Calendrier d'application</span>
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
