import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="nav-wrapper">
      <nav className="navbar">

        <a href="/" className="logo">
          <span className="hotel">Hotel</span>

          <div className="logo-x">
            X
          </div>
        </a>

        <ul className={`nav-links ${isOpen ? "nav-links-open" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#ai-features" onClick={closeMenu}>AI</a></li>
          <li><a href="#features" onClick={closeMenu}>Features</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
          <li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
          <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>

          <a href="#contact" className="cta-btn cta-btn-mobile" onClick={closeMenu}>
            Get Started
          </a>
        </ul>

        <a href="#contact" className="cta-btn cta-btn-desktop">
          Get Started
        </a>

        <button
          className={`hamburger ${isOpen ? "hamburger-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>
    </header>
  );
};

export default Navbar;