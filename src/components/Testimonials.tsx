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
    <section id="testimonials" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-400/20 text-emerald-600 rounded-full text-sm font-medium border border-emerald-400/30 mb-4">
            Отзывы
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-emerald-800 mb-6">
            Что говорят мои клиенты
          </h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Доверие клиентов — главная оценка моей работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-stone-200 to-stone-300 rounded-2xl p-8 border border-stone-400 professional-shadow"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Icon
                    key={starIndex}
                    name="Star"
                    size={20}
                    className="text-emerald-500 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Icon
                  name="Quote"
                  size={32}
                  className="text-emerald-500/50 mb-4"
                />
                <p className="text-emerald-700 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Client Info */}
              <div className="border-t border-stone-400 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-emerald-600">
                      {testimonial.case}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
            <div className="text-emerald-700">Положительных исходов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
            <div className="text-emerald-700">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">15</div>
            <div className="text-emerald-700">Лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
            <div className="text-emerald-700">Доступность</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
