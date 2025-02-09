import servicos from "./servicos";
import background from "../../assets/backgroud.jpg";
import CardServices from "./cardservice/CardServices";

const ServicesSection = () => {
  return (
    <section
      className="relative py-10 px-4 bg-rose-50 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-rose-100 bg-opacity-80"></div>

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-5xl font-madi text-eva-pink text-center mb-12">
          Nossos Serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((item, index) => (
            <CardServices key={index} categoria={item.categoria} servicos={item.servicos} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
