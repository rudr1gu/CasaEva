import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import ServicesSection from "./components/works/ServicesSection";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <main className="min-h-screen bg-rose-50">
      <Home />
      <About />
      <ServicesSection />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;