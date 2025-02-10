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
        <Home />
        <About />
        <ServicesSection />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;