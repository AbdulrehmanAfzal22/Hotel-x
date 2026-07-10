import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Building2,
  User,
  MessageSquare,
} from "lucide-react";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>Contact Sales</span>

          <h2>
            Let’s modernize your
            <strong> hotel operations.</strong>
          </h2>

          <p>
            Tell us about your hotel and our team will help you choose the right
            HotelX setup for bookings, rooms, billing, staff, and reports.
          </p>

          <div className="contact-info">
            <div>
              <Mail size={18} />
              sales@hotelx.com
            </div>

            <div>
              <Phone size={18} />
              +92 300 2324443 <br/>
              +1 343 2324443
            </div>

            <div>
              <MapPin size={18} />
              Lahore, Pakistan
              Makkah, Saudi Arabia
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <div className="input-box">
                <User size={18} />
                <input type="text" placeholder="Enter your name" />
              </div>
            </div>

            <div className="form-group">
              <label>Hotel Name</label>
              <div className="input-box">
                <Building2 size={18} />
                <input type="text" placeholder="Hotel / company name" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <div className="input-box">
              <Mail size={18} />
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <div className="textarea-box">
              <MessageSquare size={18} />
              <textarea placeholder="Tell us what you need..." rows="5"></textarea>
            </div>
          </div>

          <button type="submit" className="contact-btn">
            Send message
            <ArrowRight size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}