import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import ServicesSection from "./components/works/ServicesSection";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen bg-rose-50">
        <section id="inicio">
          <Home />
        </section>
        <section id="sobre">
          <About />
        </section>
        <section id="servicos">
          <ServicesSection />
        </section>
        <section id="trabalhos">
          <Gallery />
        </section>
        <section id="contato">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;