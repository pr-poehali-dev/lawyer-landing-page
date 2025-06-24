import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна К.",
      case: "Дело об экономическом преступлении",
      text: "Профессиональный подход, внимание к деталям и отличное знание законодательства. Дело было выиграно благодаря грамотной защите.",
      rating: 5,
    },
    {
      name: "Михаил С.",
      case: "Уголовное дело по ст. 158 УК РФ",
      text: "Очень благодарен за помощь. Адвокат смог добиться прекращения дела. Рекомендую как профессионала своего дела.",
      rating: 5,
    },
    {
      name: "Елена Р.",
      case: "Защита по статье 159 УК РФ",
      text: "Сложное дело было решено в нашу пользу. Постоянная связь, информирование о ходе процесса. Очень довольна результатом.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-400/30 mb-4">
            Отзывы
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Что говорят мои клиенты
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Доверие клиентов — главная оценка моей работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 professional-shadow"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Icon
                    key={starIndex}
                    name="Star"
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Icon
                  name="Quote"
                  size={32}
                  className="text-yellow-400/50 mb-4"
                />
                <p className="text-gray-300 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Client Info */}
              <div className="border-t border-slate-600 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.case}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-gray-300">Положительных исходов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-300">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">15</div>
            <div className="text-gray-300">Лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-300">Доступность</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
