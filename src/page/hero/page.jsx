import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./hero.css";
import hotelImg from "../../assets/hotel-management.png";


const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-badge">
            Crafted by Hashverx
          </span>

          <h1>
            The Enterprise Hotel OS: Connect Reception, 
            &nbsp;
            <span>Inventory, and Multi-Branch Hospitality Networks</span>
          </h1>

          <p>
          Stop losing margins to disconnected hotel software. A single, unified
cloud platform built to seamlessly synchronize automated check-ins, staff workflows,
food inventory, cafe POS, and car rentals across all your hotel branches.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-btn">
              Schedule a Live Demo <ArrowRight size={20} />
            </a>

            <a href="#features" className="secondary-btn">
              View System 
            </a>
          </div>

          {/* <div className="hero-mini-stats">
            <div><strong>18+</strong><span>Rooms ready</span></div>
            <div><strong>0</strong><span>Double bookings</span></div>
            <div><strong>24/7</strong><span>Live control</span></div>
          </div> */}
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 45, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-card">
            <img src={hotelImg} alt="Hotel management dashboard" />

            {/* <motion.div
              className="floating-card card-top"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <CalendarCheck size={22} />
              <div>
                <strong>Today’s Check-ins</strong>
                <span>18 rooms ready</span>
              </div>
            </motion.div> */}

            {/* <motion.div
              className="floating-card card-bottom"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.4, repeat: Infinity }}
            >
              <ShieldCheck size={22} />
              <div>
                <strong>No Double Bookings</strong>
                <span>Live channel sync active</span>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;