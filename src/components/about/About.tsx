import { Clock, Heart, Scissors } from "lucide-react";
import ServiceHighlight from "./cardservicehighlight/ServiceHighlight";

const About = () => {
    return (
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
    );

 
};

export default About;