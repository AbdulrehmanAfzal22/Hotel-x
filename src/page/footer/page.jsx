import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

import "./footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="hotelx-footer">
      <div className="hotelx-footer-glow hotelx-footer-glow-one"></div>
      <div className="hotelx-footer-glow hotelx-footer-glow-two"></div>

      <div className="hotelx-footer-container">
        <div className="hotelx-footer-top">
          <div className="hotelx-footer-brand">
            <a href="#header" className="hotelx-footer-logo">
              Hotel<span>X</span>
            </a>

            <p>
              A premium hotel management platform built to simplify bookings,
              billing, housekeeping, reporting, AI automation, and guest care.
            </p>

            <div className="hotelx-footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit HotelX on Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit HotelX on Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit HotelX on X"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit HotelX on LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit HotelX on YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="hotelx-footer-column">
            <h3>Product</h3>

            <a href="#features">Features</a>
            <a href="#ai-features">AI Assistant</a>
            <a href="#header">Dashboard</a>
            <a href="#comparison">Comparison</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="hotelx-footer-column">
            <h3>Company</h3>

            <a href="#clients">Clients</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
          </div>

          <div className="hotelx-footer-office">
            <span className="hotelx-office-label">Pakistan</span>
            <h3>Pakistan Office</h3>

            <a
              href="https://maps.google.com/?q=Johar+Town+Lahore+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={18} />
              <span>Johar Town, Lahore, Pakistan</span>
            </a>

            <a href="tel:+923001234567">
              <Phone size={18} />
              <span>+92 300 1234567</span>
            </a>

            <a href="mailto:pakistan@hotelx.com">
              <Mail size={18} />
              <span>pakistan@hotelx.com</span>
            </a>
          </div>

          <div className="hotelx-footer-office">
            <span className="hotelx-office-label">Saudi Arabia</span>
            <h3>Saudi Office</h3>

            <a
              href="https://maps.google.com/?q=Riyadh+Saudi+Arabia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={18} />
              <span>Riyadh, Saudi Arabia</span>
            </a>

            <a href="tel:+966501234567">
              <Phone size={18} />
              <span>+966 50 1234567</span>
            </a>

            <a href="mailto:saudi@hotelx.com">
              <Mail size={18} />
              <span>saudi@hotelx.com</span>
            </a>
          </div>
        </div>

        <div className="hotelx-footer-divider"></div>

        <div className="hotelx-footer-bottom">
          <p>© 2026 HotelX. All rights reserved.</p>

          <div className="hotelx-footer-legal">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/cookies">Cookies</a>
          </div>

          <button
            type="button"
            className="hotelx-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}