import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "TreeDeciduous",
    title: "Спил деревьев",
    description: "Профессиональное удаление деревьев любой сложности",
    image: "https://cdn.poehali.dev/files/289ee704-95a7-4d49-ad5d-da508db44b46.jpg"
  },
  {
    icon: "Scissors",
    title: "Покос травы",
    description: "Качественный покос территорий любой площади",
    image: "https://cdn.poehali.dev/files/b73df019-d698-458d-9d96-bd9506e18c21.jpg"
  },
  {
    icon: "Leaf",
    title: "Уход за газоном",
    description: "Комплексный уход для идеального газона",
    image: "https://cdn.poehali.dev/files/bb33ff4a-81cc-40d2-8f2d-0117df7e2828.jpg"
  },
  {
    icon: "Sprout",
    title: "Посадка газона",
    description: "Создание газона под ключ с гарантией",
    image: "https://cdn.poehali.dev/files/bb33ff4a-81cc-40d2-8f2d-0117df7e2828.jpg"
  },
  {
    icon: "Tractor",
    title: "Вспашка земли мотоблоком",
    description: "Подготовка участка к посадке",
    image: "https://cdn.poehali.dev/files/c8a16012-aaf6-4516-a05e-6f83329c1f42.jpg"
  },
  {
    icon: "Trees",
    title: "Уход за кустарниками",
    description: "Обрезка и формирование кустарников",
    image: "https://cdn.poehali.dev/files/289ee704-95a7-4d49-ad5d-da508db44b46.jpg"
  }
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Новая заявка с сайта:%0A%0AИмя: ${formData.name}%0AТелефон: ${formData.phone}%0AУслуга: ${formData.service}%0AСообщение: ${formData.message}`;
    window.open(`https://wa.me/79235335301?text=${text}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/79235335301', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-['Open_Sans']">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img 
            src="https://cdn.poehali.dev/files/88d8f09e-2663-4334-8041-0c1a2df39967.jpg" 
            alt="Удачные заботы" 
            className="h-12"
          />
          <a href="tel:+79235335301" className="flex items-center gap-2 text-[#4DB8A8] hover:text-[#FF8A3D] transition-colors">
            <Icon name="Phone" size={20} />
            <span className="font-semibold">+7 (923) 533-53-01</span>
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-['Montserrat'] font-bold mb-6 bg-gradient-to-r from-[#4DB8A8] to-[#FF8A3D] bg-clip-text text-transparent">
            Благоустройство территорий
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Профессиональный уход за вашим участком. Работаем ежедневно с 8:00 до 23:00
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-[#4DB8A8] hover:bg-[#3da395] text-black font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-[#4DB8A8]/20"
            >
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Написать в WhatsApp
            </Button>
            <Button 
              onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-[#FF8A3D] text-[#FF8A3D] hover:bg-[#FF8A3D] hover:text-black font-semibold text-lg px-8 py-6 rounded-xl"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0f0f0f]">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-['Montserrat'] font-bold text-center mb-4">
            Наши услуги
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4DB8A8] to-[#FF8A3D] mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-[#1a1a1a] border-white/10 hover:border-[#4DB8A8] transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#4DB8A8]/10 rounded-lg group-hover:bg-[#4DB8A8]/20 transition-colors">
                      <Icon name={service.icon} size={28} className="text-[#4DB8A8]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-['Montserrat'] font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-['Montserrat'] font-bold text-center mb-4">
            Оставьте заявку
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4DB8A8] to-[#FF8A3D] mx-auto mb-8"></div>
          <p className="text-center text-gray-400 mb-12">
            Заполните форму и мы свяжемся с вами в WhatsApp
          </p>

          <Card className="bg-[#1a1a1a] border-white/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-[#0f0f0f] border-white/20 focus:border-[#4DB8A8]"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-[#0f0f0f] border-white/20 focus:border-[#4DB8A8]"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Услуга</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-[#0f0f0f] border border-white/20 focus:border-[#4DB8A8] rounded-md px-3 py-2 text-white"
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-[#0f0f0f] border-white/20 focus:border-[#4DB8A8] min-h-32"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4DB8A8] to-[#FF8A3D] hover:opacity-90 text-black font-semibold text-lg py-6 rounded-xl"
                >
                  Отправить в WhatsApp
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-[#0f0f0f] border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/88d8f09e-2663-4334-8041-0c1a2df39967.jpg" 
                alt="Удачные заботы" 
                className="h-12 mx-auto md:mx-0 mb-4"
              />
              <p className="text-gray-400">
                Профессиональное благоустройство территорий
              </p>
            </div>
            
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Icon name="Phone" size={18} className="text-[#4DB8A8]" />
                  <a href="tel:+79235335301" className="hover:text-[#4DB8A8] transition-colors">
                    +7 (923) 533-53-01
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Icon name="Clock" size={18} className="text-[#4DB8A8]" />
                  <span>Ежедневно с 8:00 до 23:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-['Montserrat'] font-semibold text-lg mb-4">Свяжитесь с нами</h3>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
            <p>&copy; 2024 Удачные заботы. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl shadow-[#25D366]/30 transition-all hover:scale-110 z-50"
        aria-label="WhatsApp"
      >
        <Icon name="MessageCircle" size={28} />
      </button>
    </div>
  );
};

export default Index;
