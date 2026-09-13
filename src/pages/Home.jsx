import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Guarantee from "../components/Guarantee";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <Footer />
    </>
  );
}

export default Home;