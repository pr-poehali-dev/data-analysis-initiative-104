import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Голосовой дневник",
    description: "Говорите каждый день — о жизни, мыслях, опыте. ИИ запоминает всё и учится думать как вы.",
    icon: "mic",
    badge: "Голос",
  },
  {
    title: "Личный ИИ-помощник",
    description: "Чем больше вы общаетесь, тем умнее становится ваш персональный ИИ — он знает вас лучше любого другого.",
    icon: "brain",
    badge: "Ваш ИИ",
  },
  {
    title: "Цифровое наследие",
    description: "Ваши знания, ценности и опыт сохранятся навсегда и будут переданы детям и внукам в живой форме.",
    icon: "globe",
    badge: "Вечность",
  },
  {
    title: "Вклад в развитие ИИ",
    description: "Ваши данные (анонимно) улучшают общую модель — вы буквально участвуете в создании ИИ будущего.",
    icon: "zap",
    badge: "Прогресс",
  },
  {
    title: "Апгрейд с каждым днём",
    description: "Ваш помощник обновляется автоматически: новые навыки, лучшее понимание контекста, точнее ответы.",
    icon: "target",
    badge: "Рост",
  },
  {
    title: "Полная приватность",
    description: "Вы решаете, что остаётся только вашим, а что идёт в общий фонд знаний. Контроль — у вас.",
    icon: "lock",
    badge: "Защита",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Говори — и оставь след в истории</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Каждое ваше слово делает ИИ умнее, а ваше наследие — бессмертным
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "🧠"}
                    {feature.icon === "lock" && "🔒"}
                    {feature.icon === "globe" && "🌐"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "mic" && "🎙️"}
                    {feature.icon === "target" && "📈"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
