export function PrincipleIllustration({ principleId }: { principleId: number }) {
  const illustrations = [
    // Principe 1: Concentrez-vous sur vos forces
    <div key="1" className="flex flex-col items-center">
      <div className="bg-amber-50 dark:bg-amber-950/50 p-6 rounded-lg w-full border border-amber-200 dark:border-amber-800 shadow-sm">
        <h4 className="font-semibold mb-4 text-lg text-amber-700 dark:text-amber-300 text-center">
          Infographie: Forces vs Faiblesses
        </h4>
        <div className="flex justify-between mb-4">
          <div className="text-center">
            <div className="h-20 w-20 bg-amber-200 dark:bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">💪</span>
            </div>
            <p className="font-medium">Forces</p>
            <p className="text-sm">Produisent des résultats</p>
          </div>
          <div className="text-center opacity-50">
            <div className="h-20 w-20 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">👎</span>
            </div>
            <p className="font-medium">Faiblesses</p>
            <p className="text-sm">Consomment de l'énergie</p>
          </div>
        </div>
        <p className="text-sm text-center italic">
          "Faites en sorte que vos forces soient si fortes que vos faiblesses deviennent sans importance."
        </p>
      </div>
    </div>,

    // Principe 2: Gérez votre temps efficacement
    <div key="2" className="flex flex-col items-center">
      <div className="bg-blue-50 dark:bg-blue-950/50 p-6 rounded-lg w-full border border-blue-200 dark:border-blue-800 shadow-sm">
        <h4 className="font-semibold mb-4 text-lg text-blue-700 dark:text-blue-300 text-center">
          Infographie: Gestion du temps
        </h4>
        <div className="space-y-2 mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center mr-2">
              1
            </div>
            <div className="flex-1 bg-blue-100 dark:bg-blue-900 h-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
            </div>
            <span className="ml-2 text-sm">Suivre</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center mr-2">
              2
            </div>
            <div className="flex-1 bg-blue-100 dark:bg-blue-900 h-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "60%" }}></div>
            </div>
            <span className="ml-2 text-sm">Éliminer</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center mr-2">
              3
            </div>
            <div className="flex-1 bg-blue-100 dark:bg-blue-900 h-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "30%" }}></div>
            </div>
            <span className="ml-2 text-sm">Regrouper</span>
          </div>
        </div>
        <p className="text-sm text-center italic">"Ce qui est mesuré est amélioré."</p>
      </div>
    </div>,

    // Principe 3: Faites d'abord la tâche la plus importante
    <div key="3" className="flex flex-col items-center">
      <div className="bg-red-50 dark:bg-red-950/50 p-6 rounded-lg w-full border border-red-200 dark:border-red-800 shadow-sm">
        <h4 className="font-semibold mb-4 text-lg text-red-700 dark:text-red-300 text-center">
          Infographie: Concentration vs Multitâche
        </h4>
        <div className="flex justify-between mb-4">
          <div className="text-center w-1/2 pr-2">
            <div className="h-16 bg-red-200 dark:bg-red-800 rounded flex items-center justify-center mb-2">
              <span className="text-sm font-medium">1 TÂCHE</span>
            </div>
            <div className="h-8 bg-red-300 dark:bg-red-700 rounded flex items-center justify-center">
              <span className="text-xs">100% d'attention</span>
            </div>
            <p className="text-sm mt-2">Résultat: Tâche complétée</p>
          </div>
          <div className="text-center w-1/2 pl-2">
            <div className="flex space-x-1 mb-2">
              <div className="h-4 flex-1 bg-slate-200 dark:bg-slate-800 rounded"></div>
              <div className="h-4 flex-1 bg-slate-200 dark:bg-slate-800 rounded"></div>
              <div className="h-4 flex-1 bg-slate-200 dark:bg-slate-800 rounded"></div>
            </div>
            <div className="flex space-x-1 mb-2">
              <div className="h-4 flex-1 bg-slate-200 dark:bg-slate-800 rounded"></div>
              <div className="h-4 flex-1 bg-slate-200 dark:bg-slate-800 rounded"></div>
              <div className="h-4 flex-1 bg-slate-200 dark:bg-slate-800 rounded"></div>
            </div>
            <div className="flex space-x-1">
              <div className="h-4 flex-1 bg-slate-200 dark:bg-slate-800 rounded"></div>
              <div className="h-4 flex-1 bg-slate-200 dark:bg-slate-800 rounded"></div>
              <div className="h-4 flex-1 bg-slate-200 dark:bg-slate-800 rounded"></div>
            </div>
            <p className="text-sm mt-2">Résultat: Rien de terminé</p>
          </div>
        </div>
        <p className="text-sm text-center italic">"Chaque chose en son temps, et la deuxième chose n'y touchez pas."</p>
      </div>
    </div>,

    // Principe 4: Concentrez-vous sur la contribution
    <div key="4" className="flex flex-col items-center">
      <div className="bg-green-50 dark:bg-green-950/50 p-6 rounded-lg w-full border border-green-200 dark:border-green-800 shadow-sm">
        <h4 className="font-semibold mb-4 text-lg text-green-700 dark:text-green-300 text-center">
          Infographie: Effort vs Résultat
        </h4>
        <div className="space-y-4 mb-4">
          <div className="flex items-center">
            <div className="w-1/3 text-right pr-4">
              <span className="font-medium">Suiveur</span>
            </div>
            <div className="w-2/3">
              <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded flex items-center pl-2">
                <span className="text-xs">Mesure l'effort</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/3 text-right pr-4">
              <span className="font-medium text-green-600 dark:text-green-400">Leader</span>
            </div>
            <div className="w-2/3">
              <div className="h-8 bg-green-200 dark:bg-green-800 rounded flex items-center pl-2">
                <span className="text-xs">Mesure les résultats</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-center italic">"Ce qui compte, c'est le résultat, pas l'effort."</p>
      </div>
    </div>,

    // Principe 5: Prenez des décisions efficaces
    <div key="5" className="flex flex-col items-center">
      <div className="bg-purple-50 dark:bg-purple-950/50 p-6 rounded-lg w-full border border-purple-200 dark:border-purple-800 shadow-sm">
        <h4 className="font-semibold mb-4 text-lg text-purple-700 dark:text-purple-300 text-center">
          Infographie: Décisions stratégiques
        </h4>
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center">
              <span className="text-sm font-medium text-center">Décision stratégique</span>
            </div>
          </div>
          <div className="flex justify-between items-center h-40">
            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <span className="text-xs">
                Micro
                <br />
                décision
              </span>
            </div>
            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <span className="text-xs">
                Micro
                <br />
                décision
              </span>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <span className="text-xs">
                Micro
                <br />
                décision
              </span>
            </div>
            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <span className="text-xs">
                Micro
                <br />
                décision
              </span>
            </div>
            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <span className="text-xs">
                Micro
                <br />
                décision
              </span>
            </div>
          </div>
        </div>
        <p className="text-sm text-center italic">
          "La bonne décision naît du désaccord et du choc d'opinions différentes."
        </p>
      </div>
    </div>,
  ]

  return illustrations[principleId - 1] || null
}
