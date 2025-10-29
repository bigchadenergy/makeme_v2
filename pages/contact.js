import Layout from '../components/Layout';

function ContactPage() {
  return (
    <Layout>
      <section>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h1 className="section-title">Let&apos;s Build Something Stronger</h1>
          <p className="section-subtitle">
            Share your upcoming project and our team will coordinate a discovery session within one business day.
          </p>
          <form className="contact-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="name@company.com" />
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
              <textarea name="message" placeholder="Tell us about your scope"></textarea>
            </label>
            <button type="submit" className="button">
              Submit Inquiry
            </button>
          </form>
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <p className="body-text" style={{ color: 'var(--steel-gray)' }}>Prefer a direct introduction?</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a className="button secondary" href="mailto:info@gulfstreamframing.com">Email</a>
              <a className="button secondary" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="button secondary" href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Calendly
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
