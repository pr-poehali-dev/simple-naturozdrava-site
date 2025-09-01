import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-blue-600" size={24} />
              <span className="font-bold text-xl text-slate-900">МедЦентр</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#doctor" className="text-slate-600 hover:text-blue-600 transition-colors">О докторе</a>
              <a href="#consultation" className="text-slate-600 hover:text-blue-600 transition-colors">Консультации</a>
              <a href="#reviews" className="text-slate-600 hover:text-blue-600 transition-colors">Отзывы</a>
              <a href="#contacts" className="text-slate-600 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Медицинские консультации
              <span className="text-blue-600 block">высшего качества</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Профессиональная медицинская помощь с индивидуальным подходом к каждому пациенту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на приём
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 px-8 py-4">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600">Комплексный подход к вашему здоровью</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader className="text-center">
                <Icon name="Stethoscope" className="mx-auto text-blue-600 mb-4" size={48} />
                <CardTitle className="text-slate-900">Общая терапия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">Комплексное обследование и лечение</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader className="text-center">
                <Icon name="Brain" className="mx-auto text-green-600 mb-4" size={48} />
                <CardTitle className="text-slate-900">Неврология</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">Диагностика и лечение нервной системы</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader className="text-center">
                <Icon name="Heart" className="mx-auto text-red-500 mb-4" size={48} />
                <CardTitle className="text-slate-900">Кардиология</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">Забота о здоровье сердца</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader className="text-center">
                <Icon name="Activity" className="mx-auto text-purple-600 mb-4" size={48} />
                <CardTitle className="text-slate-900">Диагностика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">Современные методы обследования</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Doctor */}
      <section id="doctor" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">О докторе</h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Иванова Елена Сергеевна</h3>
              <p className="text-lg text-slate-600 mb-6">
                Врач высшей категории с 15-летним опытом работы в области терапии и диагностики. 
                Кандидат медицинских наук, автор более 30 научных публикаций.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="GraduationCap" className="text-blue-600" size={24} />
                  <span className="text-slate-700">Первый МГМУ им. И.М. Сеченова</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="text-blue-600" size={24} />
                  <span className="text-slate-700">15+ лет практического опыта</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="text-blue-600" size={24} />
                  <span className="text-slate-700">Более 5000 довольных пациентов</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/img/3a79ccfd-f1aa-473b-ac32-3055ea930f00.jpg" 
                  alt="Доктор Иванова Елена Сергеевна"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section id="consultation" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Консультации</h2>
            <p className="text-xl text-slate-600">Выберите удобный формат консультации</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-slate-900">Очная консультация</CardTitle>
                  <Icon name="MapPin" className="text-blue-600" size={24} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">Полноценный осмотр в медицинском центре</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Длительность:</span>
                    <span className="text-slate-900">60 минут</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Стоимость:</span>
                    <span className="text-slate-900 font-semibold">3500 ₽</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Записаться на приём
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-slate-900">Онлайн консультация</CardTitle>
                  <Icon name="Video" className="text-green-600" size={24} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">Удобная консультация из дома</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Длительность:</span>
                    <span className="text-slate-900">45 минут</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Стоимость:</span>
                    <span className="text-slate-900 font-semibold">2500 ₽</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Записаться онлайн
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Отзывы пациентов</h2>
            <p className="text-xl text-slate-600">Что говорят о нас наши пациенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-slate-900">Мария К.</CardTitle>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Icon key={star} name="Star" className="text-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  "Отличный врач! Очень внимательная и профессиональная. Быстро поставила правильный диагноз."
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-green-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-slate-900">Александр П.</CardTitle>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Icon key={star} name="Star" className="text-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  "Прекрасный сервис! Удобная запись онлайн, никаких очередей. Доктор очень компетентный."
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-slate-900">Екатерина В.</CardTitle>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Icon key={star} name="Star" className="text-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  "Очень довольна лечением. Елена Сергеевна всё доступно объяснила и назначила эффективное лечение."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-slate-300">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Адрес</h3>
                  <p className="text-slate-300">г. Москва, ул. Медицинская, д. 15</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Телефон</h3>
                  <p className="text-slate-300">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-slate-300">info@medcentr.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Режим работы</h3>
                  <p className="text-slate-300">Пн-Пт: 9:00-20:00, Сб: 10:00-18:00</p>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white text-slate-900">
                <CardHeader>
                  <CardTitle>Записаться на приём</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Услуга</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Общая терапия</option>
                      <option>Неврология</option>
                      <option>Кардиология</option>
                      <option>Диагностика</option>
                    </select>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Heart" className="text-blue-400" size={24} />
              <span className="font-bold text-xl text-white">МедЦентр</span>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">© 2024 МедЦентр. Все права защищены.</p>
              <p className="text-sm">Лицензия № ЛО-77-01-012345 от 15.03.2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;