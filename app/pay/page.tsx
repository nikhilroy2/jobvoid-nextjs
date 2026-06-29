import { 
  Building2,
  Banknote,
  Repeat,
  Layers,
  Activity,
  Calculator,
  Flame,
  CheckCircle2
} from "lucide-react";
import CTASection from "../../components/CTASection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Pay() {
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
            <h1 className="hero-title">How the money works. All of it, in plain sight.</h1>
            <p className="hero-subtitle" style={{ maxWidth: '850px', margin: '0 auto' }}>
              Flat commission on every sale, paid every Friday, plus a small recurring slice for three months. Average closers earn around $5,000 a month. Strong closers earn over $10,000. Here is exactly how.
            </p>
          </div>
        </section>
      </div>

      {/* Section: Commission only */}
      <section className="section section-glass">
        <div className="container section-inner">
          <span className="eyebrow"><Building2 size={16} /> The foundation</span>
          <h2 className="section-title">No base, no draw, no hourly. You earn on what you close.</h2>
          <p className="section-body">
            If that makes you nervous, this is not your seat, and that is fine. If it makes you lean in, you already get it. Commission only is what lets us pay you every Friday instead of once a month, pay you recurring instead of once, and let you work whatever hours you want with nobody over your shoulder. A salary buys safety and sells your upside. We chose not to sell your upside.
          </p>
        </div>
      </section>

      {/* Section: Flat commission per sale */}
      <section className="section" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}>
        <div className="container section-inner">
          <span className="eyebrow"><Banknote size={16} /> The core pay</span>
          <h2 className="section-title">A flat commission on every deal you close.</h2>
          <p className="section-body">
            The product sells for somewhere between $1,500 and $5,000 as a monthly subscription, and you earn a flat commission on every sale you close. Close more, earn more, with no cap and no claw back on your good months. Your closes for the week are totaled and paid the following Friday. Simple and fast.
          </p>
        </div>
      </section>

      {/* Section: The recurring tail */}
      <section className="section section-glass">
        <div className="container section-inner">
          <span className="eyebrow"><Repeat size={16} /> The engine</span>
          <h2 className="section-title">Every sale keeps paying for three months.</h2>
          <p className="section-body">
            On top of the flat commission, each sale carries a small recurring percentage that pays out for three consecutive months. So one good close is not a one-time event. It pays you up front, then keeps paying a slice for two more months while you go close the next one. The recurring is what turns steady closing into compounding income.
          </p>
        </div>
      </section>

      {/* Section: How it stacks */}
      <section className="section" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}>
        <div className="container section-inner">
          <span className="eyebrow"><Layers size={16} /> The math, made real</span>
          <h2 className="section-title">A steady closer earns on three months of work at once.</h2>
          <p className="section-body">
            Picture a closer bringing in deals every month:
          </p>
          <ul className="styled-list" style={{ margin: '32px 0' }}>
            <li>
              <div className="list-icon"><CheckCircle2 size={20} /></div>
              <span><strong style={{ color: 'var(--accent-color)' }}>Month one:</strong> flat commissions on month one's closes.</span>
            </li>
            <li>
              <div className="list-icon"><CheckCircle2 size={20} /></div>
              <span><strong style={{ color: 'var(--accent-color)' }}>Month two:</strong> flat commissions on month two's closes, plus the recurring tail from month one.</span>
            </li>
            <li>
              <div className="list-icon"><CheckCircle2 size={20} /></div>
              <span><strong style={{ color: 'var(--accent-color)' }}>Month three:</strong> flat commissions on month three's closes, plus recurring tails from both month one and month two.</span>
            </li>
          </ul>
          <p className="section-body">
            From there, every month is fresh commissions sitting on top of recurring tails from recent sales. That is how the average closer lands around $5,000 a month and the strong ones push past $10,000. Not from one giant week, but from closing consistently and letting the recurring stack behind them.
          </p>
        </div>
      </section>

      {/* Section: What "active" means for your pay */}
      <section className="section section-glass">
        <div className="container section-inner">
          <span className="eyebrow"><Activity size={16} /> The rule that protects the recurring</span>
          <h2 className="section-title">Keep closing, keep collecting.</h2>
          <p className="section-body">
            The recurring keeps paying as long as you stay active, and active means you close at least one new sale that calendar month. Dialing alone does not keep it alive, closing does. From the closer's side: stay active and every recurring tail you have built keeps landing while you close more. From the pause side: a full month with no new sale pauses the recurring until you are back. From the restart side: the moment you close again, you are active and the recurring resumes. It rewards the closers who keep producing, which is exactly who we want carrying the client.
          </p>
        </div>
      </section>

      {/* Section: Payout mechanics */}
      <section className="section" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}>
        <div className="container section-inner">
          <span className="eyebrow"><Calculator size={16} /> The logistics</span>
          <h2 className="section-title">Logged instantly, paid weekly.</h2>
          <p className="section-body">
            Every close is logged in the system the moment it happens, so what you are owed is never a guess. The week's flat commissions total up and pay the following Friday. The recurring tails from prior months’ pay on the same weekly rhythm. Nothing to invoice, nothing to chase.
          </p>
        </div>
      </section>

      {/* Section: No ceiling */}
      <section className="section section-glass">
        <div className="container section-inner">
          <span className="eyebrow"><Flame size={16} /> The philosophy</span>
          <h2 className="section-title">We don't cap you and we don't punish a hot streak.</h2>
          <p className="section-body">
            There is no ceiling on commissions and no claw back on your strong months. The better you close and the longer you stay active, the more you make. Your income is a function of your skill and your effort, not a number someone else decided you were allowed to reach.
          </p>
        </div>
      </section>

      <CTASection 
        headline="Want a piece of that?"
        buttonText="Apply to close"
        body={null}
      />
      <Footer />
    </main>
  );
}
