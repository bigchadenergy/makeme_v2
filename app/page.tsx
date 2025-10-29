import Link from 'next/link';
import Navbar from '@/components/Navbar';

const benefits = [
  {
    title: 'Accelerated Schedules',
    description:
      'Cold-formed framing installs up to 40% faster than traditional steel, giving Gulf Coast builds the speed advantage they need before hurricane season.'
  },
  {
    title: 'Precision in Every Member',
    description:
      'Factory-rolled components mean exact tolerances, straighter walls, and fewer onsite adjustments—without the cost or complexity of prefab systems.'
  },
  {
    title: 'Resilience Built In',
    description:
      'Galvanized framing resists corrosion and stands up to salt air, high winds, and impact loads, delivering long-term durability for coastal structures.'
  },
  {
    title: 'Lean Crews, Lower Waste',
    description:
      'Lightweight members and smart staging cut heavy-equipment needs, streamline logistics, and reduce jobsite waste by up to 30%.'
  },
  {
    title: 'Design Freedom',
    description:
      'Longer spans and flexible connection systems unlock open-concept luxury residences while maintaining structural integrity.'
  },
  {
    title: 'Integrated Coordination',
    description:
      '3D modeling and design assist services ensure MEP coordination before crews mobilize, eliminating late-stage clashes.'
  }
];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>Precision Framing. Gulfstream Strength.</h1>
          <p>
            From steel to structure — Gulfstream Framing brings the discipline of the metals industry to coastal
            construction.
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <Link className="cta-button" href="/#contact">
              Let&apos;s Build Something Stronger.
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="section light">
        <div className="grid" style={{ gap: '1.5rem' }}>
          <h2>Legacy Forged in Metals, Focused on Framing</h2>
          <p className="lead">
            Gulfstream Framing is the newest venture from the team behind Gulfstream Metals—led by founder Paul Carrodus,
            who co-founded Reibus, the SoftBank-backed, $750M marketplace redefining industrial metals. After 35 years of
            executing at scale in the metals sector, we&apos;re channeling that operational rigor into high-end framing systems
            for Florida&apos;s Gulf Coast.
          </p>
          <p>
            From Rosemary Beach to Scenic 30A, our crews bring steel-industry precision to residential and mixed-use
            projects. We manage every detail—from material sourcing to onsite coordination—so developers and GCs can rely
            on a partner with proven execution, financial discipline, and deep coastal expertise.
          </p>
        </div>
      </section>

      <section id="services" className="section dark">
        <h2>Services That Drive Structural Confidence</h2>
        <p className="lead">
          Engineered framing systems built for the coast, delivered by metals veterans who understand speed, safety, and
          stakeholder alignment.
        </p>
        <div className="grid services-grid">
          {[
            'Structural Metal Framing',
            'Load-Bearing Wall Systems',
            'Roof Truss & Joist Fabrication',
            'Developer & GC Partnerships',
            'Preconstruction Design Assist',
            '3D Modeling and Rendering'
          ].map((service) => (
            <div key={service} className="service-card">
              <h3>{service}</h3>
              <p>
                Gulfstream teams align early with ownership, design, and site supervision to keep every phase of framing
                sharp, accountable, and hurricane-ready.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="benefits" className="section ocean">
        <h2>Why Metal Framing Wins on the Gulf</h2>
        <p className="lead">
          Built for speed and resilience, cold-formed steel framing outperforms heavy structural steel for coastal luxury
          projects—without sacrificing architectural intent.
        </p>
        <div className="grid benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="benefit-card">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section light">
        <div className="grid" style={{ gap: '2rem' }}>
          <h2>Let&apos;s Build Something Stronger.</h2>
          <p className="lead">
            Share your upcoming project and we&apos;ll align our crews, design teams, and supply partners to frame it right
            the first time.
          </p>
          <form className="contact-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your Name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="name@company.com" required />
            </label>
            <label>
              Company
              <input type="text" name="company" placeholder="Organization" />
            </label>
            <label>
              Project Location
              <input type="text" name="location" placeholder="City, State" />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} placeholder="Project scope, timeline, and goals" required />
            </label>
            <button type="submit">Submit</button>
          </form>
          <div className="secondary-links">
            <Link href="mailto:build@gulfstreamframing.com">Email</Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
            <Link href="https://calendly.com" target="_blank" rel="noreferrer">
              Calendly
            </Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link className="cta-button" href="/business-plan">
              Investor &amp; Partner Overview
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Gulfstream Framing. All rights reserved.</footer>
    </main>
  );
}
