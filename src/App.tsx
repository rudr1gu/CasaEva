import React from 'react';
import { Scissors, Clock, Phone, MapPin, Instagram, Facebook, Heart, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-rose-50">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80"
            alt="Salão de Beleza" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rose-100/80 to-rose-50/90"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-serif text-rose-900 mb-4">Casa Eva</h1>
          <p className="text-xl md:text-2xl text-rose-700 mb-8 font-light">Beleza Natural & Bem-estar</p>
          <a 
            href="#agendamento" 
            className="inline-flex items-center gap-2 bg-rose-700 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-800 transition-colors"
          >
            <Calendar size={20} />
            Agende seu Horário
          </a>
        </div>
      </header>

      {/* Sobre Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-rose-900 mb-8">Bem-vinda à Casa Eva</h2>
          <p className="text-lg text-rose-700 leading-relaxed mb-12">
            Um espaço dedicado à sua beleza natural, onde cada tratamento é personalizado 
            para realçar sua beleza única. Com mais de 10 anos de experiência, 
            nossa equipe especializada oferece serviços de excelência em um ambiente 
            acolhedor e relaxante.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceHighlight 
              icon={<Scissors className="w-8 h-8 text-rose-700" />}
              title="Serviços Completos"
              description="Cortes, coloração, tratamentos capilares e muito mais"
            />
            <ServiceHighlight 
              icon={<Heart className="w-8 h-8 text-rose-700" />}
              title="Produtos Naturais"
              description="Utilizamos produtos orgânicos e veganos de alta qualidade"
            />
            <ServiceHighlight 
              icon={<Clock className="w-8 h-8 text-rose-700" />}
              title="Horário Flexível"
              description="Atendimento de segunda a sábado, das 9h às 20h"
            />
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20 px-4 bg-rose-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-rose-900 text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              title="Corte & Styling"
              price="A partir de R$ 80"
              items={[
                'Corte feminino',
                'Hidratação',
                'Escova',
                'Penteados'
              ]}
            />
            <ServiceCard 
              title="Coloração"
              price="A partir de R$ 150"
              items={[
                'Coloração natural',
                'Mechas',
                'Balayage',
                'Tonalização'
              ]}
            />
            <ServiceCard 
              title="Tratamentos"
              price="A partir de R$ 120"
              items={[
                'Hidratação profunda',
                'Reconstrução',
                'Botox capilar',
                'Queratinização'
              ]}
            />
            <ServiceCard 
              title="Estética"
              price="A partir de R$ 90"
              items={[
                'Design de sobrancelhas',
                'Limpeza de pele',
                'Massagem relaxante',
                'Depilação'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-rose-900 text-center mb-12">Nosso Trabalho</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80"
              alt="Trabalho 1"
              className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80"
              alt="Trabalho 2"
              className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80"
              alt="Trabalho 3"
              className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="agendamento" className="py-20 px-4 bg-rose-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-rose-900 mb-8">Agende seu Horário</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-rose-900 mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <ContactInfo 
                  icon={<Phone className="w-5 h-5 text-rose-700" />}
                  info="(11) 99999-9999"
                />
                <ContactInfo 
                  icon={<MapPin className="w-5 h-5 text-rose-700" />}
                  info="Rua das Flores, 123 - Jardim Botânico"
                />
                <ContactInfo 
                  icon={<Clock className="w-5 h-5 text-rose-700" />}
                  info="Segunda a Sábado: 9h às 20h"
                />
              </div>
              <div className="mt-6 flex gap-4">
                <a href="#" className="text-rose-700 hover:text-rose-800 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-rose-700 hover:text-rose-800 transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif text-rose-900 mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2">
                <p className="flex justify-between text-rose-700">
                  <span>Segunda a Sexta</span>
                  <span>9h - 20h</span>
                </p>
                <p className="flex justify-between text-rose-700">
                  <span>Sábado</span>
                  <span>9h - 18h</span>
                </p>
                <p className="flex justify-between text-rose-700">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-rose-900 text-rose-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>© 2024 Casa Eva - Salão de Beleza. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceHighlight({ icon, title, description }) {
  return (
    <div className="p-6 text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-serif text-rose-900 mb-2">{title}</h3>
      <p className="text-rose-700">{description}</p>
    </div>
  );
}

function ServiceCard({ title, price, items }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-serif text-rose-900 mb-2">{title}</h3>
      <p className="text-rose-700 font-medium mb-4">{price}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-rose-600 flex items-center gap-2">
            <Scissors className="w-4 h-4" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactInfo({ icon, info }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-rose-700">{info}</span>
    </div>
  );
}

export default App;