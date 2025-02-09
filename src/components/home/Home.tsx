import { Calendar } from "lucide-react"

const Home = () => {
    return (
        <header className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80"
                    alt="Salão de Beleza"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-rose-100/80 to-rose-50/90"></div>
            </div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl md:text-8xl font-serif text-rose-900 mb-4">Casa Eva</h1>
                <p className="text-xl md:text-2xl text-rose-700 mb-8 font-light">Beleza Natural & Bem-estar</p>
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