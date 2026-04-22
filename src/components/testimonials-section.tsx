import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Сергей Волков",
    role: "Участник платформы, 58 лет, Самара",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Я начал записывать свои воспоминания о работе инженером. Теперь мой ИИ рассказывает внукам истории моими словами. Это не технология — это чудо.",
  },
  {
    name: "Марина Соколова",
    role: "Участница платформы, 43 года, Москва",
    avatar: "/professional-woman-scientist.png",
    content:
      "Каждое утро 10 минут разговора с ИИ. Через полгода он знает меня лучше, чем коллеги за годы. И я чувствую, что оставляю что-то важное детям.",
  },
  {
    name: "Юлия Ким",
    role: "Участница платформы, 35 лет, Новосибирск",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Мне нравится, что я не просто пользуюсь ИИ — я помогаю его создавать. Это ощущение причастности к чему-то большому из обычной квартиры.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Живые истории участников</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Обычные люди, которые уже оставляют цифровой след для своих близких
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
