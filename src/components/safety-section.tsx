import Icon from "@/components/ui/icon"

const privacyFeatures = [
  {
    icon: "Shield",
    title: "Только ваша семья",
    description:
      "Весь архив — голоса, воспоминания, знания — доступен исключительно членам вашей семьи. Ни платформа, ни третьи лица не имеют доступа к вашим данным.",
  },
  {
    icon: "Users",
    title: "Семейный аккаунт",
    description:
      "Один общий аккаунт для всей семьи. Зайти можно с любого устройства и любой платформы — телефон, планшет, компьютер — везде одинаково.",
  },
  {
    icon: "Lock",
    title: "Шифрование данных",
    description:
      "Все голосовые записи и воспоминания хранятся в зашифрованном виде. Даже мы не можем их прочитать — ключ только у вашей семьи.",
  },
  {
    icon: "Heart",
    title: "Наследование архива",
    description:
      "Семейный ИИ-архив передаётся из поколения в поколение. Дети и внуки пополняют его своими голосами и продолжают дело предков.",
  },
  {
    icon: "Globe",
    title: "Доступ с любой платформы",
    description:
      "Не нужно устанавливать приложения. Просто войдите через браузер — ваш семейный архив всегда рядом, где бы вы ни находились.",
  },
  {
    icon: "TreePine",
    title: "Живая семейная память",
    description:
      "Каждый член семьи добавляет свой голос и опыт. ИИ объединяет их в единое живое дерево знаний, которое растёт вместе с родом.",
  },
]

export function SafetySection() {
  return (
    <section id="safety" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Семейный архив — только для своих
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-space-mono">
            Всё, что вы записываете, принадлежит только вашей семье. Навсегда.
            Никакой третьей стороны, никакого постороннего доступа.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {privacyFeatures.map((item, index) => (
            <div
              key={index}
              className="border border-red-500/20 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Icon name={item.icon} size={24} className="text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white font-orbitron">{item.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed font-space-mono text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Visual accent */}
        <div className="mt-16 border border-red-500/30 rounded-2xl p-8 bg-gradient-to-r from-red-500/5 to-transparent text-center">
          <p className="text-2xl font-bold text-white font-orbitron mb-3">
            Ваша семья — ваши правила
          </p>
          <p className="text-gray-300 font-space-mono max-w-2xl mx-auto">
            Сами решаете, кто из родственников имеет доступ к архиву.
            Добавляйте новых членов семьи, и они сразу подключатся к общей памяти рода.
          </p>
        </div>
      </div>
    </section>
  )
}
