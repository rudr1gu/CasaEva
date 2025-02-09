import React from 'react';
import { Scissors, Clock, Phone, MapPin, Instagram, Facebook, Heart, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-rose-50">
     
      {/* Galeria Section */}
      

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

function ContactInfo({ icon, info }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-rose-700">{info}</span>
    </div>
  );
}

export default App;