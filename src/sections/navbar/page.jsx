import { useState } from "react";
import "./navbar.css";
import { navLinks, navbarCta } from "../../data/staticData";

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
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}

          <a href={navbarCta.href} className="cta-btn cta-btn-mobile" onClick={closeMenu}>
            {navbarCta.label}
          </a>
        </ul>

        <a href={navbarCta.href} className="cta-btn cta-btn-desktop">
          {navbarCta.label}
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