"use client"

import { useState } from "react"
import { Service } from "@/lib/store"
import { formatPrice } from "@/lib/utils"
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
import { cn } from "@/lib/utils"
import { Mail, Truck, Check, Gift, CreditCard, CheckCircle2 } from "lucide-react"

interface GiftOption {
  id: string
  type: string
  value: number
  name: string
  description: string
  popular?: boolean
}

interface GiftCardFormProps {
  giftOptions: GiftOption[]
  services: Service[]
}

export function GiftCardForm({ giftOptions, services }: GiftCardFormProps) {
  const [selectedType, setSelectedType] = useState<"amount" | "service">("amount")
  const [selectedValue, setSelectedValue] = useState<string>("")
  const [deliveryMethod, setDeliveryMethod] = useState<"email" | "physical">("email")
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    recipientName: "",
    recipientEmail: "",
    message: "",
    address: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const getPrice = () => {
    if (selectedType === "amount" && selectedValue) {
      const option = giftOptions.find((o) => o.id === selectedValue)
      return option?.value || 0
    } else if (selectedType === "service" && selectedValue) {
      const service = services.find((s) => s.id === selectedValue)
      return service?.price || 0
    }
    return 0
  }

  const deliveryFee = deliveryMethod === "physical" ? 5 : 0
  const totalPrice = getPrice() + deliveryFee

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsComplete(true)
    setIsSubmitting(false)
  }

  const isFormValid = () => {
    const baseValid =
      selectedValue !== "" &&
      formData.senderName.trim() !== "" &&
      formData.senderEmail.trim() !== "" &&
      formData.recipientName.trim() !== ""

    if (deliveryMethod === "email") {
      return baseValid && formData.recipientEmail.trim() !== ""
    } else {
      return baseValid && formData.address.trim() !== ""
    }
  }

  if (isComplete) {
    return (
      <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border/50 shadow-sm">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h2 className="font-serif text-3xl text-foreground mb-4">
          Commande confirmée !
        </h2>
        <p className="text-muted-foreground mb-8">
          Merci pour votre commande. {deliveryMethod === "email"
            ? `Le bon cadeau sera envoyé à ${formData.recipientEmail} dans quelques instants.`
            : "Le coffret sera expédié sous 2-3 jours ouvrés."}
        </p>

        <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
          <h3 className="font-medium text-foreground mb-4">Récapitulatif</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bon cadeau</span>
              <span className="font-medium">{formatPrice(getPrice())}</span>
            </div>
            {deliveryFee > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Livraison</span>
                <span className="font-medium">{formatPrice(deliveryFee)}</span>
              </div>
            )}
            <div className="pt-2 border-t border-border flex justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="font-serif text-xl text-accent">
                {formatPrice(totalPrice)}
              </span>
            </div>
          </div>
        </div>

        <Button onClick={() => { setIsComplete(false); setSelectedValue(""); setFormData({ senderName: "", senderEmail: "", recipientName: "", recipientEmail: "", message: "", address: "" }) }}>
          Commander un autre bon
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Step 1: Choose Type */}
      <div className="bg-card rounded-2xl p-6 border border-border/50">
        <h3 className="font-serif text-xl text-foreground mb-4">
          1. Type de bon cadeau
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            type="button"
            onClick={() => { setSelectedType("amount"); setSelectedValue("") }}
            className={cn(
              "p-4 rounded-xl border-2 transition-all text-left",
              selectedType === "amount"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            )}
          >
            <Gift className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-medium text-foreground">Montant libre</h4>
            <p className="text-sm text-muted-foreground">
              Le bénéficiaire choisit son soin
            </p>
          </button>
          <button
            type="button"
            onClick={() => { setSelectedType("service"); setSelectedValue("") }}
            className={cn(
              "p-4 rounded-xl border-2 transition-all text-left",
              selectedType === "service"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            )}
          >
            <Gift className="w-6 h-6 text-accent mb-2" />
            <h4 className="font-medium text-foreground">Soin spécifique</h4>
            <p className="text-sm text-muted-foreground">
              Offrez un soin précis
            </p>
          </button>
        </div>

        {/* Options */}
        {selectedType === "amount" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {giftOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedValue(option.id)}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all text-center relative",
                  selectedValue === option.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                )}
              >
                {option.popular && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-accent text-accent-foreground rounded-full text-[10px] font-medium">
                    Populaire
                  </span>
                )}
                <span className="font-serif text-2xl text-foreground">
                  {option.value}€
                </span>
                {selectedValue === option.id && (
                  <Check className="w-4 h-4 text-primary absolute top-2 right-2" />
                )}
              </button>
            ))}
          </div>
        )}

        {selectedType === "service" && (
          <Select value={selectedValue} onValueChange={setSelectedValue}>
            <SelectTrigger>
              <SelectValue placeholder="Choisir un soin" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.name} - {formatPrice(service.price)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      {/* Step 2: Delivery Method */}
      <div className="bg-card rounded-2xl p-6 border border-border/50">
        <h3 className="font-serif text-xl text-foreground mb-4">
          2. Mode de livraison
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setDeliveryMethod("email")}
            className={cn(
              "p-4 rounded-xl border-2 transition-all text-left",
              deliveryMethod === "email"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            )}
          >
            <Mail className="w-6 h-6 text-primary mb-2" />
            <h4 className="font-medium text-foreground">Par email</h4>
            <p className="text-sm text-muted-foreground">
              Livraison instantanée
            </p>
            <p className="text-sm font-medium text-accent mt-2">Gratuit</p>
          </button>
          <button
            type="button"
            onClick={() => setDeliveryMethod("physical")}
            className={cn(
              "p-4 rounded-xl border-2 transition-all text-left",
              deliveryMethod === "physical"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            )}
          >
            <Truck className="w-6 h-6 text-accent mb-2" />
            <h4 className="font-medium text-foreground">Écrin élégant</h4>
            <p className="text-sm text-muted-foreground">
              Livraison 2-3 jours
            </p>
            <p className="text-sm font-medium text-accent mt-2">+5€</p>
          </button>
        </div>
      </div>

      {/* Step 3: Recipient Details */}
      <div className="bg-card rounded-2xl p-6 border border-border/50">
        <h3 className="font-serif text-xl text-foreground mb-4">
          3. Informations
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-foreground mb-4">Vos informations</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Votre nom *
                </label>
                <Input
                  value={formData.senderName}
                  onChange={(e) =>
                    setFormData({ ...formData, senderName: e.target.value })
                  }
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Votre email *
                </label>
                <Input
                  type="email"
                  value={formData.senderEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, senderEmail: e.target.value })
                  }
                  placeholder="votre@email.com"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Le destinataire</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nom du destinataire *
                </label>
                <Input
                  value={formData.recipientName}
                  onChange={(e) =>
                    setFormData({ ...formData, recipientName: e.target.value })
                  }
                  placeholder="Nom du destinataire"
                />
              </div>
              {deliveryMethod === "email" && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email du destinataire *
                  </label>
                  <Input
                    type="email"
                    value={formData.recipientEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, recipientEmail: e.target.value })
                    }
                    placeholder="destinataire@email.com"
                  />
                </div>
              )}
              {deliveryMethod === "physical" && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Adresse de livraison *
                  </label>
                  <Textarea
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    placeholder="Adresse complète"
                    rows={3}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-foreground mb-2">
            Message personnalisé (optionnel)
          </label>
          <Textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Ajoutez un message personnel..."
            rows={3}
          />
        </div>
      </div>

      {/* Summary & Submit */}
      <div className="bg-card rounded-2xl p-6 border border-border/50">
        <h3 className="font-serif text-xl text-foreground mb-4">Récapitulatif</h3>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Bon cadeau</span>
            <span className="font-medium">{formatPrice(getPrice())}</span>
          </div>
          {deliveryFee > 0 && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Livraison écrin</span>
              <span className="font-medium">{formatPrice(deliveryFee)}</span>
            </div>
          )}
          <div className="pt-3 border-t border-border flex justify-between">
            <span className="font-medium text-foreground">Total</span>
            <span className="font-serif text-2xl text-accent">
              {formatPrice(totalPrice)}
            </span>
          </div>
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
              Traitement en cours...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5 mr-2" />
              Procéder au paiement - {formatPrice(totalPrice)}
            </>
          )}
        </Button>

        <p className="mt-4 text-sm text-muted-foreground text-center">
          Paiement sécurisé par carte bancaire. Vous serez redirigé vers notre
          plateforme de paiement sécurisée.
        </p>
      </div>
    </form>
  )
}
