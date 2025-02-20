import { Calendar } from "lucide-react"
import logo from "../../assets/logo.png"
import { FaCalendar, FaInstagram, FaWhatsapp } from "react-icons/fa"


const Home = () => {
    return (
        <section className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0">
                <img
                    src="https://img.freepik.com/vetores-gratis/fundo-de-desenho-floral-linear_23-2149130875.jpg?t=st=1739128803~exp=1739132403~hmac=d31b808e8b1589ba95cbd9ee94855e18271c8549328809d4882d5c31c0cf1d15&w=1380"
                    alt="Salão de Beleza"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-rose-100/80 to-rose-50/90"></div>
            </div>
            <div className="relative z-10 text-center px-4 flex flex-col items-center gap-4">
                <img src={logo} alt="logo da casa eva" className="w-50 md:w-70 lg:w-80 max-w-xs" />
                <div className="flex justify-center gap-4">
                    <a href="https://client.tuaagenda.com/c/CasaEvaCB" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-eva-lightpink hover:bg-eva-pink transition">
                        <FaCalendar className="text-white text-lg" />
                    </a>
                    <a href="https://www.whatsapp.com/catalog/5511979561872/?app_absent=0" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-eva-lightpink hover:bg-eva-pink transition">
                        <FaWhatsapp className="text-white text-lg" />
                    </a>
                    <a href="https://www.instagram.com/casaeva.beauty" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-eva-lightpink hover:bg-eva-pink transition">
                        <FaInstagram className="text-white text-lg" />
                    </a>
                </div>
                <a
                    href="#agendamento"
                    className="inline-flex items-center gap-2 bg-eva-lightpink text-white px-8 py-3 rounded-full font-medium hover:bg-eva-pink transition-colors"
                >
                    <Calendar size={20} />
                    Agende seu Horário
                </a>
               
            </div>
        </section>
    )
}

export default Home