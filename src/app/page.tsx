import Hero from "./components/Hero";
import GeneralInfo from "./components/GeneralInfo";
import ApartmentDetails from "./components/ApartmentDetails";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AccessibilityMenu from "./components/AccessibilityMenu";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <GeneralInfo />
        <ApartmentDetails />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <AccessibilityMenu />
    </>
  );
}
