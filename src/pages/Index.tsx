import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

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
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center">
          <img 
            src="https://cdn.poehali.dev/files/2cb4fffa-cbb5-4db1-a5cb-587548d42493.jpg" 
            alt="Удачные заботы" 
            className="h-12 sm:h-16 md:h-20"
          />
          <a href="tel:+79235335301" className="flex items-center gap-1 sm:gap-2 text-[#00B4A3] hover:text-[#FF6B35] transition-colors">
            <Icon name="Phone" size={20} className="sm:w-5 sm:h-5" />
            <span className="font-semibold text-sm sm:text-base hidden sm:inline">+7 (923) 533-53-01</span>
          </a>
        </div>
      </header>

      <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-12 md:pb-20 px-3 sm:px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4DB8A8]/5 via-white to-[#FF8A3D]/5"></div>
        <div className="absolute top-10 right-2 sm:right-5 md:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 opacity-25 sm:opacity-35">
          <img src="https://cdn.poehali.dev/files/9e18c783-f673-4027-866c-f2dbc852e3cf.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute bottom-10 left-2 sm:left-5 md:left-10 w-28 h-28 sm:w-40 sm:h-40 md:w-80 md:h-80 opacity-25 sm:opacity-35">
          <img src="https://cdn.poehali.dev/files/bb33ff4a-81cc-40d2-8f2d-0117df7e2828.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-['Poppins'] font-black mb-3 sm:mb-4 md:mb-6 px-2 leading-tight">
            <span className="text-[#FF6B35]">Удачные</span> <span className="text-[#00B4A3]">Заботы</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-800 font-bold mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto px-2 leading-snug">
            <span className="text-[#00B4A3]">Всегда готовы</span> позаботиться о вашем участке. <span className="text-[#FF6B35]">Профессиональное благоустройство</span> территорий с гарантией качества
          </p>
          <p className="text-sm sm:text-base md:text-lg font-extrabold mb-5 sm:mb-6 md:mb-8 px-2">
            <span className="text-[#00B4A3]">⏰ Работаем ежедневно</span> <span className="text-[#FF6B35]">с 8:00 до 23:00</span>
          </p>
          <Button 
            onClick={() => setIsContactDialogOpen(true)}
            className="bg-gradient-to-r from-[#00B4A3] to-[#FF6B35] hover:opacity-90 text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
          >
            <Icon name="MessageCircle" size={22} className="mr-2 sm:mr-3" />
            <span className="whitespace-nowrap">Связаться с нами</span>
          </Button>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-20 px-3 sm:px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-0 left-0 w-full h-24 sm:h-32 md:h-64 opacity-25 sm:opacity-35">
          <img src="https://cdn.poehali.dev/files/5f36fb0b-89b3-4277-b2f7-6bdc12f621c5.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-2/3 h-32 sm:h-48 md:h-96 opacity-25 sm:opacity-35">
          <img src="https://cdn.poehali.dev/files/fffee30d-f980-4410-ac2d-db4e0e227c3e.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-['Poppins'] font-black mb-2 sm:mb-3 md:mb-4 px-2">
              <span className="text-[#FF6B35]">Наши</span> <span className="text-[#00B4A3]">услуги</span>
            </h2>
            <div className="w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#00B4A3] mx-auto drop-shadow-md"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-white border-2 border-gray-100 hover:border-[#00B4A3] transition-all duration-300 group overflow-hidden hover:shadow-xl"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-[#00B4A3]/10 rounded-xl group-hover:bg-[#00B4A3]/20 transition-colors flex-shrink-0">
                      <Icon name={service.icon} size={24} className="text-[#00B4A3] sm:w-7 sm:h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-xl font-['Poppins'] font-extrabold mb-1 sm:mb-2 text-slate-900">{service.title}</h3>
                      <p className="text-sm sm:text-base text-slate-700 font-semibold">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="py-10 sm:py-12 md:py-20 px-3 sm:px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4DB8A8]/5 to-[#FF8A3D]/5"></div>
        <div className="absolute top-10 md:top-20 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 opacity-25 sm:opacity-35">
          <img src="https://cdn.poehali.dev/files/d54fdaa6-ac87-48d0-a83b-b69d9fac7dee.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute bottom-0 right-2 sm:right-5 md:right-20 w-28 h-28 sm:w-40 sm:h-40 md:w-80 md:h-80 opacity-25 sm:opacity-35">
          <img src="https://cdn.poehali.dev/files/c8a16012-aaf6-4516-a05e-6f83329c1f42.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-['Poppins'] font-black mb-2 sm:mb-3 md:mb-4 px-2">
              <span className="text-[#FF6B35]">Оставьте</span> <span className="text-[#00B4A3]">заявку</span>
            </h2>
            <div className="w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-[#00B4A3] to-[#FF6B35] mx-auto mb-3 sm:mb-4 md:mb-6 drop-shadow-md"></div>
            <p className="text-xs sm:text-sm md:text-base font-bold px-4">
              <span className="text-slate-800">Заполните форму и мы свяжемся с вами в</span> <span className="text-[#25D366] font-extrabold">WhatsApp</span>
            </p>
          </div>

          <Card className="bg-white border-2 border-gray-100 shadow-xl">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-slate-700">Ваше имя</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white border-gray-200 focus:border-[#00B4A3] focus:ring-[#00B4A3] h-10 sm:h-11 text-sm sm:text-base"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-slate-700">Телефон</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-white border-gray-200 focus:border-[#00B4A3] focus:ring-[#00B4A3] h-10 sm:h-11 text-sm sm:text-base"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-slate-700">Услуга</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-white border border-gray-200 focus:border-[#00B4A3] focus:ring-[#00B4A3] rounded-lg px-3 py-2 sm:py-2.5 text-slate-800 h-10 sm:h-11 text-sm sm:text-base"
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-slate-700">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white border-gray-200 focus:border-[#4DB8A8] focus:ring-[#4DB8A8] min-h-24 sm:min-h-32 text-sm sm:text-base"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00B4A3] to-[#FF6B35] hover:opacity-90 text-white font-semibold text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6 rounded-2xl shadow-lg transition-all hover:scale-[1.02]"
                >
                  <span>Отправить в WhatsApp</span>
                  <Icon name="Send" size={16} className="ml-2 sm:w-[18px] sm:h-[18px]" />
                </Button>
              </form>


            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-6 sm:py-8 md:py-12 px-3 sm:px-4 bg-white border-t border-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/2cb4fffa-cbb5-4db1-a5cb-587548d42493.jpg" 
                alt="Удачные заботы" 
                className="h-16 sm:h-20 mx-auto md:mx-0 mb-3 sm:mb-4"
              />
              <p className="text-sm sm:text-base text-slate-600">
                Профессиональное благоустройство территорий
              </p>
            </div>
            
            <div>
              <h3 className="font-['Poppins'] font-bold text-base sm:text-lg mb-3 sm:mb-4 text-slate-900">Контакты</h3>
              <div className="space-y-2 text-slate-600 text-sm sm:text-base">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Icon name="Phone" size={16} className="text-[#00B4A3] sm:w-[18px] sm:h-[18px]" />
                  <a href="tel:+79235335301" className="hover:text-[#00B4A3] transition-colors">
                    +7 (923) 533-53-01
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Icon name="Clock" size={16} className="text-[#00B4A3] sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">Ежедневно с 8:00 до 23:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-['Poppins'] font-bold text-base sm:text-lg mb-3 sm:mb-4 text-slate-900">Свяжитесь с нами</h3>
              <Button 
                onClick={() => setIsContactDialogOpen(true)}
                className="bg-gradient-to-r from-[#00B4A3] to-[#FF6B35] hover:opacity-90 text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                <Icon name="MessageCircle" size={18} className="mr-2 sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">Связаться с нами</span>
              </Button>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 text-center text-slate-500 text-xs sm:text-sm">
            <p>&copy; 2024 Удачные заботы. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="w-[95vw] max-w-xl border-2 border-gray-100">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-['Poppins'] font-black text-center mb-2">
              <span className="text-[#FF6B35]">Свяжитесь</span> <span className="text-[#00B4A3]">с нами</span>
            </DialogTitle>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#FF6B35] to-[#00B4A3] mx-auto drop-shadow-md"></div>
          </DialogHeader>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mt-3 sm:mt-4">
            <button
              onClick={() => { handleWhatsAppClick(); setIsContactDialogOpen(false); }}
              className="group bg-white border-2 border-gray-100 hover:border-[#00B4A3] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center gap-1.5 sm:gap-2"
            >
              <div className="bg-[#25D366] group-hover:bg-[#20BA5A] rounded-lg sm:rounded-xl p-2 sm:p-3 transition-colors shadow-md">
                <Icon name="MessageCircle" size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-slate-800">WhatsApp</span>
            </button>

            <button
              onClick={() => { window.open('https://vk.com/uzabotyrus1', '_blank'); setIsContactDialogOpen(false); }}
              className="group bg-white border-2 border-gray-100 hover:border-[#00B4A3] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center gap-1.5 sm:gap-2"
            >
              <div className="bg-[#0077FF] group-hover:bg-[#0066DD] rounded-lg sm:rounded-xl p-2 sm:p-3 transition-colors shadow-md">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                  <path d="M25.26 36.86C13.71 36.86 7.12 28.75 6.86 15.85H12.14C12.32 25.01 16.71 29.17 20.16 30.04V15.85H25.16V23.96C28.58 23.58 32.23 19.69 33.45 15.85H38.45C37.57 20.56 33.71 24.45 31.03 26.08C33.71 27.42 38.01 30.76 39.86 36.86H34.33C32.93 32.86 29.68 29.68 25.16 29.19V36.86H25.26Z" fill="white"/>
                </svg>
              </div>
              <span className="font-bold text-xs sm:text-sm text-slate-800">VK</span>
            </button>

            <button
              onClick={() => { window.open('https://max.ru/u/f9LHodD0cOIDVemlgyXDNIq7AzHsmJ1xWbxcqWxfUFL2M7-yFrZY7BcHV6s', '_blank'); setIsContactDialogOpen(false); }}
              className="group bg-white border-2 border-gray-100 hover:border-[#00B4A3] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center gap-1.5 sm:gap-2"
            >
              <div className="rounded-full overflow-hidden w-10 h-10 sm:w-12 sm:h-12 ring-4 ring-[#7C3AED] group-hover:ring-[#6D31D9] transition-all shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/files/49b06f75-9883-4d34-bd0d-773767f64722.png" 
                  alt="Max" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-xs sm:text-sm text-slate-800">Max</span>
            </button>

            <button
              onClick={() => { window.open('https://t.me/+79235335301', '_blank'); setIsContactDialogOpen(false); }}
              className="group bg-white border-2 border-gray-100 hover:border-[#00B4A3] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center gap-1.5 sm:gap-2"
            >
              <div className="bg-[#229ED9] group-hover:bg-[#1E8BC3] rounded-lg sm:rounded-xl p-2 sm:p-3 transition-colors shadow-md">
                <Icon name="Send" size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-slate-800">Telegram</span>
            </button>

            <button
              onClick={() => { window.location.href = 'tel:+79235335301'; setIsContactDialogOpen(false); }}
              className="group bg-white border-2 border-gray-100 hover:border-[#FF6B35] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center gap-1.5 sm:gap-2"
            >
              <div className="bg-[#FF6B35] group-hover:bg-[#E85A2A] rounded-lg sm:rounded-xl p-2 sm:p-3 transition-colors shadow-md">
                <Icon name="Phone" size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-slate-800">Позвонить</span>
            </button>

            <button
              onClick={() => { handleSubmit(new Event('submit') as any); setIsContactDialogOpen(false); }}
              className="group bg-white border-2 border-gray-100 hover:border-[#00B4A3] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center gap-1.5 sm:gap-2"
            >
              <div className="bg-[#00B4A3] group-hover:bg-[#009688] rounded-lg sm:rounded-xl p-2 sm:p-3 transition-colors shadow-md">
                <Icon name="Mail" size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-slate-800">Форма связи</span>
            </button>
          </div>

          <div className="mt-4 sm:mt-6 text-center border-t-2 border-gray-100 pt-3 sm:pt-4">
            <p className="text-slate-800 text-sm sm:text-base font-bold mb-1">
              📞 <a href="tel:+79235335301" className="text-[#FF6B35] hover:text-[#00B4A3] transition-colors">+7 (923) 533-53-01</a>
            </p>
            <p className="text-xs sm:text-sm">
              <span className="text-[#00B4A3] font-bold">⏰ Работаем ежедневно</span> <span className="text-[#FF6B35] font-bold">с 8:00 до 23:00</span>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;