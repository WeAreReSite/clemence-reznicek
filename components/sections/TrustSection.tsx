import { Award, Shield, Heart, Leaf } from "lucide-react"

const trustPoints = [
  {
    icon: Award,
    title: "Praticienne Certifiée",
    description: "Formée en Réflexologie Bretagne, Zensphère et auprès de professionnels reconnus en Bretagne.",
  },
  {
    icon: Leaf,
    title: "Produits de Qualité",
    description: "Utilisation de produits professionnels de haute qualité, dont le Ghee bio pour le Bol Kansu.",
  },
  {
    icon: Heart,
    title: "Soins Personnalisés",
    description: "Chaque soin est adapté à vos besoins spécifiques pour une expérience sur mesure.",
  },
  {
    icon: Shield,
    title: "Écoute & Bienveillance",
    description: "Un temps d'échange avant et après chaque séance pour comprendre vos besoins et attentes.",
  },
]

export function TrustSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-spa relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="group flex flex-col items-center text-center p-6 lg:p-8 rounded-2xl bg-white/50 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:from-primary group-hover:to-primary/80">
                <point.icon className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
