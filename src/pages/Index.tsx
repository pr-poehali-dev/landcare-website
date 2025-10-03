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
    image: "https://cdn.poehali.dev/files/9e18c783-f673-4027-866c-f2dbc852e3cf.jpg"
  },
  {
    icon: "Scissors",
    title: "Покос травы",
    description: "Качественный покос территорий любой площади",
    image: "https://cdn.poehali.dev/files/5f36fb0b-89b3-4277-b2f7-6bdc12f621c5.jpg"
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
    image: "https://cdn.poehali.dev/files/d54fdaa6-ac87-48d0-a83b-b69d9fac7dee.jpg"
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
    image: "https://cdn.poehali.dev/files/fffee30d-f980-4410-ac2d-db4e0e227c3e.jpg"
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
    <div className="min-h-screen bg-white font-['Inter']">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <img 
            src="https://cdn.poehali.dev/files/2cb4fffa-cbb5-4db1-a5cb-587548d42493.jpg" 
            alt="Удачные заботы" 
            className="h-16 md:h-20"
          />
          <a href="tel:+79235335301" className="flex items-center gap-2 text-[#00B4A3] hover:text-[#FF6B35] transition-colors">
            <Icon name="Phone" size={20} />
            <span className="font-semibold hidden sm:inline">+7 (923) 533-53-01</span>
          </a>
        </div>
      </header>

      <section className="pt-24 md:pt-28 pb-12 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4DB8A8]/5 via-white to-[#FF8A3D]/5"></div>
        <div className="absolute top-10 right-5 md:right-10 w-48 h-48 md:w-96 md:h-96 opacity-35">
          <img src="https://cdn.poehali.dev/files/9e18c783-f673-4027-866c-f2dbc852e3cf.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute bottom-10 left-5 md:left-10 w-40 h-40 md:w-80 md:h-80 opacity-35">
          <img src="https://cdn.poehali.dev/files/bb33ff4a-81cc-40d2-8f2d-0117df7e2828.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-['Poppins'] font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-[#00B4A3] via-[#FF6B35] to-[#00B4A3] bg-clip-text text-transparent [text-shadow:_2px_2px_8px_rgba(0,0,0,0.4)] px-2" style={{WebkitTextStroke: '1.5px rgba(0,0,0,0.15)'}}>
            Удачные Заботы
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-800 font-bold mb-6 md:mb-8 max-w-3xl mx-auto [text-shadow:_2px_2px_6px_rgba(255,255,255,0.95),_-1px_-1px_4px_rgba(255,255,255,0.95)] px-2">
            <span className="text-[#00B4A3] [text-shadow:_2px_2px_8px_rgba(255,255,255,1),_-1px_-1px_6px_rgba(255,255,255,1)]">Всегда готовы</span> позаботиться о вашем участке. <span className="text-[#FF6B35] [text-shadow:_2px_2px_8px_rgba(255,255,255,1),_-1px_-1px_6px_rgba(255,255,255,1)]">Профессиональное благоустройство</span> территорий с гарантией качества
          </p>
          <p className="text-base md:text-lg font-extrabold mb-6 md:mb-8 [text-shadow:_2px_2px_8px_rgba(255,255,255,1),_-1px_-1px_6px_rgba(255,255,255,1)]">
            <span className="text-[#00B4A3]">⏰ Работаем ежедневно</span> <span className="text-[#FF6B35]">с 8:00 до 23:00</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-[#00B4A3] hover:bg-[#009688] text-white font-semibold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-2xl shadow-lg shadow-[#00B4A3]/30 hover:shadow-[#00B4A3]/40 transition-all hover:scale-105"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
            <Button 
              onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#FF6B35] hover:bg-[#E85A2A] text-white font-semibold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-2xl shadow-lg shadow-[#FF6B35]/30 hover:shadow-[#FF6B35]/40 transition-all hover:scale-105"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-0 left-0 w-full h-32 md:h-64 opacity-35">
          <img src="https://cdn.poehali.dev/files/5f36fb0b-89b3-4277-b2f7-6bdc12f621c5.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-2/3 h-48 md:h-96 opacity-35">
          <img src="https://cdn.poehali.dev/files/fffee30d-f980-4410-ac2d-db4e0e227c3e.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-['Poppins'] font-extrabold mb-3 md:mb-4 bg-gradient-to-r from-[#FF6B35] to-[#00B4A3] bg-clip-text text-transparent [text-shadow:_2px_2px_8px_rgba(0,0,0,0.4)] px-2" style={{WebkitTextStroke: '1.5px rgba(0,0,0,0.15)'}}>
              Наши услуги
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#00B4A3] mx-auto drop-shadow-md"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-white border-2 border-gray-100 hover:border-[#00B4A3] transition-all duration-300 group overflow-hidden hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#00B4A3]/10 rounded-xl group-hover:bg-[#00B4A3]/20 transition-colors">
                      <Icon name={service.icon} size={28} className="text-[#00B4A3]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-['Poppins'] font-extrabold mb-2 text-slate-900 [text-shadow:_1px_1px_4px_rgba(255,255,255,0.6)]">{service.title}</h3>
                      <p className="text-slate-700 font-semibold [text-shadow:_1px_1px_3px_rgba(255,255,255,0.5)]">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="py-12 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4DB8A8]/5 to-[#FF8A3D]/5"></div>
        <div className="absolute top-10 md:top-20 left-0 w-48 h-48 md:w-96 md:h-96 opacity-35">
          <img src="https://cdn.poehali.dev/files/d54fdaa6-ac87-48d0-a83b-b69d9fac7dee.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute bottom-0 right-5 md:right-20 w-40 h-40 md:w-80 md:h-80 opacity-35">
          <img src="https://cdn.poehali.dev/files/c8a16012-aaf6-4516-a05e-6f83329c1f42.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-['Poppins'] font-extrabold mb-3 md:mb-4 bg-gradient-to-r from-[#00B4A3] to-[#FF6B35] bg-clip-text text-transparent [text-shadow:_2px_2px_8px_rgba(0,0,0,0.4)] px-2" style={{WebkitTextStroke: '1.5px rgba(0,0,0,0.15)'}}>
              Оставьте заявку
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#00B4A3] to-[#FF6B35] mx-auto mb-4 md:mb-6 drop-shadow-md"></div>
            <p className="text-sm md:text-base font-bold [text-shadow:_2px_2px_6px_rgba(255,255,255,0.95),_-1px_-1px_4px_rgba(255,255,255,0.95)] px-4">
              <span className="text-slate-800">Заполните форму и мы свяжемся с вами в</span> <span className="text-[#25D366] font-extrabold [text-shadow:_2px_2px_8px_rgba(255,255,255,1)]">WhatsApp</span>
            </p>
          </div>

          <Card className="bg-white border-2 border-gray-100 shadow-xl">
            <CardContent className="p-4 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">Ваше имя</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white border-gray-200 focus:border-[#00B4A3] focus:ring-[#00B4A3]"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">Телефон</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-white border-gray-200 focus:border-[#00B4A3] focus:ring-[#00B4A3]"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">Услуга</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-white border border-gray-200 focus:border-[#00B4A3] focus:ring-[#00B4A3] rounded-lg px-3 py-2 text-slate-800"
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white border-gray-200 focus:border-[#4DB8A8] focus:ring-[#4DB8A8] min-h-32"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00B4A3] to-[#FF6B35] hover:opacity-90 text-white font-semibold text-base md:text-lg py-4 md:py-6 rounded-2xl shadow-lg transition-all hover:scale-[1.02]"
                >
                  Отправить в WhatsApp
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 md:py-12 px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/2cb4fffa-cbb5-4db1-a5cb-587548d42493.jpg" 
                alt="Удачные заботы" 
                className="h-20 mx-auto md:mx-0 mb-4"
              />
              <p className="text-slate-600">
                Профессиональное благоустройство территорий
              </p>
            </div>
            
            <div>
              <h3 className="font-['Poppins'] font-bold text-lg mb-4 text-slate-900">Контакты</h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Icon name="Phone" size={18} className="text-[#00B4A3]" />
                  <a href="tel:+79235335301" className="hover:text-[#00B4A3] transition-colors"
                    +7 (923) 533-53-01
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Icon name="Clock" size={18} className="text-[#00B4A3]" />
                  <span>Ежедневно с 8:00 до 23:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-['Poppins'] font-bold text-lg mb-4 text-slate-900">Свяжитесь с нами</h3>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100 text-center text-slate-500">
            <p>&copy; 2024 Удачные заботы. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3 md:p-4 shadow-2xl shadow-[#25D366]/30 transition-all hover:scale-110 z-50"
        aria-label="WhatsApp"
      >
        <Icon name="MessageCircle" size={24} className="md:w-7 md:h-7" />
      </button>
    </div>
  );
};

export default Index;