import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./about";
import Skills from "./skills";
import Testimonial from "./testimonials";
import Services from "./services";
import Contacts from "./contacts";

export default function Home() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Testimonial />
      <Contacts />
      <Footer />
    </div>
  );
}
