import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Contact | Gulfstream Framing'
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="section light" style={{ paddingTop: '6rem' }}>
        <div className="grid" style={{ gap: '2rem' }}>
          <h1 style={{ fontFamily: "var(--font-title)", fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', textAlign: 'center' }}>
            Start the Conversation
          </h1>
          <p className="lead" style={{ textAlign: 'center' }}>
            Share your project vision and we&apos;ll align Gulfstream crews, engineering partners, and supply networks to
            deliver a framing package that stands up to the coast.
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
              <textarea name="message" rows={6} placeholder="Project scope, timeline, and goals" required />
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
        </div>
      </section>
      <footer className="footer">© {new Date().getFullYear()} Gulfstream Framing. All rights reserved.</footer>
    </main>
  );
}
