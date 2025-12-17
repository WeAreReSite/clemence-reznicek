"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useCookieConsentStore } from "@/lib/store"
import { X, Settings } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export function CookieBanner() {
  const { hasConsented, preferences, setConsent, updatePreferences } = useCookieConsentStore()
  const [showSettings, setShowSettings] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [localPreferences, setLocalPreferences] = useState(preferences)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setLocalPreferences(preferences)
  }, [preferences])

  if (!mounted || hasConsented !== null) return null

  const handleAcceptAll = () => {
    setConsent(true, {
      necessary: true,
      analytics: true,
      marketing: true,
    })
  }

  const handleRejectAll = () => {
    setConsent(false, {
      necessary: true,
      analytics: false,
      marketing: false,
    })
  }

  const handleSavePreferences = () => {
    setConsent(true, localPreferences)
    setShowSettings(false)
  }

  return (
    <>
      {/* Main Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
        <div className="container-spa">
          <div className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
              <div className="flex-1">
                <h3 className="font-serif text-xl mb-2">Votre vie privée compte</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site.
                  Vous pouvez personnaliser vos préférences ou accepter/refuser tous les cookies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(true)}
                  className="order-3 sm:order-1"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Personnaliser
                </Button>
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  className="order-2"
                >
                  Tout refuser
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="order-1 sm:order-3"
                >
                  Tout accepter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Préférences de cookies</DialogTitle>
            <DialogDescription>
              Choisissez quels cookies vous souhaitez autoriser. Vous pouvez modifier ces
              préférences à tout moment.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium mb-1">Cookies nécessaires</h4>
                <p className="text-sm text-muted-foreground">
                  Essentiels au fonctionnement du site. Ne peuvent pas être désactivés.
                </p>
              </div>
              <div className="ml-4">
                <div className="w-12 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between p-4 border border-border rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium mb-1">Cookies analytiques</h4>
                <p className="text-sm text-muted-foreground">
                  Nous aident à comprendre comment vous utilisez le site pour l&apos;améliorer.
                </p>
              </div>
              <button
                onClick={() =>
                  setLocalPreferences({
                    ...localPreferences,
                    analytics: !localPreferences.analytics,
                  })
                }
                className={cn(
                  "ml-4 w-12 h-6 rounded-full flex items-center px-1 transition-colors",
                  localPreferences.analytics ? "bg-primary justify-end" : "bg-secondary-light justify-start"
                )}
              >
                <div className="w-4 h-4 bg-white rounded-full shadow" />
              </button>
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between p-4 border border-border rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium mb-1">Cookies marketing</h4>
                <p className="text-sm text-muted-foreground">
                  Utilisés pour vous proposer des publicités personnalisées.
                </p>
              </div>
              <button
                onClick={() =>
                  setLocalPreferences({
                    ...localPreferences,
                    marketing: !localPreferences.marketing,
                  })
                }
                className={cn(
                  "ml-4 w-12 h-6 rounded-full flex items-center px-1 transition-colors",
                  localPreferences.marketing ? "bg-primary justify-end" : "bg-secondary-light justify-start"
                )}
              >
                <div className="w-4 h-4 bg-white rounded-full shadow" />
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={handleRejectAll} className="flex-1">
              Tout refuser
            </Button>
            <Button onClick={handleSavePreferences} className="flex-1">
              Enregistrer
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
