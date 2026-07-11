import './App.css';
import Navbar from './page/navbar/page.jsx';
import Hero from './page/hero/page.jsx';
import Marquee from './page/officials/page.jsx';
import Counters from './page/counters/page.jsx';
import CTA from './page/cta/page.jsx';
import HotelModules from './page/qualities/page.jsx';
import AiFeatures from './page/ai-feature/page.jsx';
import CompetitorTable from './page/table/page.jsx';
import HotelClients from './page/client/page.jsx';
import Testimonials from './page/testimonials/page.jsx';
import CTATwo from './page/cta-2/page.jsx';
import Pricing from './page/pricing/page.jsx';
import FAQ from './page/faq/page.jsx';
import Contact from './page/contact/page.jsx';
import Footer from './page/footer/page.jsx';
function App() {
  return (
  <>
  {/* */}
  <Navbar/> 
  <Hero/>
  <Marquee/>
  <Counters/>
  <AiFeatures/>
  <CTA/>
   <HotelModules/>
   <HotelClients/>
     <Testimonials/>
  <CTATwo/>
  <CompetitorTable/>
  <Pricing/>
  <FAQ/>
  <Contact/>
<Footer/> 
  
  </>
  );


//   Landing Page Structure:
// Header
// Accreditation of Software with departments (4 to 5)
// Counters
// CTA
// AI Features
// PPT Features
// Client Logos
// Testimonials
// CTA
// Competitor Table (5 rows, 5 columns)
// Pricing (3-card)
// FAQ (5 FAQs)
// Contact form 
// Footer (Address, Phone, Company social handles)

}

export default App;
