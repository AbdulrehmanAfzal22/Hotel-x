import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Features from "../../components/Features/Features";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
