import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./about";
import Skills from "./skills";
import Testimonial from "./testimonial";
import Work from "./work";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}
