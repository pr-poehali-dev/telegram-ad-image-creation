import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import html2canvas from "html2canvas";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Регистрация:", formData);
  };

  const programItems = [
    {
      time: "09:00 - 10:30",
      title: "Введение в нейропсихологию",
      description: "Основные принципы и методы практической нейропсихологии. Актуальность применения в современных условиях.",
    },
    {
      time: "10:45 - 12:15",
      title: "Диагностика нейропсихологических функций",
      description: "Методики оценки когнитивных процессов. Интерпретация результатов и построение программы коррекции.",
    },
    {
      time: "13:00 - 14:30",
      title: "Практические методы коррекции",
      description: "Телесно-ориентированные техники. Сенсомоторная коррекция. Упражнения для развития межполушарного взаимодействия.",
    },
    {
      time: "14:45 - 16:15",
      title: "Работа с детьми и взрослыми",
      description: "Особенности коррекционной работы с разными возрастными группами. Адаптация методик под индивидуальные потребности.",
    },
    {
      time: "16:30 - 18:00",
      title: "Практикум и разбор кейсов",
      description: "Отработка практических навыков. Разбор реальных случаев из практики. Ответы на вопросы участников.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50 flex gap-3">
        <Button onClick={async () => {
          const banner = document.getElementById('telegram-banner-2');
          if (banner) {
            try {
              const canvas = await html2canvas(banner, {
                width: 1080,
                height: 1080,
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: null
              });
              
              const link = document.createElement('a');
              link.download = 'telegram-banner-with-image.png';
              link.href = canvas.toDataURL('image/png');
              link.click();
            } catch (error) {
              console.error('Ошибка при создании баннера:', error);
            }
          }
        }} size="lg" className="shadow-lg">
          Скачать с фоном
        </Button>
        <Button onClick={() => {
          const banner = document.getElementById('telegram-banner');
          if (banner) {
            const canvas = document.createElement('canvas');
            canvas.width = 1080;
            canvas.height = 1080;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.fillStyle = 'rgb(26, 31, 44)';
              ctx.fillRect(0, 0, 1080, 1080);
              
              ctx.fillStyle = 'white';
              ctx.font = 'bold 72px Montserrat, sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Станьте успешным', 540, 280);
              ctx.fillText('психотерапевтом', 540, 380);
              ctx.fillText('всего за 3 месяца', 540, 480);
              
              ctx.fillStyle = 'rgb(14, 165, 233)';
              ctx.fillRect(460, 520, 160, 6);
              
              ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
              ctx.font = '36px Open Sans, sans-serif';
              ctx.fillText('Практический курс, признанный', 540, 620);
              ctx.fillText('профессионалами отрасли', 540, 670);
              
              ctx.fillStyle = 'rgb(14, 165, 233)';
              ctx.font = 'bold 32px Open Sans, sans-serif';
              ctx.fillText('Обучайтесь дистанционно', 540, 770);
              ctx.fillText('и работайте удаленно', 540, 820);
              
              const link = document.createElement('a');
              link.download = 'telegram-banner.png';
              link.href = canvas.toDataURL('image/png');
              link.click();
            }
          }
        }} size="lg" className="shadow-lg">
          Скачать баннер
        </Button>
      </div>

      <div id="telegram-banner" className="w-[1080px] h-[1080px] bg-primary flex items-center justify-center mx-auto my-8">
        <div className="text-center px-20">
          <h1 className="text-7xl font-bold text-white leading-tight mb-12">
            Станьте успешным<br/>психотерапевтом<br/>всего за 3 месяца
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          <p className="text-3xl text-white/90 mb-6 leading-relaxed">
            Практический курс, признанный<br/>профессионалами отрасли
          </p>
          <p className="text-2xl text-accent font-semibold">
            Обучайтесь дистанционно<br/>и работайте удаленно
          </p>
        </div>
      </div>

      <div id="telegram-banner-2" className="w-[1080px] h-[1080px] relative flex items-center justify-center mx-auto my-8 overflow-hidden">
        <img 
          src="https://cdn.poehali.dev/projects/af4a95b0-dc42-4a22-b1e8-01ee2dab9544/files/9c91f62d-f07e-4d59-8860-ff2101aff2e8.jpg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85"></div>
        <div className="relative text-center px-20 z-10">
          <h1 className="text-7xl font-bold text-white leading-tight mb-12">
            Станьте успешным<br/>психотерапевтом<br/>всего за 3 месяца
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          <p className="text-3xl text-white/90 mb-6 leading-relaxed">
            Практический курс, признанный<br/>профессионалами отрасли
          </p>
          <p className="text-2xl text-accent font-semibold">
            Обучайтесь дистанционно<br/>и работайте удаленно
          </p>
        </div>
      </div>

      <section className="relative bg-primary text-primary-foreground py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Практическая нейропсихология
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl">
              Профессиональный семинар от сертифицированного тренера Международного института практической нейропсихологии
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center mt-8">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={20} />
                <span className="text-lg">Дата проведения уточняется</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} />
                <span className="text-lg">Полный день, 9:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Программа семинара</h2>
            <p className="text-lg text-muted-foreground">
              Структурированная программа для глубокого погружения в методы практической нейропсихологии
            </p>
          </div>

          <div className="grid gap-6">
            {programItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <div className="flex items-center gap-2 text-accent">
                      <Icon name="Clock" size={18} />
                      <span className="font-semibold">{item.time}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Спикер семинара</h2>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Александр Толстых</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Сертифицированный тренер Международного института практической нейропсихологии
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="GraduationCap" size={24} className="text-accent mt-1" />
                    <p className="text-muted-foreground">
                      Многолетний опыт практической работы с детьми и взрослыми
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Award" size={24} className="text-accent mt-1" />
                    <p className="text-muted-foreground">
                      Международная сертификация по методам нейропсихологической коррекции
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Users" size={24} className="text-accent mt-1" />
                    <p className="text-muted-foreground">
                      Проведено более 100 обучающих семинаров для специалистов
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Регистрация на семинар</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя и фамилия</Label>
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@mail.ru"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Зарегистрироваться
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-lg">
            По вопросам участия обращайтесь:{" "}
            <a href="mailto:info@tolstykh.su" className="underline font-semibold">
              info@tolstykh.su
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;