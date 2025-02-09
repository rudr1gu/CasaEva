import ServiceCard from "./cardservice/CardServices";

const ServicesSection = () => {
    return (
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
    )
}

export default ServicesSection;