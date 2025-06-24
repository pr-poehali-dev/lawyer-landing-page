import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Главная", href: "#home" },
    { label: "Обо мне", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Контакты", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-800/95 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <Icon name="Scale" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-beige-100">Адвокат</h1>
              <p className="text-sm text-emerald-300">Уголовное право</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-beige-200 hover:text-emerald-300 transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+7"
              className="flex items-center space-x-2 text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              <Icon name="Phone" size={18} />
              <span className="font-medium">+7 (xxx) xxx-xx-xx</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-beige-100"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-emerald-500/20">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-beige-200 hover:text-emerald-300 transition-colors duration-300 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+7"
                className="flex items-center space-x-2 text-emerald-300 hover:text-emerald-200 transition-colors mt-4"
              >
                <Icon name="Phone" size={18} />
                <span className="font-medium">+7 (xxx) xxx-xx-xx</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
