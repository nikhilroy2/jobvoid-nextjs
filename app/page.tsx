import { 
  ArrowRight, 
  Banknote, 
  CalendarDays, 
  BriefcaseBusiness, 
  TrendingUp,
  PhoneCall,
  Target,
  FileCheck,
  CheckCircle2,
  Clock,
  Rocket
} from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Wrapper (Includes Header + Hero to extend background to top) */}
      <div className="hero-wrapper">
        {/* Top nav */}
        <div className="container">
          <nav className="nav-container">
            <div className="nav-brand">Jobvoid</div>
            <div className="nav-links">
              <a href="#">How It Works</a>
              <a href="#">The Role</a>
              <a href="#">Pay</a>
              <a href="#">FAQ</a>
              <a href="#">About</a>
            </div>
            <button className="btn btn-primary">
              Apply to close <ArrowRight size={18} />
            </button>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-shapes">
            <div className="shape shape-circle-1"></div>
            <div className="shape shape-circle-2"></div>
            <div className="shape shape-circle-3"></div>
            <div className="shape-pill shape-pill-1"></div>
            <div className="shape-pill shape-pill-2"></div>
            <div className="shape-dots shape-dots-1"></div>
            <div className="shape-dots shape-dots-2"></div>
            <svg className="shape-wave shape-wave-1" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 50 Q 50 0, 100 50 T 200 50" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <svg className="shape-wave shape-wave-2" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 50 Q 50 100, 100 50 T 200 50" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="container">
            <h1 className="hero-title">Close B2B deals. Get paid every Friday. Work on your terms.</h1>
            <p className="hero-subtitle">
              Jobvoid places aggressive closers with AI companies that already have the product, the budget, and the demand. We hand you the leads, the script, and a dialer account. You bring the close.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.125rem' }}>
                Start Closing <ArrowRight size={20} />
              </button>
              <button className="btn btn-secondary" style={{ padding: '16px 36px', fontSize: '1.125rem' }}>
                See how the pay works
              </button>
            </div>
            <div className="hero-trust" style={{ marginTop: '24px' }}>
              <CheckCircle2 size={16} className="text-accent" color="var(--accent-color)" /> 
              Closing for AI clients since 2020. Based in Houston, Texas.
            </div>
          </div>
        </section>
      </div>

      {/* Stat strip */}
      <div className="container">
        <div className="stat-strip">
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <BriefcaseBusiness size={24} />
            </div>
            <div className="stat-value">2020</div>
            <div className="stat-label">Closing for AI clients since</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <Banknote size={24} />
            </div>
            <div className="stat-value">$1,500 to $5,000</div>
            <div className="stat-label">The deals you'll be closing</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <CalendarDays size={24} />
            </div>
            <div className="stat-value">Every Friday</div>
            <div className="stat-label">Paid for the week before</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <TrendingUp size={24} />
            </div>
            <div className="stat-value">3 months</div>
            <div className="stat-label">Recurring commission on every sale</div>
          </div>
        </div>
      </div>

      {/* Section: The opportunity */}
      <section className="section section-glass">
        <div className="container">
          <div className="section-grid">
            <div className="section-content">
              <span className="eyebrow"><Target size={16} /> What this is</span>
              <h2 className="section-title">A real closing seat with an AI client, not a job board listing.</h2>
              <p className="section-body">
                Jobvoid is a sales recruiting firm in Houston. Since 2020 we have done one thing: find closers and put them on the phones for AI companies that need pipeline. We are not a marketplace and we are not posting other people's jobs. When you join, you are closing for our current client, and we run everything behind you so your only job is the conversation.
              </p>
              <p className="section-body">
                The client sells a one-for-you AI visibility service to businesses. You will be calling companies that should be buying it and most of the time do not even know they need it yet. That gap is your opening, and it is why these calls convert.
              </p>
            </div>
            <div className="section-image-wrapper">
              <img src="/what_this_is.png" alt="What this is" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why closers take this seriously */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background Image Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/the_offer.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          zIndex: 0
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }}>
            <span className="eyebrow"><BriefcaseBusiness size={16} /> The offer</span>
            <h2 className="section-title">Everything a closer wants, and nothing they hate.</h2>
          </div>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon"><Banknote size={24} /></div>
              <h3 className="card-title">Paid every Friday.</h3>
              <p className="card-body">Close this week, get paid next Friday for it. No net-30, no waiting on the client, no chasing anyone for your money.</p>
            </div>
            <div className="card">
              <div className="card-icon"><PhoneCall size={24} /></div>
              <h3 className="card-title">Leads and dialer provided.</h3>
              <p className="card-body">We give you a dialer account and a list of businesses worth calling. You log in and dial. No list building, no buying data, no prospecting grind.</p>
            </div>
            <div className="card">
              <div className="card-icon"><FileCheck size={24} /></div>
              <h3 className="card-title">A script that already closes.</h3>
              <p className="card-body">You get the framework, the qualifying questions, and the objection answers built from real calls. You bring the delivery.</p>
            </div>
            <div className="card">
              <div className="card-icon"><TrendingUp size={24} /></div>
              <h3 className="card-title">Recurring commission for 3 months.</h3>
              <p className="card-body">Every sale pays you a flat commission up front, plus a small recurring slice each month for three months.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Target size={24} /></div>
              <h3 className="card-title">Real earnings.</h3>
              <p className="card-body">An average closer here earns around $5,000 a month. The strong ones earn over $10,000. The ceiling is yours to find.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Clock size={24} /></div>
              <h3 className="card-title">Your hours, your pace.</h3>
              <p className="card-body">Nobody clocks you in. We count closes, not minutes in a seat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The product you'll sell */}
      <section className="section section-glass">
        <div className="container">
          <div className="section-grid">
            <div className="section-content">
              <span className="eyebrow"><Rocket size={16} /> What you're selling</span>
              <h2 className="section-title">AI visibility, the thing every business will want and most don't understand yet.</h2>
              <p className="section-body">
                Buyers have started asking AI assistants like ChatGPT who the best provider is instead of scrolling a search page. The AI names a short list. If a business is on that list, the lead is theirs. If they are not, they never even knew the buyer was looking.
              </p>
              <p className="section-body">
                Our client fixes that. A dedicated backend team does the work to get a business referenced and recommended across AI platforms. Think of it like SEO, but pointed at AI answers instead of search rankings, and handled entirely for the customer. The business pays a monthly subscription and the team does the work. Visibility is earned through what the team actually does, not promised out of thin air.
              </p>
              <p className="section-body">
                You are not selling a gadget nobody asked for. You are calling a business owner, showing them they are invisible in the exact place their next customer is deciding, and closing them on the team that makes them visible.
              </p>
            </div>
            <div className="section-image-wrapper">
              <img src="/what_you_re_selling.png" alt="What you're selling" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Who buys it? */}
      <section className="section" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}>
        <div className="container">
          <div className="section-grid" style={{ direction: 'rtl' }}>
            <div className="section-content" style={{ direction: 'ltr' }}>
              <span className="eyebrow"><Target size={16} /> Who you'll call</span>
              <h2 className="section-title">High-ticket businesses that live and die on being chosen.</h2>
              <p className="section-body">
                The best customers are service businesses where a single new client is worth thousands, so visibility pays for itself fast. Think cosmetic surgeons, med spas, dentists, aesthetic and elective medical practices, law firms, and other high-margin local providers. When one new patient or client is worth several thousand dollars, getting named by an AI assistant instead of a competitor is an easy yes once they understand the stakes. Your job is to make them understand the stakes.
              </p>
            </div>
            <div className="section-image-wrapper" style={{ direction: 'ltr' }}>
              <img src="/who_you_ll_call.png" alt="Who you'll call" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: The honest part */}
      <section className="section section-glass">
        <div className="container">
          <div className="section-grid">
            <div className="section-content">
              <span className="eyebrow"><CheckCircle2 size={16} /> Read this before you apply</span>
              <h2 className="section-title">Commission only. Cold calling. Experience required.</h2>
              <p className="section-body">
                There is no base, no draw, and no hourly. You earn on what you close. These are cold calls, not warm inbound leads, though the list is targeted at businesses that genuinely fit. And you need real B2B closing experience, because this is not where you learn to sell.
              </p>
              <p className="section-body">
                We put this on the home page on purpose. The people who can handle it should keep reading. The people who cannot should save themselves the time. We would rather be blunt now than waste your week later.
              </p>
            </div>
            <div className="section-image-wrapper">
              <img src="/read_this_before.png" alt="Read this before you apply" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Quick earnings picture */}
      <section className="section" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}>
        <div className="container">
          <div className="section-grid" style={{ direction: 'rtl' }}>
            <div className="section-content" style={{ direction: 'ltr' }}>
              <span className="eyebrow"><Banknote size={16} /> The money</span>
              <h2 className="section-title">Flat commission on every close, plus a recurring tail for three months.</h2>
              <p className="section-body">
                Every sale pays you a flat commission, paid that Friday. On top of that, each sale carries a small recurring percentage that keeps paying for three months, as long as you stay active. Active means you close at least one new sale that month. Keep closing and you stack fresh commissions on top of the recurring tail from your recent sales. The closers who treat this like their own business are the ones clearing five figures.
              </p>
              <div style={{ marginTop: '32px' }}>
                <button className="btn btn-secondary">
                  See the full pay breakdown <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="section-image-wrapper" style={{ direction: 'ltr' }}>
              <img src="/the_money.png" alt="The money" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: How it works, condensed */}
      <section className="section section-glass">
        <div className="container section-inner">
          <span className="eyebrow"><Clock size={16} /> The process</span>
          <h2 className="section-title">From application to your first Friday check.</h2>
          
          <div className="steps-list">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Apply.</h3>
                <p className="step-desc">A few minutes. We screen on closing experience, nothing else.</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Get approved.</h3>
                <p className="step-desc">A team reviews your application and grants access within 1 to 4 business days.</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Get set up.</h3>
                <p className="step-desc">We create your dialer account and walk you through the client, the product, and the script.</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Start closing.</h3>
                <p className="step-desc">You dial your list, work the script, and log every close.</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">Get paid Friday.</h3>
                <p className="step-desc">Your closes pay out the following Friday, then recur for three months while you stay active.</p>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <button className="btn btn-secondary">
              See the full process <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <div className="container">
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">If you can close, we want to talk.</h2>
            <p className="cta-body">
              We read every application and we move fast on the ones that fit. A strong closer can be approved and dialing inside the same week.
            </p>
            <button className="btn btn-primary" style={{ backgroundColor: '#fff', color: 'var(--accent-hover)' }}>
              Apply to close <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer container">
        <div className="footer-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BriefcaseBusiness size={18} color="var(--accent-color)" /> 
            Jobvoid &middot; Houston, Texas &middot; Closing for AI clients since 2020
          </div>
          <div className="footer-links">
            <a href="#">How It Works</a>
            <a href="#">The Role</a>
            <a href="#">Pay</a>
            <a href="#">FAQ</a>
            <a href="#">About</a>
            <a href="#">Apply</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
