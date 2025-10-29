import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#benefits', label: 'Benefits' },
  { href: '/contact', label: 'Contact' }
];

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="logo">
          Gulfstream <span>Framing</span>
        </Link>
        <button
          className="mobile-menu-button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/investors" onClick={() => setOpen(false)} className="button secondary" style={{ padding: '10px 18px' }}>
            Investor Access
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
