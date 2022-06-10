import "../styles/globals.css";
import Navbar from "../components/base/Navbar";
import Footer from "../components/base/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
