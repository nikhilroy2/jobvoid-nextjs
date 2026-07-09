"use client";

import { 
  FileEdit,
  Target,
  ArrowRight,
  ShieldAlert,
  CalendarDays,
  User,
  Mail,
  Phone,
  Globe,
  Clock,
  Briefcase,
  DollarSign,
  MessageSquare,
  HelpCircle
} from "lucide-react";
import CTASection from "../../components/CTASection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import UnderlineSVG from "../../components/UnderlineSVG";
import PixelButton from "../../components/PixelButton";

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
        <Hero 
          titleNode={
            <h1 className="hero-title">
              <span className="hero-title-text">Apply to </span>
              <span style={{ position: 'relative', display: 'inline-block', zIndex: 1, whiteSpace: 'nowrap' }}>
                <span className="hero-title-text" style={{ position: 'relative', zIndex: 2 }}>close.</span>
                <UnderlineSVG style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '14px', zIndex: -1 }} />
              </span>
            </h1>
          }
          subtitle="Built to find closers, not collect résumés. No upload, no cover letter. Answer straight, be specific about what you have closed, and a real team will get back to you in 1 to 4 business days."
          showShapes={false}
          showActions={false}
          showTrust={false}
          paddingTop="160px"
          subtitleMaxWidth="850px"
        />
      </div>

      {/* Section: The form */}
      <section className="section section-glass form-section-bg" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="form-container">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span className="eyebrow"><FileEdit size={16} /> A few minutes</span>
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '0' }}>Tell us what you've closed.</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="two-col-grid" style={{ gap: '24px', marginBottom: '24px' }}>
                <div className="form-group" style={{ marginBottom: '0' }}>
                  <div className="input-with-icon">
                    <div className="input-icon" style={{ color: '#3b82f6' }}><User size={20} /></div>
                    <input type="text" className="form-input" required placeholder="Full name (e.g. John Doe)" />
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: '0' }}>
                  <div className="input-with-icon">
                    <div className="input-icon" style={{ color: '#f43f5e' }}><Mail size={20} /></div>
                    <input type="email" className="form-input" required placeholder="Email (john@example.com)" />
                  </div>
                </div>
              </div>
              
              <div className="two-col-grid" style={{ gap: '24px', marginBottom: '24px' }}>
                <div className="form-group" style={{ marginBottom: '0' }}>
                  <div className="input-with-icon">
                    <div className="input-icon" style={{ color: '#10b981' }}><Phone size={20} /></div>
                    <input type="text" className="form-input" required placeholder="Phone & best time (e.g. 555-1234, Afternoons)" />
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: '0' }}>
                  <div className="input-with-icon">
                    <div className="input-icon" style={{ color: '#0ea5e9' }}><Globe size={20} /></div>
                    <input type="text" className="form-input" required placeholder="Country and time zone (e.g. USA, EST)" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-with-icon">
                  <div className="input-icon" style={{ color: '#f59e0b' }}><Clock size={20} /></div>
                  <select className="form-select" required defaultValue="">
                    <option value="" disabled>How many years have you sold professionally?</option>
                    <option value="Less than 1">Less than 1</option>
                    <option value="1 to 2">1 to 2</option>
                    <option value="3 to 5">3 to 5</option>
                    <option value="5 or more">5 or more</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div className="responsive-form-label" style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingLeft: '16px', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  <HelpCircle size={20} style={{ color: '#8b5cf6', flexShrink: 0 }} /> Have you closed B2B deals over the phone?
                </div>
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
                <div className="input-with-icon textarea-wrapper">
                  <div className="input-icon" style={{ color: '#ec4899' }}><Briefcase size={20} /></div>
                  <textarea className="form-textarea" required placeholder="What have you sold, and to whom? (A few sentences...)" style={{ minHeight: '80px' }}></textarea>
                </div>
              </div>

              <div className="form-group">
                <div className="input-with-icon textarea-wrapper">
                  <div className="input-icon" style={{ color: '#8b5cf6' }}><Target size={20} /></div>
                  <textarea className="form-textarea" required placeholder="Tell us about a specific deal you personally closed that you are proud of. What was it, and how did you close it?"></textarea>
                </div>
              </div>

              <div className="form-group">
                <div className="input-with-icon textarea-wrapper">
                  <div className="input-icon" style={{ color: '#22c55e' }}><DollarSign size={20} /></div>
                  <textarea className="form-textarea" required placeholder="At your best run, what were you earning per month, and how? (e.g. $8k/mo selling SaaS...)" style={{ minHeight: '80px' }}></textarea>
                </div>
              </div>

              <div className="two-col-grid" style={{ gap: '24px', marginBottom: '24px' }}>
                <div className="form-group" style={{ marginBottom: '0' }}>
                  <div className="input-with-icon">
                    <div className="input-icon" style={{ color: '#06b6d4' }}><CalendarDays size={20} /></div>
                    <input type="text" className="form-input" required placeholder="Hours a week on the phone? (e.g. 20-30)" />
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: '0' }}>
                  <div className="input-with-icon">
                    <div className="input-icon" style={{ color: '#e11d48' }}><ShieldAlert size={20} /></div>
                    <select className="form-select" required defaultValue="">
                      <option value="" disabled>Understand this is commission only?</option>
                      <option value="Yes">Yes</option>
                      <option value="I have questions">I have questions</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-with-icon textarea-wrapper">
                  <div className="input-icon" style={{ color: '#6366f1' }}><MessageSquare size={20} /></div>
                  <textarea className="form-textarea" placeholder="Anything else we should know? (Optional, any final thoughts...)" style={{ minHeight: '80px' }}></textarea>
                </div>
              </div>

              <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                <PixelButton type="submit">
                  Submit application
                </PixelButton>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="section" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="staggered-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            
            {/* Card 1 */}
            <div className="hover-card" style={{ position: 'relative', overflow: 'hidden', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '6px', padding: '40px', backdropFilter: 'var(--glass-blur)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.8), 0 20px 40px rgba(0,0,0,0.03)', zIndex: 1 }}>
              <div style={{ position: 'absolute', top: '-20px', right: '10px', fontSize: '12rem', fontWeight: 900, color: 'var(--text-primary)', opacity: 0.03, pointerEvents: 'none', lineHeight: 1, zIndex: -1 }}>01</div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'var(--gradient-primary)', color: 'white', boxShadow: '0 10px 25px rgba(139, 92, 246, 0.4)' }}>
                  <Target size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>How to stand out</h3>
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                The applicants we move fastest on <span style={{ color: '#8b5cf6', fontWeight: 700 }}>do not write much, they write clearly</span>. When we ask about a deal you closed, name the kind of product, the kind of buyer, and what you actually did to win it. <br/><br/>
                <span style={{ color: '#0ea5e9', fontWeight: 600 }}>"Closed a $40,000 annual contract with an operations director over three calls by reframing the price as downtime saved"</span> tells us everything. <br/><br/>
                "I am a great closer and a people person" tells us nothing. <span style={{ backgroundImage: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800 }}>Concrete beats confident every time.</span>
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="hover-card" style={{ position: 'relative', overflow: 'hidden', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '6px', padding: '40px', backdropFilter: 'var(--glass-blur)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.8), 0 20px 40px rgba(0,0,0,0.03)', zIndex: 1 }}>
              <div style={{ position: 'absolute', top: '-20px', right: '10px', fontSize: '12rem', fontWeight: 900, color: 'var(--text-primary)', opacity: 0.03, pointerEvents: 'none', lineHeight: 1, zIndex: -1 }}>02</div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'var(--gradient-secondary)', color: 'white', boxShadow: '0 10px 25px rgba(236, 72, 153, 0.4)' }}>
                  <CalendarDays size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>After you submit</h3>
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                We read every application. A team makes the call and grants access <span style={{ color: '#ec4899', fontWeight: 700 }}>within 1 to 4 business days</span>. If your experience fits the client, you will hear from us with next steps and setup.<br/><br/>
                If it is not the right fit, we will tell you that too, because <span style={{ color: '#f59e0b', fontWeight: 600 }}>you put in the effort to apply and you deserve an answer</span> either way. <br/><br/>
                If you are approved, we create your dialer account and you could be <span style={{ color: '#10b981', fontWeight: 700 }}>on the phones within the same week.</span>
              </p>
            </div>

          </div>
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
