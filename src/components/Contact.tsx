import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (xxx) xxx-xx-xx",
      description: "Звонки принимаю круглосуточно",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "lawyer@example.com",
      description: "Отвечу в течение часа",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "г. Москва, ул. Примерная, д. 1",
      description: "Прием по предварительной записи",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      value: "Пн-Пт: 9:00-20:00",
      description: "Экстренные консультации 24/7",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-400/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-400/30 mb-4">
            Контакты
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-beige-100 mb-6">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-beige-200 max-w-3xl mx-auto">
            Готов оказать профессиональную юридическую помощь в любое время
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-emerald-800/50 rounded-2xl p-6 border border-emerald-700 professional-shadow"
                >
                  <div className="w-12 h-12 emerald-gradient rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      name={info.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-beige-100 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-emerald-300 font-medium mb-1">
                    {info.value}
                  </p>
                  <p className="text-beige-300 text-sm">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-2xl p-8 border border-red-600/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Icon name="AlertTriangle" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-beige-100 mb-2">
                    Экстренная помощь
                  </h3>
                  <p className="text-beige-200 mb-4">
                    При задержании, обыске или вызове на допрос звоните
                    немедленно!
                  </p>
                  <a
                    href="tel:+7"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Icon name="Phone" size={20} />
                    <span>Срочный вызов</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-emerald-800/50 rounded-2xl p-8 border border-emerald-700 professional-shadow">
            <h3 className="text-2xl font-bold text-beige-100 mb-6">
              Получить консультацию
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-beige-200 mb-2">Ваше имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-emerald-700 border border-emerald-600 rounded-lg text-beige-100 focus:border-emerald-400 focus:outline-none transition-colors"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-beige-200 mb-2">Телефон</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-emerald-700 border border-emerald-600 rounded-lg text-beige-100 focus:border-emerald-400 focus:outline-none transition-colors"
                  placeholder="+7 (xxx) xxx-xx-xx"
                />
              </div>

              <div>
                <label className="block text-beige-200 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-emerald-700 border border-emerald-600 rounded-lg text-beige-100 focus:border-emerald-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-beige-200 mb-2">
                  Описание ситуации
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-emerald-700 border border-emerald-600 rounded-lg text-beige-100 focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                  placeholder="Кратко опишите вашу ситуацию..."
                ></textarea>
              </div>

              <button className="w-full px-8 py-4 emerald-gradient text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 professional-shadow">
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
