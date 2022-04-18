import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./about";
import Skills from "./skills";
import Testimonial from "./testimonials";
import Work from "./work";

export default function Home() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}
