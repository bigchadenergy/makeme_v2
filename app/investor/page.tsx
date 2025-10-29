'use client';

import { useState } from 'react';
import Link from 'next/link';

const overviewPoints = [
  {
    title: 'Minimal Overhead Launch',
    description:
      'Leadership-led estimating, engineering partners on retainer, and subcontract crews paid per milestone keep fixed costs exceptionally lean.'
  },
  {
    title: 'Partnership Structures',
    description:
      'Targeting co-investors for equipment lines, developer equity swaps, and performance-based profit sharing to align execution with returns.'
  },
  {
    title: 'Trusted Subcontract Model',
    description:
      'Dedicated foremen manage vetted coastal crews who already build to Gulfstream Metals standards, allowing rapid mobilization.'
  },
  {
    title: 'Pipeline Advantage',
    description:
      'Immediate opportunity flow through existing developer, architect, and country club networks focused on 30A luxury projects.'
  },
  {
    title: 'Capital Alignment',
    description:
      'Engaging partners anchored in construction and real assets seeking predictable cash yields secured by contracted framing packages.'
  },
  {
    title: 'Vertical Integration Vision',
    description:
      'Scale framing cash flow into Gulf Coast fabrication and prefab capabilities, capturing higher-margin scope while protecting design flexibility.'
  }
];

export default function InvestorPage() {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password.trim().toLowerCase() === 'steel') {
      setAuthorized(true);
      setError('');
    } else {
      setAuthorized(false);
      setError('Incorrect password. Please reach out for investor access.');
    }
  };

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
        <div className="container" style={{ maxWidth: '720px' }}>
          <h1 className="section-title">Investor &amp; Partner Overview</h1>
          <p className="section-subtitle subtitle">
            Access the capital and partnership snapshot guiding Gulfstream Framing&apos;s growth.
          </p>

          {!authorized ? (
            <form onSubmit={handleSubmit} className="card" style={{ background: 'rgba(15, 28, 46, 0.85)' }}>
              <label className="body-text" style={{ display: 'grid', gap: '0.5rem', color: 'var(--color-steel-gray)' }}>
                Enter Password
                <input
                  type="password"
                  className="form-input"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                  aria-label="Password"
                />
              </label>
              <button type="submit" className="primary-btn" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>
                Unlock Overview
              </button>
              {error && (
                <p className="body-text" style={{ color: '#ff8080', marginTop: '0.75rem' }}>
                  {error}
                </p>
              )}
            </form>
          ) : (
            <div className="cards-grid" style={{ marginTop: '2rem' }}>
              {overviewPoints.map((point) => (
                <article key={point.title} className="card" style={{ borderColor: 'rgba(47, 110, 158, 0.35)' }}>
                  <h2 className="subtitle" style={{ color: 'var(--color-white)', fontSize: '1.2rem' }}>
                    {point.title}
                  </h2>
                  <p className="body-text" style={{ color: 'var(--color-steel-gray)' }}>
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Gulfstream Framing. Built with Gulfstream Metals discipline.
      </footer>
    </main>
  );
}
