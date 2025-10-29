'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky-nav">
      <nav className="nav-container">
        <Link href="/" className="nav-logo">
          Gulfstream Framing
        </Link>
        <div className="nav-links">
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#benefits">Benefits</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      {isMenuOpen ? (
        <div id="mobile-menu" className="mobile-menu">
          <Link href="/#about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="/#services" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link href="/#benefits" onClick={() => setIsMenuOpen(false)}>
            Benefits
          </Link>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      ) : null}
    </header>
  );
}
