import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Нужны ли технические знания для участия?",
      answer:
        "Совсем нет. Вы просто говорите голосом — как в обычном разговоре. Никаких программ, кодов или специальных навыков. Если вы умеете разговаривать — вы уже готовы.",
    },
    {
      question: "Сколько времени нужно уделять платформе?",
      answer:
        "Достаточно 5–15 минут в день в свободное время. Утром за кофе, вечером перед сном — в любой момент, когда удобно. Никаких обязательств и расписаний.",
    },
    {
      question: "Мои данные в безопасности?",
      answer:
        "Да. Вы сами выбираете, что остаётся только вашим (личный ИИ-помощник), а что идёт анонимно в общий фонд обучения. Личные истории и воспоминания никуда не передаются без вашего согласия.",
    },
    {
      question: "Как мои знания передадутся потомкам?",
      answer:
        "Ваш личный ИИ-помощник накапливает ваш опыт, манеру речи и ценности. После вашего решения он может быть передан близким — и они смогут разговаривать с ним, задавать вопросы, слышать ваши мысли.",
    },
    {
      question: "Что именно я делаю для развития ИИ?",
      answer:
        "Вы обогащаете датасет живой человеческой речью, оцениваете ответы ИИ и помогаете модели понимать естественный язык лучше. Это реальный вклад в то, каким станет ИИ через 5–10 лет.",
    },
    {
      question: "Когда мой личный ИИ станет «умным»?",
      answer:
        "Уже с первых недель общения ваш помощник начнёт адаптироваться под вас. Через 3–6 месяцев регулярного общения вы заметите, насколько точно он понимает ваш контекст и стиль мышления.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что важно знать перед тем, как начать участвовать
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
