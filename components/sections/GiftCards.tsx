import { Gift, Heart, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface GiftCardData {
  title: string
  subtitle: string
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
}

interface GiftCardsProps {
  data?: GiftCardData
}

const defaultData: GiftCardData = {
  title: 'Offrez un Moment de Bien-Être',
  subtitle: 'La carte cadeau parfaite',
  description: 'Les cartes cadeaux Syl\'Vie Bien-Etre sont le cadeau parfait pour offrir détente et sérénité à vos proches. Valables sur tous les soins, elles permettent à la personne de votre choix de choisir le moment et le soin qui lui convient.',
  features: [
    'Valable sur tous les soins',
    'Durée de validité généreuse',
    'Personnalisable',
    'Envoi rapide'
  ],
  ctaText: 'Commander une carte cadeau',
  ctaHref: '/contact'
}

export function GiftCards({ data = defaultData }: GiftCardsProps) {
  const giftCardData = data || defaultData

  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container-spa">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual Side */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-3xl blur-3xl -z-10" />

            {/* Card Display */}
            <div className="relative bg-card border border-border/50 rounded-2xl p-8 lg:p-12 shadow-lg card-hover">
              {/* Gift Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6">
                <Gift className="w-10 h-10 text-white" />
              </div>

              {/* Card Title */}
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Carte Cadeau
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Un cadeau qui fait du bien
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {giftCardData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="flex items-center gap-2 text-primary">
                <Heart className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">Faites plaisir à vos proches</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              {giftCardData.subtitle}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              {giftCardData.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {giftCardData.description}
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Gift className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Personnalisable</h4>
                  <p className="text-sm text-muted-foreground">
                    Choisissez le montant ou le soin spécifique que vous souhaitez offrir.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Pour toutes les occasions</h4>
                  <p className="text-sm text-muted-foreground">
                    Anniversaire, fête des mères, Noël, ou simplement pour faire plaisir.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Facile à utiliser</h4>
                  <p className="text-sm text-muted-foreground">
                    Votre proche pourra réserver en ligne ou par téléphone avec son code cadeau.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href={giftCardData.ctaHref}>
                  {giftCardData.ctaText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/soins">
                  Voir tous les soins
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
