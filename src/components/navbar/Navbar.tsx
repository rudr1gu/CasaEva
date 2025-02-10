import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import { GiButterflyFlower, GiLipstick } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-around items-center py-4 px-8 transition-all duration-300 z-50 ${
        isScrolled ? "bg-eva-lightpink shadow-md" : "bg-transparent backdrop-blur-lg"
      }`}
    >
      <h1
        className={`text-2xl font-bold flex items-center cursor-pointer gap-4 transition-all duration-300 ${
          isScrolled ? "text-white" : "text-eva-pink"
        }`}
        onClick={() => scrollToSection("inicio")}
      >
        <span className="font-madi text-4xl">Casa Eva</span>
        <GiButterflyFlower />
      </h1>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className={`text-3xl transition-all duration-300 ${isScrolled ? "text-white" : "text-eva-pink"}`}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-eva-lightpink md:bg-transparent flex flex-col md:flex-row items-center gap-6 p-6 md:p-0 md:gap-6 text-lg transition-all duration-300 ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {[
          { id: "inicio", icon: <FaHome />, label: "Início" },
          { id: "sobre", icon: <FaUser />, label: "Sobre" },
          { id: "servicos", icon: <GiLipstick />, label: "Serviços" },
          { id: "trabalhos", icon: <GrGallery />, label: "Trabalhos" },
          { id: "contato", icon: <FaEnvelope />, label: "Contato" },
        ].map(({ id, icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`flex items-center gap-2 transition-all hover:-translate-y-1 ${
              isScrolled ? "text-white hover:text-gray-300" : "text-eva-pink hover:text-gray-300"
            }`}
          >
            {icon} {label}
          </button>
        ))}
      </div>
    </nav>
  );
};


export default Navbar;