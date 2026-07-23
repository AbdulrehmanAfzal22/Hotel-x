import Header from "../../sections/navbar/index";
import HeroSection from "../../sections/hero/index.jsx";
import Marquee from "../../sections/officials/index.jsx";
import Counters from "../../sections/counters/index.jsx";
import AiFeatures from "../../sections/ai-feature/index.jsx";
import CTA from "../../sections/cta/index.jsx";
import HotelModules from "../../sections/qualities/index.jsx";
import HotelClients from "../../sections/client/index.jsx";
import CompetitorTable from "../../sections/table/index.jsx";
import TestimonialsSection from "../../sections/testimonials/index.jsx";
import CTATwo from "../../sections/cta-2/index.jsx";
import Pricing from "../../sections/pricing/index.jsx";
import FAQ from "../../sections/faq/index.jsx";
import ContactSection from "../../sections/contact/index.jsx";
import Footer from "../../sections/footer/index.jsx";
function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Marquee />
        <Counters />
        <AiFeatures />
        <CTA />
        <HotelModules />
        <HotelClients />
        <CompetitorTable />
        <TestimonialsSection />
        <CTATwo />
        <Pricing />
        <FAQ />
        <ContactSection/>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
