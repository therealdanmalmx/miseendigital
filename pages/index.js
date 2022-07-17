import Hero from "../components/base/Hero";
import Works from "./works";
import Testimonial from "../components/home/Testimonials";
import Services from "../components/home/Services";
import Contacts from "../components/home/contacts";

export default function Home() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Works />
      <Testimonial />
      <Contacts />
    </div>
  );
}
