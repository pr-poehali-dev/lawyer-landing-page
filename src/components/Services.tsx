import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "ShieldCheck",
      title: "Защита в суде",
      description:
        "Представительство интересов на всех стадиях уголовного процесса",
      features: [
        "Участие в следственных действиях",
        "Защита в суде первой инстанции",
        "Апелляционная защита",
      ],
    },
    {
      icon: "FileText",
      title: "Правовая экспертиза",
      description: "Анализ уголовного дела и оценка перспектив защиты",
      features: [
        "Изучение материалов дела",
        "Правовая оценка",
        "Стратегия защиты",
      ],
    },
    {
      icon: "MessageCircle",
      title: "Консультации",
      description: "Юридические консультации по вопросам уголовного права",
      features: [
        "Первичная консультация",
        "Консультации для родственников",
        "Срочные консультации 24/7",
      ],
    },
    {
      icon: "Users",
      title: "Сопровождение",
      description: "Полное юридическое сопровождение на всех этапах",
      features: [
        "Работа со следствием",
        "Подготовка документов",
        "Психологическая поддержка",
      ],
    },
    {
      icon: "Briefcase",
      title: "Экономические преступления",
      description: "Защита по делам экономической направленности",
      features: [
        "Мошенничество",
        "Налоговые преступления",
        "Легализация доходов",
      ],
    },
    {
      icon: "Home",
      title: "Имущественные споры",
      description: "Защита по делам против собственности",
      features: ["Кражи и грабежи", "Разбойные нападения", "Вымогательство"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-400/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-400/30 mb-4">
            Услуги
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-beige-100 mb-6">
            Специализация по уголовному праву
          </h2>
          <p className="text-xl text-beige-200 max-w-3xl mx-auto">
            Оказываю полный спектр услуг по защите прав и интересов клиентов в
            уголовном процессе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-emerald-800/50 rounded-2xl p-8 border border-emerald-700 hover:border-emerald-400/30 transition-all duration-300 professional-shadow hover:scale-105"
            >
              <div className="w-16 h-16 emerald-gradient rounded-xl flex items-center justify-center mb-6">
                <Icon
                  name={service.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>

              <h3 className="text-2xl font-bold text-beige-100 mb-4">
                {service.title}
              </h3>
              <p className="text-beige-200 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 emerald-gradient rounded-full"></div>
                    <span className="text-beige-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-400/10 to-emerald-600/10 rounded-2xl p-8 border border-emerald-400/30">
            <h3 className="text-3xl font-bold text-beige-100 mb-4">
              Нужна консультация?
            </h3>
            <p className="text-xl text-beige-200 mb-6">
              Свяжитесь со мной прямо сейчас для получения профессиональной
              помощи
            </p>
            <button className="px-8 py-4 emerald-gradient text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 professional-shadow">
              Записаться на консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
