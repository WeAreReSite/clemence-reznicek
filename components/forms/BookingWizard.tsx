"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { services, therapists, timeSlots } from "@/lib/data"
import { formatPrice, formatDuration, cn } from "@/lib/utils"
import { useBookingStore } from "@/lib/store"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Check,
  Clock,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  User,
  Calendar as CalendarIcon,
  CheckCircle2,
} from "lucide-react"
import { format, addDays } from "date-fns"
import { fr } from "date-fns/locale"

const steps = [
  { id: 1, name: "Soin", icon: Sparkles },
  { id: 2, name: "Date & Heure", icon: CalendarIcon },
  { id: 3, name: "Vos informations", icon: User },
  { id: 4, name: "Confirmation", icon: CheckCircle2 },
]

export function BookingWizard() {
  const searchParams = useSearchParams()
  const preselectedService = searchParams.get("service")

  const {
    serviceId,
    therapistId,
    date,
    timeSlot,
    step,
    setService,
    setTherapist,
    setDate,
    setTimeSlot,
    setClientInfo,
    nextStep,
    prevStep,
    reset,
  } = useBookingStore()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Preselect service from URL
  useEffect(() => {
    if (preselectedService) {
      const service = services.find((s) => s.slug === preselectedService)
      if (service) {
        setService(service.id)
      }
    }
  }, [preselectedService, setService])

  const selectedService = services.find((s) => s.id === serviceId)
  const selectedTherapist = therapists.find((t) => t.id === therapistId)

  // Disabled dates (for demo, block Mondays)
  const isDateDisabled = (date: Date) => {
    return date.getDay() === 1 // Disable Mondays
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setClientInfo(formData)
    setIsComplete(true)
    setIsSubmitting(false)
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!serviceId
      case 2:
        return !!date && !!timeSlot
      case 3:
        return (
          formData.firstName.trim() !== "" &&
          formData.lastName.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.phone.trim() !== ""
        )
      default:
        return true
    }
  }

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border/50 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-serif text-3xl text-foreground mb-4">
            Réservation confirmée !
          </h2>
          <p className="text-muted-foreground mb-8">
            Merci {formData.firstName}, votre réservation a bien été enregistrée.
            Vous recevrez un email de confirmation à {formData.email}.
          </p>

          <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-medium text-foreground mb-4">Récapitulatif</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Soin</span>
                <span className="font-medium">{selectedService?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium">
                  {date && format(date, "EEEE d MMMM yyyy", { locale: fr })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Heure</span>
                <span className="font-medium">{timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Durée</span>
                <span className="font-medium">
                  {selectedService && formatDuration(selectedService.duration)}
                </span>
              </div>
              <div className="pt-3 border-t border-border flex justify-between">
                <span className="text-muted-foreground">Total</span>
                <span className="font-serif text-xl text-accent">
                  {selectedService && formatPrice(selectedService.price)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="flex-1" onClick={() => { reset(); setIsComplete(false) }}>
              Nouvelle réservation
            </Button>
            <Button className="flex-1" asChild>
              <Link href="/">Retour à l&apos;accueil</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          <div
            className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 transition-all duration-500"
            style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
          />

          {steps.map((s) => (
            <div key={s.id} className="relative flex flex-col items-center">
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10",
                  step > s.id
                    ? "bg-primary text-primary-foreground"
                    : step === s.id
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-card border-2 border-border text-muted-foreground"
                )}
              >
                {step > s.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <s.icon className="w-5 h-5" />
                )}
              </div>
              <span
                className={cn(
                  "mt-2 text-xs font-medium hidden sm:block",
                  step >= s.id ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm">
        {/* Step 1: Select Service */}
        {step === 1 && (
          <div>
            <h2 className="font-serif text-2xl text-foreground mb-6">
              Choisissez votre soin
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setService(service.id)}
                  className={cn(
                    "flex gap-4 p-4 rounded-xl border-2 transition-all text-left",
                    serviceId === service.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="w-20 h-20 rounded-lg bg-muted shrink-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-medium text-foreground line-clamp-1">
                        {service.name}
                      </h3>
                      {serviceId === service.id && (
                        <Check className="w-5 h-5 text-primary shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Clock className="w-4 h-4" />
                      <span>{formatDuration(service.duration)}</span>
                    </div>
                    <p className="text-accent font-medium mt-1">
                      {formatPrice(service.price)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Select Date & Time */}
        {step === 2 && (
          <div>
            <h2 className="font-serif text-2xl text-foreground mb-6">
              Choisissez la date et l&apos;heure
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Calendar */}
              <div>
                <h3 className="font-medium text-foreground mb-4">Date</h3>
                <Calendar
                  selected={date || undefined}
                  onSelect={(d) => d && setDate(d)}
                  disabled={isDateDisabled}
                  minDate={addDays(new Date(), 1)}
                  className="border border-border rounded-xl"
                />
              </div>

              {/* Time Slots */}
              <div>
                <h3 className="font-medium text-foreground mb-4">Horaire</h3>
                {date ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setTimeSlot(slot)}
                        className={cn(
                          "py-3 px-4 rounded-lg text-sm font-medium transition-all",
                          timeSlot === slot
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground hover:bg-primary/10"
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="bg-muted/50 rounded-xl p-8 text-center">
                    <CalendarIcon className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">
                      Sélectionnez d&apos;abord une date
                    </p>
                  </div>
                )}

                {/* Therapist Selection (Optional) */}
                <div className="mt-6">
                  <h3 className="font-medium text-foreground mb-4">
                    Praticien(ne) <span className="text-muted-foreground font-normal">(optionnel)</span>
                  </h3>
                  <Select
                    value={therapistId || "any"}
                    onValueChange={(v) => setTherapist(v === "any" ? null : v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sans préférence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Sans préférence</SelectItem>
                      {therapists.map((t) => (
                        <SelectItem key={t.id} value={t.id}>
                          {t.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Client Information */}
        {step === 3 && (
          <div>
            <h2 className="font-serif text-2xl text-foreground mb-6">
              Vos informations
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Prénom *
                </label>
                <Input
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nom *
                </label>
                <Input
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Téléphone *
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Notes ou demandes particulières
                </label>
                <Textarea
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Allergies, préférences particulières..."
                  rows={4}
                />
              </div>
            </div>

            {/* Summary */}
            <div className="mt-8 p-6 bg-muted/50 rounded-xl">
              <h3 className="font-medium text-foreground mb-4">Récapitulatif</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Soin</span>
                  <span className="font-medium">{selectedService?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">
                    {date && format(date, "EEEE d MMMM", { locale: fr })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Heure</span>
                  <span className="font-medium">{timeSlot}</span>
                </div>
                {selectedTherapist && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Praticien(ne)</span>
                    <span className="font-medium">{selectedTherapist.name}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-border flex justify-between">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-serif text-xl text-accent">
                    {selectedService && formatPrice(selectedService.price)}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              * Aucun paiement n&apos;est requis pour réserver. Le règlement s&apos;effectue sur place.
              Annulation gratuite jusqu&apos;à 24h avant le rendez-vous.
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          {step > 1 ? (
            <Button variant="ghost" onClick={prevStep}>
              <ChevronLeft className="w-5 h-5 mr-2" />
              Retour
            </Button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <Button onClick={nextStep} disabled={!canProceed()}>
              Continuer
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={!canProceed() || isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Confirmation...
                </>
              ) : (
                <>
                  Confirmer la réservation
                  <Check className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
