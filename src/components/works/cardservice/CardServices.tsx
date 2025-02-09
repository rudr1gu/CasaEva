interface ServiceCardProps {
    categoria: string;
    servicos: string[];
}

const ServiceCard = ({ categoria, servicos }: ServiceCardProps) => {
    return (
        <div className="relative p-6 border  rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <div className="absolute inset-0 bg-rose-50 opacity-70"></div>
          <div className="relative z-10">
            <h3 className="text-4xl w-full text-center font-madi text-eva-black mb-4 border-b-2 border-eva-lightgreen pb-2">
              {categoria}
            </h3>
            <ul className="space-y-2">
              {servicos.map((item, index) => (
                <li key={index} className="text-eva-gray font-belleza flex items-center gap-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
};


export default ServiceCard;