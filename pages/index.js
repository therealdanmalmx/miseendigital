import Footer from "../components/base/Footer";
import Hero from "../components/base/Hero";
import Works from "./works";
import Skills from "../components/home/Skills";
import Testimonial from "../components/home/Testimonials";
import Services from "../components/home/Services";
import Contacts from "../components/home/Contacts";

export default function Home() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Works />
      <Skills />
      <Testimonial />
      <Contacts />
      <Footer />
    </div>
  );
}
