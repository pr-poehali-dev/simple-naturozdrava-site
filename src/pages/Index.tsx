import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const products = [
    {
      id: 1,
      name: "Генифит-гель - GENI GEL Гино-activ",
      description: "Косметическое средство для интимной гигиены с натуральными компонентами",
      price: 1890,
      oldPrice: 2290,
      image: "/placeholder.svg",
      category: "Интимная гигиена"
    },
    {
      id: 2,
      name: "Генифит Гель - GENI Gel PH-баланс",
      description: "Косметическое средство для интимной гигиены, поддерживающее естественный pH-баланс",
      price: 1790,
      image: "/placeholder.svg",
      category: "Интимная гигиена"
    },
    {
      id: 3,
      name: "Гель для суставов - Суставной",
      description: "Гель-концентрат природная сила для активной жизни, восстановление и поддержание здоровья суставов",
      price: 1650,
      image: "/placeholder.svg",
      category: "Здоровье суставов"
    },
    {
      id: 4,
      name: "Генифит Гель комплексный уход",
      description: "Уникальный комплексный подход к уходу за телом с натуральными активными компонентами",
      price: 2190,
      image: "/placeholder.svg",
      category: "Комплексный уход"
    },
    {
      id: 5,
      name: "GENI GEL Восстановительный",
      description: "Специализированный гель для восстановления и регенерации тканей с природными экстрактами",
      price: 1950,
      image: "/placeholder.svg",
      category: "Восстановление"
    },
    {
      id: 6,
      name: "Генифит-гель Защитный",
      description: "Защитное косметическое средство с антибактериальными свойствами для ежедневного ухода",
      price: 1450,
      image: "/placeholder.svg",
      category: "Защита и уход"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-green-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Icon name="Leaf" className="text-green-600" size={28} />
              <span className="font-bold text-2xl text-green-800">NaturoZdrava</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-green-700 hover:text-green-600 transition-colors font-medium">Главная</a>
              <a href="#products" className="text-green-700 hover:text-green-600 transition-colors font-medium">Товары</a>
              <a href="#about" className="text-green-700 hover:text-green-600 transition-colors font-medium">О нас</a>
              <a href="#contacts" className="text-green-700 hover:text-green-600 transition-colors font-medium">Контакты</a>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="relative border-green-200 text-green-700 hover:bg-green-50">
                <Icon name="ShoppingCart" size={18} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs bg-green-600 hover:bg-green-600">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Заказать
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-green-900 mb-6">
              Натуральная косметика
              <span className="text-green-600 block">для здоровья и красоты</span>
            </h1>
            <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
              Производим органическую косметику из натуральных компонентов без химии и консервантов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Смотреть товары
              </Button>
              <Button size="lg" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-4">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">100% Натурально</h3>
              <p className="text-green-700">Только природные ингредиенты без химических добавок</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Безопасно</h3>
              <p className="text-green-700">Гипоаллергенные формулы, подходящие для чувствительной кожи</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Качество</h3>
              <p className="text-green-700">Сертифицированное производство с контролем качества</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Наша продукция</h2>
            <p className="text-xl text-green-700">Широкий ассортимент натуральной косметики для всей семьи</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-all duration-300 border-green-100 overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <Icon name="Sparkles" className="text-green-400" size={64} />
                  </div>
                  <Badge className="absolute top-3 left-3 bg-green-600 hover:bg-green-600">
                    {product.category}
                  </Badge>
                  {product.oldPrice && (
                    <Badge variant="destructive" className="absolute top-3 right-3">
                      -25%
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-green-900 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-green-700 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-900">
                        {product.price} ₽
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.oldPrice} ₽
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={addToCart} 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-900 mb-6">О компании NaturoZdrava</h2>
              <p className="text-lg text-green-700 mb-6">
                Мы — российский производитель натуральной косметики, который работает уже более 10 лет. 
                Наша миссия — создавать безопасные и эффективные продукты для красоты и здоровья.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" size={24} />
                  <span className="text-green-800">Собственная лаборатория</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" size={24} />
                  <span className="text-green-800">Сертификаты качества</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" size={24} />
                  <span className="text-green-800">Более 50 000 довольных клиентов</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-green-200 to-emerald-200 rounded-3xl flex items-center justify-center shadow-lg">
                <Icon name="Leaf" className="text-green-600" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 mb-4">Отзывы покупателей</h2>
            <p className="text-xl text-green-700">Что говорят о нашей косметике</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-100">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-green-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-green-900">Анна К.</CardTitle>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Icon key={star} name="Star" className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
                  "Крем для лица просто волшебный! Кожа стала мягкой и увлажнённой. Никаких раздражений."
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-green-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-green-900">Мария С.</CardTitle>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Icon key={star} name="Star" className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
                  "Масло для волос восстановило мои повреждённые волосы. Теперь они блестящие и здоровые!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-green-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-green-900">Елена В.</CardTitle>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Icon key={star} name="Star" className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
                  "Отличное качество по доступной цене. Заказываю уже полгода, очень довольна!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-green-100">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Адрес производства</h3>
                  <p className="text-green-100">г. Москва, ул. Производственная, д. 25</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Телефон</h3>
                  <p className="text-green-100">+7 (495) 789-12-34</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-green-100">info@naturozdrava.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Режим работы</h3>
                  <p className="text-green-100">Пн-Пт: 9:00-18:00</p>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white text-green-900">
                <CardHeader>
                  <CardTitle>Оставить заявку</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">Интересующий товар</label>
                    <select className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>Крем для лица</option>
                      <option>Масло для волос</option>
                      <option>Скраб для тела</option>
                      <option>Сыворотка</option>
                    </select>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Leaf" className="text-green-400" size={28} />
                <span className="font-bold text-xl text-white">NaturoZdrava</span>
              </div>
              <p className="text-sm">
                Натуральная косметика для красоты и здоровья
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Категории</h3>
              <div className="space-y-2 text-sm">
                <p>Уход за лицом</p>
                <p>Уход за волосами</p>
                <p>Уход за телом</p>
                <p>Уход за губами</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Компания</h3>
              <div className="space-y-2 text-sm">
                <p>О нас</p>
                <p>Производство</p>
                <p>Сертификаты</p>
                <p>Доставка</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Социальные сети</h3>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600">
                  <Icon name="MessageCircle" size={16} />
                </div>
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600">
                  <Icon name="Phone" size={16} />
                </div>
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600">
                  <Icon name="Mail" size={16} />
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-green-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 NaturoZdrava. Все права защищены.</p>
            <p className="text-sm">Лицензия на производство косметики № КЗ-12345</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;