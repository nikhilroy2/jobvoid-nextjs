"use client";

import { 
  FileEdit,
  Target,
  ArrowRight,
  ShieldAlert,
  CalendarDays
} from "lucide-react";
import CTASection from "../../components/CTASection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Apply() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Application submitted! In a real app, this would send your data to the backend.");
  };

  return (
    <main>
      <div className="hero-wrapper">
        <Header />
        <section className="hero">
          <div className="hero-shapes">
            <div className="shape shape-circle-1"></div>
            <div className="shape shape-circle-2"></div>
            <div className="shape shape-circle-3"></div>
            <div className="shape shape-pill shape-pill-1"></div>
            <div className="shape shape-pill shape-pill-2"></div>
          </div>
          <div className="container">
            <h1 className="hero-title">Apply to close.</h1>
            <p className="hero-subtitle" style={{ maxWidth: '850px', margin: '0 auto' }}>
              Built to find closers, not collect résumés. No upload, no cover letter. Answer straight, be specific about what you have closed, and a real team will get back to you in 1 to 4 business days.
            </p>
          </div>
        </section>
      </div>

      {/* Section: The form */}
      <section className="section section-glass" style={{ position: 'relative', zIndex: 10, marginTop: '-40px', paddingTop: '0' }}>
        <div className="container">
          <div className="form-container">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span className="eyebrow"><FileEdit size={16} /> A few minutes</span>
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '0' }}>Tell us what you've closed.</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="two-col-grid" style={{ gap: '24px', marginBottom: '24px' }}>
                <div className="form-group" style={{ marginBottom: '0' }}>
                  <label className="form-label">Full name</label>
                  <input type="text" className="form-input" required placeholder="John Doe" />
                </div>
                <div className="form-group" style={{ marginBottom: '0' }}>
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" required placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="two-col-grid" style={{ gap: '24px', marginBottom: '24px' }}>
                <div className="form-group" style={{ marginBottom: '0' }}>
                  <label className="form-label">Phone, and best time to reach you</label>
                  <input type="text" className="form-input" required placeholder="e.g. 555-123-4567, Afternoons" />
                </div>
                <div className="form-group" style={{ marginBottom: '0' }}>
                  <label className="form-label">Country and time zone</label>
                  <input type="text" className="form-input" required placeholder="e.g. USA, EST" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">How many years have you sold professionally?</label>
                <select className="form-select" required>
                  <option value="" disabled selected>Select an option</option>
                  <option value="Less than 1">Less than 1</option>
                  <option value="1 to 2">1 to 2</option>
                  <option value="3 to 5">3 to 5</option>
                  <option value="5 or more">5 or more</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Have you closed B2B deals over the phone?</label>
                <div className="form-radio-group">
                  <label className="form-radio-label">
                    <input type="radio" name="b2b" value="Yes" required /> Yes
                  </label>
                  <label className="form-radio-label">
                    <input type="radio" name="b2b" value="No" /> No
                  </label>
                  <label className="form-radio-label">
                    <input type="radio" name="b2b" value="Some" /> Some
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">What have you sold, and to whom?</label>
                <textarea className="form-textarea" required placeholder="A few sentences..." style={{ minHeight: '80px' }}></textarea>
              </div>

              <div className="form-group">
                <label className="form-label">Tell us about a specific deal you personally closed that you are proud of. What was it, and how did you close it?</label>
                <textarea className="form-textarea" required placeholder="Be specific about the product, buyer, and your process..."></textarea>
              </div>

              <div className="form-group">
                <label className="form-label">At your best run, what were you earning per month, and how?</label>
                <textarea className="form-textarea" required placeholder="e.g. $8k/mo selling SaaS..." style={{ minHeight: '80px' }}></textarea>
              </div>

              <div className="two-col-grid" style={{ gap: '24px', marginBottom: '24px' }}>
                <div className="form-group" style={{ marginBottom: '0' }}>
                  <label className="form-label">How many hours a week can you realistically put on the phone?</label>
                  <input type="text" className="form-input" required placeholder="e.g. 20-30 hours" />
                </div>
                <div className="form-group" style={{ marginBottom: '0' }}>
                  <label className="form-label">Do you understand this role is commission only with no base pay?</label>
                  <select className="form-select" required>
                    <option value="" disabled selected>Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="I have questions">I have questions</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Anything else we should know? (Optional)</label>
                <textarea className="form-textarea" placeholder="Any final thoughts..." style={{ minHeight: '80px' }}></textarea>
              </div>

              <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Submit application <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Section: What a strong application looks like */}
      <section className="section" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}>
        <div className="container section-inner">
          <span className="eyebrow"><Target size={16} /> How to stand out</span>
          <h2 className="section-title">Be specific. Specifics are what real closers have.</h2>
          <p className="section-body">
            The applicants we move fastest on do not write much, they write clearly. When we ask about a deal you closed, name the kind of product, the kind of buyer, and what you actually did to win it. "Closed a $40,000 annual contract with an operations director over three calls by reframing the price as downtime saved" tells us everything. "I am a great closer and a people person" tells us nothing. Concrete beats confident every time.
          </p>
        </div>
      </section>

      {/* Section: What happens next? */}
      <section className="section section-glass">
        <div className="container section-inner">
          <span className="eyebrow"><CalendarDays size={16} /> After you submit</span>
          <h2 className="section-title">A real team reviews, and you get an answer.</h2>
          <p className="section-body">
            We read every application. A team makes the call and grants access within 1 to 4 business days. If your experience fits the client, you will hear from us with next steps and setup. If it is not the right fit, we will tell you that too, because you put in the effort to apply and you deserve an answer either way. If you are approved, we create your dialer account and you could be on the phones within the same week.
          </p>
        </div>
      </section>

      {/* Section: One last reminder */}
      <CTASection 
        headline="Commission only. Cold calling. Experience required."
        body="We say it on every page on purpose. If that is not for you, opt out now. But if you can close, this is one of the cleaner deals out there: leads and a dialer provided, a script that works, paid every Friday, recurring for three months, and no cap on what you earn. If that is the work you want, we want to hear from you."
        buttonText="Submit application"
        buttonHref="#"
      />

      <Footer />
    </main>
  );
}
