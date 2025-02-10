import { FaEnvelope, FaHome,  FaUser } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";

const Footer = () => {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

    return (
        <>
            <footer className="py-8 bg-rose-800 text-rose-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <nav className="mb-6">
                        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                            <li>
                                <a onClick={() => scrollToSection("inicio")} className="flex gap-2 cursor-pointer hover:text-eva-lightpink transition">
                                    <FaHome /> Início
                                </a>
                            </li>
                            <li>
                                <a onClick={() => scrollToSection("sobre")} className="flex gap-2 cursor-pointer hover:text-eva-lightpink transition">
                                    <FaUser /> Sobre
                                </a>
                            </li>
                            <li>
                                <a onClick={() => scrollToSection("servicos")} className="flex gap-2 cursor-pointer hover:text-eva-lightpink transition">
                                    <GiLipstick /> Serviços
                                </a>
                            </li>
                            <li>

                                <a onClick={() => scrollToSection("trabalhos")} className="flex gap-2 cursor-pointer hover:text-eva-lightpink transition">
                                    <GrGallery /> Trabalhos
                                </a>
                            </li>
                            <li>
                                <a onClick={() => scrollToSection("contato")} className="flex gap-2 cursor-pointer hover:text-eva-lightpink transition">
                                    <FaEnvelope /> Contato
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p>© 2025 Casa Eva - Beuty & Hair</p>
                </div>
            </footer>
            <div className="mx-auto px-4 text-center bg-black w-full text-white">
                <p>
                    Desenvolvido por <a href="https://rudr1gu.vercel.app" target="_blank" className="text-gray-200 hover:underline">Rudrigu</a> © 2025
                </p>
            </div>
        </>
    );
}

export default Footer;