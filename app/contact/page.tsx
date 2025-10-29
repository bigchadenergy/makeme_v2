import Link from 'next/link';

const contactLinks = [
  { label: 'Email', href: 'mailto:build@gulfstreamframing.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/gulfstream-metals/' },
  { label: 'Calendly', href: 'https://calendly.com/' }
];

export default function ContactPage() {
  return (
    <main>
      <header className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="hero-title" style={{ fontSize: '1.1rem' }}>
            Gulfstream Framing
          </Link>
          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <section>
        <div className="container">
          <h1 className="section-title">Let&apos;s Build Something Stronger.</h1>
          <p className="section-subtitle subtitle">
            Share your project vision and we&apos;ll align the right framing system, crew, and schedule to deliver Gulfstream-grade execution.
          </p>

          <form
            className="card"
            style={{
              background: 'rgba(15, 28, 46, 0.85)',
              borderColor: 'rgba(47, 110, 158, 0.35)'
            }}
          >
            <div style={{ display: 'grid', gap: '1rem' }}>
              <label className="body-text" style={{ display: 'grid', gap: '0.35rem', color: 'var(--color-steel-gray)' }}>
                Name
                <input type="text" name="name" required className="form-input" placeholder="Your name" />
              </label>
              <label className="body-text" style={{ display: 'grid', gap: '0.35rem', color: 'var(--color-steel-gray)' }}>
                Email
                <input type="email" name="email" required className="form-input" placeholder="name@email.com" />
              </label>
              <label className="body-text" style={{ display: 'grid', gap: '0.35rem', color: 'var(--color-steel-gray)' }}>
                Company
                <input type="text" name="company" className="form-input" placeholder="Organization" />
              </label>
              <label className="body-text" style={{ display: 'grid', gap: '0.35rem', color: 'var(--color-steel-gray)' }}>
                Project Location
                <input type="text" name="location" className="form-input" placeholder="City, FL" />
              </label>
              <label className="body-text" style={{ display: 'grid', gap: '0.35rem', color: 'var(--color-steel-gray)' }}>
                Message
                <textarea name="message" rows={5} className="form-input" placeholder="Tell us about your scope" />
              </label>
            </div>
            <button type="submit" className="primary-btn" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>
              Submit Inquiry
            </button>
          </form>

          <div style={{ marginTop: '2.5rem' }}>
            <h2 className="subtitle" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-steel-gray)' }}>
              Direct Connections
            </h2>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              {contactLinks.map((link) => (
                <Link key={link.label} href={link.href} className="secondary-btn">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Gulfstream Framing. Built with Gulfstream Metals discipline.
      </footer>
    </main>
  );
}
