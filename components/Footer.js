import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo" style={{ marginBottom: '12px' }}>
            Gulfstream <span>Framing</span>
          </div>
          <p className="body-text" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Precision framing for Florida&apos;s Gulf Coast. Built on 35 years of metals execution.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <nav className="body-text" style={{ display: 'grid', gap: '8px' }}>
            <Link href="/#about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#benefits">Benefits</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div>
          <h4>Connect</h4>
          <div style={{ display: 'grid', gap: '8px' }}>
            <a href="mailto:info@gulfstreamframing.com">Email</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Calendly
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
