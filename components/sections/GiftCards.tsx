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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Visual Side */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-3xl blur-3xl -z-10 scale-90" />

            {/* Card Display */}
            <div className="relative bg-card border border-border/50 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-lg card-hover">
              {/* Gift Icon */}
              <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-4 sm:mb-6">
                <Gift className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>

              {/* Card Title */}
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4">
                Carte Cadeau
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
                Un cadeau qui fait du bien
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                {giftCardData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 min-w-0"
                  >
                    <Sparkles className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="flex items-center gap-2 text-primary">
                <Heart className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />
                <span className="text-xs sm:text-sm font-medium">Faites plaisir à vos proches</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="min-w-0">
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              {giftCardData.subtitle}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6 [overflow-wrap:break-word] [word-break:break-word]">
              {giftCardData.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 [overflow-wrap:break-word]">
              {giftCardData.description}
            </p>

            {/* Benefits List */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Gift className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-foreground mb-1 text-sm sm:text-base">Personnalisable</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Choisissez le montant ou le soin spécifique que vous souhaitez offrir.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-foreground mb-1 text-sm sm:text-base">Pour toutes les occasions</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Anniversaire, fête des mères, Noël, ou simplement pour faire plaisir.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-foreground mb-1 text-sm sm:text-base">Facile à utiliser</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Votre proche pourra réserver en ligne ou par téléphone avec son code cadeau.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <Button size="lg" className="w-full text-sm sm:text-base" asChild>
                <Link href={giftCardData.ctaHref}>
                  {giftCardData.ctaText}
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full text-sm sm:text-base" asChild>
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
