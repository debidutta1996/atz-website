import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyChoose />
      <Contact />
      <Footer />
    </>
  );
}