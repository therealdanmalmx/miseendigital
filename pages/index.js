import Header from '../components/Header'
import Footer from '../components/Footer'
import About from './about'
import Skills from './skills'
import Testiomonial from './testiomonial'
import Work from './work'

export default function Home() {
  return (
    <div className="App">
        <Header />
        <About />
        <Skills />
        <Testiomonial />
        <Work />
        <Footer />
    </div>
  );
}
