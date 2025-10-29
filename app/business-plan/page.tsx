'use client';

import { FormEvent, useState } from 'react';
import Navbar from '@/components/Navbar';

const PASSWORD = 'steel';

export default function BusinessPlanPage() {
  const [input, setInput] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim().toLowerCase() === PASSWORD) {
      setAuthorized(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <main>
      <Navbar />
      {!authorized ? (
        <div className="password-wrapper">
          <h1>Investor &amp; Partner Overview</h1>
          <p style={{ marginBottom: '1.5rem', color: 'var(--slate-gray)', textAlign: 'center' }}>
            Enter the access password provided by Gulfstream Framing.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Password"
              aria-label="Password"
            />
            <button type="submit">Enter</button>
            {error ? (
              <span style={{ color: '#b00020', fontSize: '0.95rem', textAlign: 'center' }}>{error}</span>
            ) : null}
          </form>
        </div>
      ) : (
        <div className="password-content">
          <h2>Gulfstream Framing | Investor &amp; Partner Overview</h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--slate-gray)' }}>
            Gulfstream Framing leverages three decades of metals expertise to create a lean, high-trust framing company
            focused on Florida&apos;s Gulf Coast luxury corridor.
          </p>
          <ul>
            <li>Minimal overhead startup with executive oversight, project leadership, and a modular field team model.</li>
            <li>Partnership structures that align developer capital, Gulfstream operations, and long-term profit sharing.</li>
            <li>Subcontract-based execution with vetted crews and quality controls established in the metals industry.</li>
            <li>Deal pipeline sourced through established developer relationships and private club networks along 30A.</li>
            <li>Capital partners prioritized from construction, real asset, and family office investors seeking durable cash flow.</li>
            <li>
              Vision: secure recurring framing contracts, reinvest into proprietary fabrication capabilities, and eventually
              integrate selective prefab offerings.
            </li>
          </ul>
        </div>
      )}
    </main>
  );
}
