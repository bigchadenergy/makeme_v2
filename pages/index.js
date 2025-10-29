import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

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
    title: 'Accelerated Timelines',
    description:
      'Cold-formed metal framing installs up to 30% faster than conventional steel erection, compressing schedules for luxury coastal builds.'
  },
  {
    title: 'Lightweight Strength',
    description:
      'Components deliver equivalent load capacity with up to 60% less material weight, easing crane requirements and labor demands.'
  },
  {
    title: 'Hurricane-Ready Systems',
    description:
      'Engineered to exceed 150 mph wind ratings with minimal deflection, reinforcing resilience across Rosemary Beach and 30A properties.'
  },
  {
    title: 'Jobsite Efficiency',
    description:
      'Precision roll-formed members arrive sequenced for rapid assembly—no prefab modules, just disciplined on-site execution.'
  },
  {
    title: 'Cost Predictability',
    description:
      'Standardized gauge packages and repeatable detailing reduce change orders by 25%, keeping developers on budget.'
  },
  {
    title: 'Performance Aesthetics',
    description:
      'Slimmer profiles maximize glazing and coastal views while preserving structural integrity and long-term durability.'
  }
];

function HomePage() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-image-wrapper">
          <Image
            src="https://images.unsplash.com/photo-1529429617124-aee7992f4235?auto=format&fit=crop&w=1600&q=80"
            alt="Steel framing overlooking the Gulf Coast"
            fill
            className="hero-image"
            priority
          />
        </div>
        <div className="container hero-content">
          <p className="section-subtitle" style={{ color: 'var(--steel-gray)', marginBottom: '12px' }}>
            Gulf Coast Structural Specialists
          </p>
          <h1 className="hero-headline">Precision Framing. Gulfstream Strength.</h1>
          <p className="hero-subhead">
            From steel to structure — Gulfstream Framing brings the discipline of the metals industry to coastal construction.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="button">
              Let&apos;s Build Something Stronger
            </Link>
            <Link href="/investors" className="button secondary">
              Investor & Partner Overview
            </Link>
          </div>
          <div className="metrics">
            <div className="metric-card">
              <h4>35 Years</h4>
              <p>Metals industry legacy powering our framing systems.</p>
            </div>
            <div className="metric-card">
              <h4>$750M</h4>
              <p>SoftBank-backed enterprise experience via Reibus.</p>
            </div>
            <div className="metric-card">
              <h4>30A Focus</h4>
              <p>Dedicated to high-end residential and mixed-use builds.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">Legacy Forged in Metals</h2>
          <p className="section-subtitle">
            Gulfstream Framing extends the proven execution of Gulfstream Metals—the same team behind Reibus, a SoftBank-backed, $750M enterprise—into the Gulf Coast built environment.
          </p>
          <div className="card" style={{ background: 'rgba(15, 28, 46, 0.78)' }}>
            <p className="body-text">
              Founded by Paul Carrodus, Gulfstream Metals has spent 35 years mastering steel supply chains, logistics, and customer responsiveness. That institutional knowledge now anchors Gulfstream Framing, a venture designed to deliver structural framing packages for high-end residential and mixed-use projects in Rosemary Beach, Alys Beach, and along Scenic Highway 30A. We deploy the same level of operational rigor—data-backed planning, disciplined crews, and transparent communication—to frame faster, stronger, and with greater precision than traditional site-built approaches.
            </p>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h2 className="section-title">Framing Systems &amp; Services</h2>
          <p className="section-subtitle">Integrated delivery for developers and builders seeking performance-driven metal framing.</p>
          <div className="card-grid">
            {services.map((service) => (
              <div key={service} className="card">
                <h3 style={{ fontFamily: 'var(--font-subtitle)', color: 'var(--white)', marginBottom: '12px' }}>{service}</h3>
                <p className="body-text" style={{ color: 'rgba(224, 230, 236, 0.85)' }}>
                  Gulfstream-standard detailing, coordinated installation crews, and proactive schedule alignment.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits">
        <div className="container">
          <h2 className="section-title">Why Metal Framing Wins Coastal Projects</h2>
          <p className="section-subtitle">
            Speed, resilience, and design flexibility—without the limitations of prefab modules. Gulfstream Framing optimizes cold-formed systems for bespoke Gulf Coast architecture.
          </p>
          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="benefit-card">
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: '120px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready for Coastal Execution?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px', color: 'var(--steel-gray)' }}>
            Gulfstream Framing partners with developers and general contractors to deliver disciplined framing systems across Florida&apos;s Gulf Coast.
          </p>
          <Link href="/contact" className="button">
            Let&apos;s Build Something Stronger
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
