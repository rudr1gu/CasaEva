import { Clock, Heart, Scissors } from "lucide-react";
import ServiceHighlight from "./cardservicehighlight/ServiceHighlight";

const About = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-delius text-rose-900 mb-8">Bem-vinda à Casa Eva</h2>
                <p className="text-lg text-gray-900 delius-font leading-relaxed mb-12 text-justify">
                    A Casa Eva é um salão especializado em cuidados para cabelos crespos e cacheados,
                    oferecendo ainda produção completa para eventos como casamentos e formaturas,
                    com maquiagem e penteados personalizados. Contamos com serviços de embelezamento do olhar,
                    incluindo extensão de cílios, micropigmentação, design de sobrancelhas com henna,
                    lash lifting e brow lamination. Nossas terapias integrativas e tratamentos estéticos abrangem reiki,
                    acupuntura, massagens, limpeza de pele e protocolos de emagrecimento. Oferecemos também manicure, pedicure,
                    alongamento de unhas e spa dos pés. Agende seu horário e experimente uma experiência única de beleza e bem-estar!
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
    );


};

export default About;