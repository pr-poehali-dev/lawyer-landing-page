import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <Icon name="Scale" size={24} className="text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Адвокат</h3>
                <p className="text-sm text-yellow-400">Уголовное право</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Профессиональная защита ваших прав и интересов в уголовном
              процессе. 15 лет опыта успешной адвокатской практики.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Разделы</h4>
            <nav className="space-y-2">
              <a
                href="#home"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Обо мне
              </a>
              <a
                href="#services"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#testimonials"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-yellow-400" />
                <span className="text-gray-400">+7 (xxx) xxx-xx-xx</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-yellow-400" />
                <span className="text-gray-400">lawyer@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={18} className="text-yellow-400" />
                <span className="text-gray-400">
                  г. Москва, ул. Примерная, д. 1
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Адвокат по уголовному праву. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
