import Icon from "@/components/ui/icon";

const About = () => {
  const achievements = [
    {
      icon: "Award",
      title: "Высшая категория",
      description: "Адвокат высшей квалификационной категории",
    },
    {
      icon: "GraduationCap",
      title: "Образование",
      description: "МГУ им. М.В. Ломоносова, юридический факультет",
    },
    {
      icon: "Users",
      title: "Клиенты",
      description: "Более 500 успешно защищенных клиентов",
    },
  ];

  return (
    <section id="about" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-stone-200 to-stone-300 rounded-2xl flex items-center justify-center professional-shadow">
                <Icon name="User" size={120} className="text-emerald-600" />
              </div>

              {/* Decorative Badge */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 emerald-gradient rounded-xl flex items-center justify-center professional-shadow">
                <Icon name="Scale" size={32} className="text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-emerald-400/20 text-emerald-600 rounded-full text-sm font-medium border border-emerald-400/30">
                Обо мне
              </span>
            </div>

            <h2 className="text-4xl font-bold text-emerald-800 mb-6">
              Профессиональная защита ваших интересов
            </h2>

            <p className="text-lg text-emerald-700 mb-8 leading-relaxed">
              Меня зовут [Имя Фамилия], я адвокат с 15-летним опытом работы в
              сфере уголовного права. За годы практики я успешно защитил сотни
              клиентов по различным категориям уголовных дел.
            </p>

            <p className="text-lg text-emerald-700 mb-8 leading-relaxed">
              Моя философия — каждый человек имеет право на квалифицированную
              защиту. Я подхожу к каждому делу с максимальной ответственностью и
              добиваюсь лучшего результата для своих клиентов.
            </p>

            {/* Achievements */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={achievement.icon as any}
                      size={24}
                      className="text-emerald-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-800 mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-emerald-700">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
