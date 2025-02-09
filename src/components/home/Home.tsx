import { Calendar } from "lucide-react"
import logo from "../../assets/logo.png"


const Home = () => {
    return (
        <header className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0">
                <img
                    src="https://img.freepik.com/vetores-gratis/fundo-de-desenho-floral-linear_23-2149130875.jpg?t=st=1739128803~exp=1739132403~hmac=d31b808e8b1589ba95cbd9ee94855e18271c8549328809d4882d5c31c0cf1d15&w=1380"
                    alt="Salão de Beleza"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-rose-100/80 to-rose-50/90"></div>
            </div>
            <div className="relative z-10 text-center px-4 flex flex-col items-center gap-4">
                <img src={logo} alt="logo da casa eva" className="h-1/3 w-1/3" />
                <a
                    href="#agendamento"
                    className="inline-flex items-center gap-2 bg-rose-700 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-800 transition-colors"
                >
                    <Calendar size={20} />
                    Agende seu Horário
                </a>
            </div>
        </header>
    )
}

export default Home