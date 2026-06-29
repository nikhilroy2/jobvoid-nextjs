import { 
  CheckCircle2,
  Clock,
  CalendarDays,
  BriefcaseBusiness
} from "lucide-react";
import CTASection from "../../components/CTASection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeatureSection from "../../components/FeatureSection";

export default function HowItWorks() {
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
            <h1 className="hero-title">How it works, start to finish.</h1>
            <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              No mystery, no runaround. Here is exactly what happens from the minute you apply to the minute you get paid, and what we handle so you can stay on the phone.
            </p>
          </div>
        </section>
      </div>

      {/* Section: The five steps, expanded */}
      <section className="section section-glass">
        <div className="container section-inner">
          <span className="eyebrow"><Clock size={16} /> The process</span>
          <h2 className="section-title">The five steps, expanded</h2>
          
          <div className="steps-list">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">You apply</h3>
                <p className="step-desc">The application takes a few minutes and there is no résumé upload or cover letter. We ask about your B2B sales experience and your closing history, because that is the only thing that tells us whether you will do well here. The closers we approve fastest are the ones who describe specific deals they have personally closed. Be concrete, because vague answers get passed over.</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">A team reviews your application</h3>
                <p className="step-desc">A real team reads your application, not a keyword bot. We make a decision and grant access within 1 to 4 business days. If your experience fits the client, you move forward. If it does not, we tell you straight instead of leaving you guessing.</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">We set up your dialer and walk you through the pitch</h3>
                <p className="step-desc">Once you are approved, we create your account in our dialing system so you are ready to make calls. Then we get you fluent on three things: who the client is, what the AI visibility service actually does, and what a strong call sounds like from open to close. This is onboarding, not a sales course. You already know how to sell, so we are handing you the playbook, not teaching you the game. Most closers are dialing within days.</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">You dial and you close</h3>
                <p className="step-desc">You log into your dialer account and work your list. These are manual dials, you and the phone, calling businesses that fit the client's profile. You open the conversation, show them the visibility gap, handle the objections, and close. The script gives you the structure and the language. The close is on you. Every sale is logged the moment it happens, so what you are owed is never in question.</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">You get paid Friday</h3>
                <p className="step-desc">Whatever you close in a week pays out the following Friday for the week before. Then each of those sales keeps paying a small recurring commission for three months while you stay active. New closes stack on top of the recurring tail, which is how a steady closer's income compounds month over month.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What "active" means */}
      <FeatureSection
        eyebrowText="The one rule that matters"
        eyebrowIcon={<CheckCircle2 size={16} />}
        title="Stay active and the recurring keeps paying."
        imageSrc="/images/pay_engine.png"
        imageAlt="The one rule"
        isReversed={true}
        isGlass={false}
        imageClassName="about-page-image"
        sectionStyle={{ backgroundImage: 'linear-gradient(225deg, rgba(236, 72, 153, 0.15) 0%, rgba(244, 63, 94, 0.08) 100%)', backdropFilter: 'blur(20px)' }}
      >
        <p className="section-body text-left">
          Active means you <span className="text-highlight">close at least one new sale in a calendar month</span>. Just dialing does not count, closing does. Stay active and every recurring commission you have built keeps landing. Go a full calendar month without a new sale and the recurring payments pause until you close again. The moment you close, you are active and they resume. It exists for one reason: the recurring money flows to the closers who are still producing.
        </p>
      </FeatureSection>

      {/* Section: Your first week */}
      <FeatureSection
        eyebrowText="What to expect"
        eyebrowIcon={<CalendarDays size={16} />}
        title="A realistic timeline."
        imageSrc="/images/pay_math.png"
        imageAlt="What to expect"
        isGlass={true}
        imageClassName="about-page-image"
        sectionStyle={{ backgroundImage: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(52, 211, 153, 0.15) 100%)', backdropFilter: 'blur(20px)' }}
      >
        <div className="timeline-list" style={{ marginTop: '24px' }}>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4 className="timeline-time">Day 1 to 4</h4>
              <p className="timeline-desc">Application reviewed and decision made.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4 className="timeline-time">On approval</h4>
              <p className="timeline-desc">Dialer account created, client and product walk-through, script review.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4 className="timeline-time">Within days of approval</h4>
              <p className="timeline-desc">Live on the phones with your list.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4 className="timeline-time">The following Friday</h4>
              <p className="timeline-desc">Your first payout for that week's closes.</p>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* Section: Division of labor */}
      <section className="section" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="eyebrow"><BriefcaseBusiness size={16} /> Who does what</span>
            <h2 className="section-title">We carry everything that is not the call.</h2>
          </div>
          
          <div className="two-col-grid">
            <div className="col-box highlight-box">
              <h3 className="col-title text-highlight" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>We handle:</h3>
              <p className="section-body">The client relationship, the leads, the dialer account, the script and objection answers, the tracking, the payouts, and a support team standing by when you need help.</p>
            </div>
            <div className="col-box">
              <h3 className="col-title text-bold" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>You handle:</h3>
              <p className="section-body">Showing up, dialing your list, running the call, and closing. You bring your own laptop, headset, and internet. We bring the rest.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        headline="Ready to get on the phones?"
        buttonText="Apply to close"
        body={null}
      />
      <Footer />
    </main>
  );
}
