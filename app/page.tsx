import Image from 'next/image';
import Link from 'next/link';

const services = [
  'Structural Metal Framing',
  'Load-Bearing Wall Systems',
  'Roof Truss & Joist Fabrication',
  'Developer & GC Partnerships',
  'Preconstruction Design Assist',
  '3D Modeling & Rendering'
];

const benefits = [
  {
    stat: '35% faster',
    title: 'Accelerated Schedules',
    copy:
      'Cold-formed framing kits arrive cut-to-length, enabling rapid, sequenced assembly without waiting on curing or heavy welding.'
  },
  {
    stat: '20% cost delta',
    title: 'Predictable Budgets',
    copy:
      'Integrated takeoffs and CNC fabrication reduce on-site rework, keeping contingencies low while keeping the project fully custom—not prefab.'
  },
  {
    stat: '140 mph+',
    title: 'Coastal Resilience',
    copy:
      'Engineered systems exceed hurricane wind-load standards for the Gulf Coast, resisting corrosion and moisture far better than wood or hybrid steel.'
  },
  {
    stat: 'Zero hot work',
    title: 'Safer Installations',
    copy:
      'Panelized metal framing assembles with mechanical fastening, eliminating the fire risk and logistics of structural steel welding on tight coastal sites.'
  }
];

export default function HomePage() {
  return (
    <main>
      <header className="navbar">
        <div className="navbar-inner">
          <Link href="#" className="hero-title" style={{ fontSize: '1.1rem' }}>
            Gulfstream Framing
          </Link>
          <nav className="nav-links">
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#benefits">Benefits</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="container hero" id="home">
        <div className="hero-copy">
          <h1 className="hero-title">Precision Framing. Gulfstream Strength.</h1>
          <p className="subtitle">
            From steel to structure — Gulfstream Framing brings the discipline of the metals industry to coastal construction.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="primary-btn">
              Let&apos;s Build Something Stronger
            </Link>
            <Link href="#about" className="secondary-btn">
              Explore Our Story
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
            alt="Steel framing overlooking the coast"
            width={700}
            height={500}
            priority
            style={{ borderRadius: '20px', border: '1px solid rgba(176, 182, 186, 0.3)' }}
          />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">Gulfstream Metals Legacy</h2>
          <p className="section-subtitle subtitle">
            Gulfstream Framing is the next chapter of a 35-year heritage in the metals supply chain. Founder Paul Carrodus scaled Gulfstream Metals and co-founded Reibus—SoftBank backed at a $750M valuation—to bring digital rigor to industrial procurement. Today, that same execution focus fuels a specialist framing partner for high-end residential and mixed-use work along Florida&apos;s Gulf Coast.
          </p>
          <div className="cards-grid">
            <article className="card">
              <h3 className="subtitle" style={{ color: 'var(--color-steel-gray)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Mission
              </h3>
              <p className="body-text">
                Deliver structural metal framing systems that match the precision of Fortune 500 metals operations while embracing the bespoke design intent of Rosemary Beach and Scenic 30A developments.
              </p>
            </article>
            <article className="card">
              <h3 className="subtitle" style={{ color: 'var(--color-steel-gray)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Where We Build
              </h3>
              <p className="body-text">
                Focused on luxury coastal homes, boutique mixed-use, and hospitality projects stretching from Alys Beach to WaterColor—delivering crews who understand HOA guidelines and high-touch owner expectations.
              </p>
            </article>
            <article className="card">
              <h3 className="subtitle" style={{ color: 'var(--color-steel-gray)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Execution
              </h3>
              <p className="body-text">
                Lean, technology-enabled coordination using BIM, digital QA/QC, and supplier relationships forged in the metals industry to eliminate downtime between design intent and structural delivery.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h2 className="section-title">Framing Systems &amp; Services</h2>
          <p className="section-subtitle subtitle">
            Integrated design, fabrication, and field installation tailored to coastal structural requirements.
          </p>
          <div className="cards-grid">
            {services.map((service) => (
              <article key={service} className="card">
                <h3 className="subtitle" style={{ color: 'var(--color-ocean-blue)', fontSize: '1.1rem' }}>
                  {service}
                </h3>
                <p className="body-text" style={{ color: 'var(--color-steel-gray)' }}>
                  {service === 'Structural Metal Framing' &&
                    'Custom-engineered systems leveraging cold-formed steel backed by metals-industry QA standards.'}
                  {service === 'Load-Bearing Wall Systems' &&
                    'Panelized, labeled wall segments that deliver dimensionally precise backbones for finishes and MEP rough-ins.'}
                  {service === 'Roof Truss & Joist Fabrication' &&
                    'Lightweight assemblies designed for long spans, hurricane uplift, and rooftop amenity loads.'}
                  {service === 'Developer & GC Partnerships' &&
                    'Embedded partners from preconstruction through turnover, aligning scopes, sequencing, and pro forma goals.'}
                  {service === 'Preconstruction Design Assist' &&
                    'Constructability reviews, value engineering, and schedule modeling grounded in decades of supply chain data.'}
                  {service === '3D Modeling & Rendering' &&
                    'Immersive coordination sets with AR-ready models that keep owners and architects engaged.'}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits">
        <div className="container">
          <h2 className="section-title">Why Metal Outperforms Structural Steel On The Coast</h2>
          <p className="section-subtitle subtitle">
            Gulfstream Framing delivers the strength of steel with the agility of precision manufacturing—without the weight, hot work, or prefab stigma.
          </p>
          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="benefit-item">
                <div className="benefit-stat">{benefit.stat}</div>
                <h3 className="subtitle" style={{ color: 'var(--color-white)', fontSize: '1.3rem' }}>
                  {benefit.title}
                </h3>
                <p className="body-text" style={{ color: 'var(--color-steel-gray)' }}>
                  {benefit.copy}
                </p>
              </article>
            ))}
          </div>
          <div className="business-cta">
            <h3 className="subtitle" style={{ fontSize: '1.4rem', color: 'var(--color-white)' }}>
              Investor &amp; Partner Overview
            </h3>
            <p className="body-text" style={{ color: 'var(--color-steel-gray)', marginTop: '0.5rem', maxWidth: '60ch' }}>
              Learn how Gulfstream Framing leverages a minimal-overhead, subcontract-led model, anchored by Gulfstream Metals relationships, to create resilient cash flow and future vertical integration.
            </p>
            <Link href="/investor" className="secondary-btn" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
              View Secure Overview
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '2.2rem' }}>
            Let&apos;s Build Something Stronger.
          </h2>
          <p className="section-subtitle subtitle" style={{ margin: '0 auto 2rem', maxWidth: '45ch' }}>
            Schedule a strategy session to align your coastal project with Gulfstream Framing&apos;s precision crews and metals-backed supply chain.
          </p>
          <Link href="/contact" className="primary-btn">
            Connect With Our Team
          </Link>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Gulfstream Framing. Built with Gulfstream Metals discipline.
      </footer>
    </main>
  );
}
