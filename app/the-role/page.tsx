import { 
  BriefcaseBusiness,
  Banknote,
  TrendingUp,
  Target,
  Clock,
  CheckCircle2,
  Laptop,
  PhoneCall,
  Activity,
  ClipboardList,
  Crosshair,
  FileCheck2,
  ShieldAlert
} from "lucide-react";
import CTASection from "../../components/CTASection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TheRole() {
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
            <h1 className="hero-title">B2B Closer, AI visibility client.</h1>
            <p className="hero-subtitle" style={{ maxWidth: '850px', margin: '0 auto' }}>
              A real role with a real product. Cold calling, commission only, paid weekly, recurring for three months. You need to know how to close before you get here.
            </p>
          </div>
        </section>
      </div>

      {/* Quick facts block */}
      <section className="section" style={{ padding: '0 0 60px 0' }}>
        <div className="container">
          <div className="quick-facts-grid" style={{ marginTop: '-60px', position: 'relative', zIndex: 10 }}>
            <div className="fact-card">
              <div className="fact-icon"><BriefcaseBusiness size={24} /></div>
              <div className="fact-content">
                <h4 className="fact-label">Type</h4>
                <p className="fact-value">Commission only, independent contractor</p>
              </div>
            </div>
            <div className="fact-card">
              <div className="fact-icon"><Banknote size={24} /></div>
              <div className="fact-content">
                <h4 className="fact-label">Pay</h4>
                <p className="fact-value">Flat commission per sale, plus a small recurring for 3 months</p>
              </div>
            </div>
            <div className="fact-card">
              <div className="fact-icon"><TrendingUp size={24} /></div>
              <div className="fact-content">
                <h4 className="fact-label">Earnings</h4>
                <p className="fact-value">Around $5,000 a month average, over $10,000 for strong closers</p>
              </div>
            </div>
            <div className="fact-card">
              <div className="fact-icon"><Target size={24} /></div>
              <div className="fact-content">
                <h4 className="fact-label">Leads</h4>
                <p className="fact-value">Provided. Manual dialing through an account we create for you</p>
              </div>
            </div>
            <div className="fact-card">
              <div className="fact-icon"><Clock size={24} /></div>
              <div className="fact-content">
                <h4 className="fact-label">Hours</h4>
                <p className="fact-value">Your own. We measure closes, not time</p>
              </div>
            </div>
            <div className="fact-card">
              <div className="fact-icon"><CheckCircle2 size={24} /></div>
              <div className="fact-content">
                <h4 className="fact-label">Requirement</h4>
                <p className="fact-value">Real B2B sales and closing experience</p>
              </div>
            </div>
            <div className="fact-card" style={{ gridColumn: '1 / -1', maxWidth: '400px', margin: '0 auto', width: '100%' }}>
              <div className="fact-icon"><Laptop size={24} /></div>
              <div className="fact-content">
                <h4 className="fact-label">Equipment</h4>
                <p className="fact-value">Your own laptop, headset, and internet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What you'll actually do */}
      <section className="section section-glass">
        <div className="container section-inner">
          <span className="eyebrow"><PhoneCall size={16} /> The work</span>
          <h2 className="section-title">You're on the phone, closing businesses that need to be seen.</h2>
          <p className="section-body">
            Your day is calls. The leads are loaded, so you are not researching or list building. You dial a business, get to the decision maker, and open a conversation most of them did not expect but should be glad they had.
          </p>
          <p className="section-body">
            Here is the pitch you are carrying. Buyers are starting to ask AI assistants like ChatGPT who the best provider is, and the AI names a short list. Businesses on that list win the lead. Businesses that are not on it never knew the buyer existed. Our client's backend team does the work to put a business on that list and keep them there, billed as a monthly subscription. Your job is to make a business owner feel that gap, then close them on the team that fixes it.
          </p>
        </div>
      </section>

      {/* Section: A day in the life */}
      <section className="section" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}>
        <div className="container section-inner">
          <span className="eyebrow"><Activity size={16} /> The rhythm</span>
          <h2 className="section-title">No clock, but the good ones build a routine.</h2>
          <p className="section-body">
            There is no shift to punch, so your day is shaped by you. The closers who win here build blocks of focused dialing during business hours when decision makers actually answer, take short resets, and review the calls that did not land so the next one does. You work a live list, log your closes as they happen, and watch your Friday number climb through the week. The momentum days feel great. The slow days are still yours to push through, because nobody is going to do it for you. That is the trade for the freedom.
          </p>
        </div>
      </section>

      {/* Section: What you're responsible for */}
      <section className="section section-glass">
        <div className="container section-inner">
          <span className="eyebrow"><ClipboardList size={16} /> The expectations</span>
          <h2 className="section-title">What we count on from every closer.</h2>
          
          <ul className="styled-list">
            <li>
              <div className="list-icon"><CheckCircle2 size={20} /></div>
              <span>Work your list consistently and professionally.</span>
            </li>
            <li>
              <div className="list-icon"><CheckCircle2 size={20} /></div>
              <span>Represent the client well on every single call.</span>
            </li>
            <li>
              <div className="list-icon"><CheckCircle2 size={20} /></div>
              <span>Follow the script's framework while still sounding like a human.</span>
            </li>
            <li>
              <div className="list-icon"><CheckCircle2 size={20} /></div>
              <span>Handle objections instead of folding at the first no.</span>
            </li>
            <li>
              <div className="list-icon"><CheckCircle2 size={20} /></div>
              <span>Log your closes accurately.</span>
            </li>
            <li>
              <div className="list-icon"><CheckCircle2 size={20} /></div>
              <span>Stay active, because that is what keeps your recurring alive.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section: What separates the closers who win? */}
      <section className="section" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}>
        <div className="container section-inner">
          <span className="eyebrow"><Crosshair size={16} /> The difference</span>
          <h2 className="section-title">The five-figure earners treat this like a business they own.</h2>
          <p className="section-body">
            The closers clearing over $10,000 a month are not lucky. They dial during the hours their prospects pick up. They do not take a no personally and they do not quit a call early. They learn the product well enough to go off-script when the moment calls for it, then come back to the framework. And they understand the math: that closing every month stacks fresh commissions on top of the recurring tail, and that consistency beats any single big week.
          </p>
        </div>
      </section>

      {/* Section: Who this is for and who it isn't */}
      <section className="section section-glass">
        <div className="container">
          <div className="two-col-grid">
            <div className="col-box highlight-box">
              <h3 className="col-title text-highlight" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>This is for:</h3>
              <p className="section-body">Closers who have carried a B2B quota and hit it, people who like the phone, people who would rather be paid on results than capped by a salary, people who read this and want to start dialing.</p>
            </div>
            <div className="col-box" style={{ background: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
              <h3 className="col-title" style={{ color: 'rgb(239, 68, 68)', fontSize: '1.5rem', marginBottom: '16px' }}>This is not for:</h3>
              <p className="section-body">First-time reps who have never closed, people who need a base to feel safe, people who want leads handed to them but do not want to be measured, people who go quiet at the first objection. No insult intended. It is just not this seat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Requirements */}
      <section className="section" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}>
        <div className="container section-inner">
          <span className="eyebrow"><FileCheck2 size={16} /> What we screen on</span>
          <h2 className="section-title">Experience, and the ability to prove it.</h2>
          <p className="section-body">
            You need genuine B2B sales and closing experience. We want people who have sold to businesses, ideally over the phone, and can point to deals they personally brought in. We do not care about your degree, your old title, or where you worked. We care that you have closed before and can do it again from your first week. You will use your own laptop, headset, and internet, and we will create your dialer account once you are approved.
          </p>
        </div>
      </section>

      {/* Section: No background check */}
      <section className="section section-glass">
        <div className="container section-inner">
          <span className="eyebrow"><ShieldAlert size={16} /> Our take</span>
          <h2 className="section-title">The phone doesn't lie.</h2>
          <p className="section-body">
            We do not run background checks. A real track record of closing tells us far more than a paperwork screen ever could, and we would rather open the door to every qualified closer than filter out good people over things that have nothing to do with the work. Either you can close or you cannot, and that is what we are hiring on.
          </p>
        </div>
      </section>

      <CTASection 
        headline="If that sounds like you, apply."
        buttonText="Apply to close"
        body={null}
      />
      <Footer />
    </main>
  );
}
