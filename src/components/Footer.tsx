import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 border-t border-emerald-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <Icon name="Scale" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-beige-100">Адвокат</h3>
                <p className="text-sm text-emerald-300">Уголовное право</p>
              </div>
            </div>
            <p className="text-beige-200 leading-relaxed">
              Профессиональная защита ваших прав и интересов в уголовном
              процессе. 15 лет опыта успешной адвокатской практики.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-beige-100 mb-4">
              Разделы
            </h4>
            <nav className="space-y-2">
              <a
                href="#home"
                className="block text-beige-200 hover:text-emerald-300 transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="block text-beige-200 hover:text-emerald-300 transition-colors"
              >
                Обо мне
              </a>
              <a
                href="#services"
                className="block text-beige-200 hover:text-emerald-300 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#testimonials"
                className="block text-beige-200 hover:text-emerald-300 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="block text-beige-200 hover:text-emerald-300 transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-beige-100 mb-4">
              Контакты
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-emerald-300" />
                <span className="text-beige-200">+7 (xxx) xxx-xx-xx</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-emerald-300" />
                <span className="text-beige-200">lawyer@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={18} className="text-emerald-300" />
                <span className="text-beige-200">
                  г. Москва, ул. Примерная, д. 1
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-8 text-center">
          <p className="text-beige-200">
            © 2024 Адвокат по уголовному праву. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
