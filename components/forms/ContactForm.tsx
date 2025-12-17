"use client"

import { useState } from "react"
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
import { Send, CheckCircle2 } from "lucide-react"

const subjects = [
  { value: "info", label: "Demande d'information" },
  { value: "booking", label: "Question sur une réservation" },
  { value: "gift", label: "Bons cadeaux" },
  { value: "partnership", label: "Partenariat" },
  { value: "other", label: "Autre" },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSuccess(true)
    setIsSubmitting(false)
  }

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.subject !== "" &&
      formData.message.trim() !== ""
    )
  }

  if (isSuccess) {
    return (
      <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border/50">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-serif text-2xl text-foreground mb-4">
          Message envoyé !
        </h3>
        <p className="text-muted-foreground mb-6">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSuccess(false)
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
          }}
        >
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Nom complet *
          </label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Téléphone
          </label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="06 12 34 56 78"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Sujet *
          </label>
          <Select
            value={formData.subject}
            onValueChange={(value) => setFormData({ ...formData, subject: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choisir un sujet" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((subject) => (
                <SelectItem key={subject.value} value={subject.value}>
                  {subject.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <Textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Comment pouvons-nous vous aider ?"
          rows={6}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
          required
        />
        <label htmlFor="consent" className="text-sm text-muted-foreground">
          J&apos;accepte que mes données soient traitées dans le cadre de ma demande.
          Consultez notre{" "}
          <a href="/confidentialite" className="text-primary hover:underline">
            politique de confidentialité
          </a>
          .
        </label>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={!isFormValid() || isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Envoyer le message
          </>
        )}
      </Button>
    </form>
  )
}
