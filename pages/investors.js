import { useState } from 'react';
import Layout from '../components/Layout';

function InvestorsPage() {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim().toLowerCase() === 'steel') {
      setUnlocked(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setUnlocked(false);
    }
  };

  return (
    <Layout>
      <section>
        <div className="container" style={{ minHeight: '70vh' }}>
          {!unlocked ? (
            <div className="password-container">
              <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '12px' }}>
                Investor &amp; Partner Overview
              </h1>
              <p className="body-text" style={{ color: 'var(--steel-gray)' }}>
                Enter the access password to review the Gulfstream Framing business plan summary.
              </p>
              <form onSubmit={handleSubmit} style={{ marginTop: '12px' }}>
                <input
                  type="password"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Password"
                />
                <button type="submit" className="button" style={{ marginTop: '20px' }}>
                  Unlock Overview
                </button>
                {error && (
                  <p style={{ color: '#ff7676', marginTop: '12px', fontWeight: 600 }}>{error}</p>
                )}
              </form>
            </div>
          ) : (
            <div className="card" style={{ marginTop: '40px' }}>
              <h1 className="section-title" style={{ fontSize: '2.4rem' }}>
                Investor &amp; Partner Overview
              </h1>
              <p className="body-text" style={{ marginBottom: '24px' }}>
                Gulfstream Framing combines low-overhead operations with proven metals industry credibility to scale coastal framing delivery.
              </p>
              <ul className="list-disc">
                <li><strong>Minimal Overhead Startup:</strong> Lean leadership core leveraging Gulfstream Metals infrastructure.</li>
                <li><strong>Partnership Structure:</strong> Equity alignment for strategic developers and capital partners seeking durable cashflow.</li>
                <li><strong>Trusted Subcontract Crews:</strong> Battle-tested teams mobilized through long-standing metals network.</li>
                <li><strong>Warm Pipeline:</strong> Active opportunities via Gulfstream&apos;s developer relationships and Gulf Coast country club network.</li>
                <li><strong>Capital Alignment:</strong> Targeting investors focused on construction, real assets, and income-producing partnerships.</li>
                <li><strong>Growth Vision:</strong> Build recurring framing contracts, then vertically integrate fabrication and advanced prefab capabilities.</li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default InvestorsPage;
