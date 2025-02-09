import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import ContactInfo from "./contactinfo/ContactInfo";

const Contact = () => {
    return (
        <section id="agendamento" className="py-20 px-4 bg-rose-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-serif text-rose-900 mb-8">Agende seu Horário</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-serif text-rose-900 mb-4">Informações de Contato</h3>
                        <div className="space-y-4">
                            <ContactInfo
                                icon={<Phone className="w-5 h-5 text-rose-700" />}
                                info="(11) 97956-1872"
                            />
                            <ContactInfo
                                icon={<MapPin className="w-5 h-5 text-rose-700" />}
                                info=" Rua Guaraitá, 96 - Vila Curuçá Velha, São Paulo - SP, 08030-310"
                            />
                            <ContactInfo
                                icon={<Clock className="w-5 h-5 text-rose-700" />}
                                info="Terça-feira a Sexta: 10h às 18:30h, Sábado: 10h às 19h"
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
                                <span>Terça a Sexta</span>
                                <span>10h - 18:30h</span>
                            </p>
                            <p className="flex justify-between text-rose-700">
                                <span>Sábado</span>
                                <span>10h - 19h</span>
                            </p>
                            <p className="flex justify-between text-rose-700">
                                <span>Domingo</span>
                                <span>Fechado</span>
                            </p>
                            <p className="flex justify-between text-rose-700">
                                <span>Segunda</span>
                                <span>Fechado</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;