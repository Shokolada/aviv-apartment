import Hero from "./components/Hero";
import GeneralInfo from "./components/GeneralInfo";
import Kitchen from "./components/Kitchen";
import Bathroom from "./components/Bathroom";
import Bedroom from "./components/Bedroom";
import Garden from "./components/Garden";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <GeneralInfo />
      <Kitchen />
      <Bathroom />
      <Bedroom />
      <Garden />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
