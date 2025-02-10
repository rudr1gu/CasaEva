import servicos from "./servicos";
import background from "../../assets/backgroud.jpg";
import CardServices from "./cardservice/CardServices";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => setIsVisible(entries.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      id="servicos"
      className="relative py-10 px-4 bg-rose-50 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-rose-100 bg-opacity-80"></div>

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-5xl font-madi text-eva-pink text-center mb-12">
          Nossos Serviços
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {servicos.map((item, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.3 }}
          >
            <CardServices key={index} categoria={item.categoria} servicos={item.servicos} />
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
