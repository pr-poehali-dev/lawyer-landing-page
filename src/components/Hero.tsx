import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-400/30">
                Защита ваших прав
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Профессиональная
              <span className="block text-yellow-400">защита</span>
              по уголовным делам
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Опытный адвокат с 15-летним стажем. Специализируюсь на защите по
              уголовным делам. Индивидуальный подход и результат в каждом деле.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 professional-shadow">
                Получить консультацию
              </button>
              <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300">
                Мои услуги
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  200+
                </div>
                <div className="text-sm text-gray-400">Выигранных дел</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  15
                </div>
                <div className="text-sm text-gray-400">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  24/7
                </div>
                <div className="text-sm text-gray-400">Поддержка</div>
              </div>
            </div>
          </div>

          {/* Themis Illustration */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Main Scales */}
              <div className="themis-glow">
                <div className="w-80 h-80 relative">
                  {/* Scales Base */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-2 h-32 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
                  </div>

                  {/* Cross Bar */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-12">
                    <div className="w-48 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                  </div>

                  {/* Left Scale */}
                  <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 -mt-12 scales-left">
                    <div className="w-16 h-16 border-4 border-yellow-400 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <Icon
                        name="Scale"
                        size={24}
                        className="text-yellow-400"
                      />
                    </div>
                  </div>

                  {/* Right Scale */}
                  <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 -mt-12 scales-right">
                    <div className="w-16 h-16 border-4 border-yellow-400 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <Icon
                        name="Scale"
                        size={24}
                        className="text-yellow-400"
                      />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                      <Icon name="Crown" size={20} className="text-slate-900" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Legal Icons */}
              <div className="absolute -top-10 -right-10 w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center border border-yellow-400/30 animate-pulse">
                <Icon name="BookOpen" size={24} className="text-yellow-400" />
              </div>

              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center border border-yellow-400/30 animate-pulse">
                <Icon name="Shield" size={24} className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
