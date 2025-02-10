import { Calendar, Clock
    , MapPin, Phone } from "lucide-react";
import ContactInfo from "./contactinfo/ContactInfo";
import { FaCalendar, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="agendamento" className="py-20 px-6 bg-rose-50">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-rose-900 mb-8">
                    <a href="https://www.whatsapp.com/catalog/5511979561872/?app_absent=0"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-eva-lightpink text-white px-8 py-3 rounded-full font-medium hover:bg-eva-pink transition-colors">
                        <Calendar size={20} />
                        Agende seu Horário
                    </a>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">

                    <div className="bg-white p-8 rounded-xl shadow-md border border-rose-200">
                        <h3 className="text-4xl font-belleza text-rose-900 mb-6">Informações de Contato</h3>
                        <div className="space-y-5">
                            <ContactInfo icon={<Phone className="w-6 h-6 text-rose-700" />} info="(11) 97956-1872" />
                            <ContactInfo icon={<MapPin className="w-6 h-6 text-rose-700" />} info="Rua Guaraitá, 96 - Vila Curuçá Velha, São Paulo - SP, 08030-310" />
                            <ContactInfo icon={<Clock className="w-6 h-6 text-rose-700" />} info="Terça a Sexta: 10h - 18:30h | Sábado: 10h - 19h" />
                        </div>

                        <div className="flex justify-center gap-4 mt-7">
                            <a href="https://client.tuaagenda.com/c/CasaEvaCB" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-eva-lightpink hover:bg-eva-pink transition">
                                <FaCalendar className="text-white text-lg" />
                            </a>
                            <a href="https://linkedin.com/in/rudr1gu" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-eva-lightpink hover:bg-eva-pink transition">
                                <FaWhatsapp className="text-white text-lg" />
                            </a>
                            <a href="https://www.instagram.com/casaeva.beauty" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-eva-lightpink hover:bg-eva-pink transition">
                                <FaInstagram className="text-white text-lg" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md border border-rose-200">
                        <h3 className="text-4xl font-belleza text-rose-900 mb-6">Horário de Funcionamento</h3>
                        <div className="space-y-3 text-lg">
                            <p className="flex justify-between text-rose-700">
                                <span>Terça a Sexta</span> <span>10h - 18:30h</span>
                            </p>
                            <p className="flex justify-between text-rose-700">
                                <span>Sábado</span> <span>10h - 19h</span>
                            </p>
                            <p className="flex justify-between text-gray-500">
                                <span>Domingo</span> <span>Fechado</span>
                            </p>
                            <p className="flex justify-between text-gray-500">
                                <span>Segunda</span> <span>Fechado</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
