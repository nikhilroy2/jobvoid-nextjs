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
import FeatureSection from "../../components/FeatureSection";

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
      <FeatureSection
        eyebrowText="The foundation"
        eyebrowIcon={<Building2 size={16} />}
        title="No base, no draw, no hourly. You earn on what you close."
        imageSrc="/images/pay_foundation.png"
        imageAlt="The foundation"
        isGlass={true}
        imageClassName="about-page-image"
        sectionStyle={{ backgroundImage: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(139, 92, 246, 0.08) 100%)', backdropFilter: 'blur(20px)' }}
      >
        <p className="section-body">
          If that makes you nervous, this is not your seat, and that is fine. If it makes you lean in, you already get it. <span className="text-highlight">Commission only is what lets us pay you every Friday instead of once a month</span>, pay you recurring instead of once, and let you work whatever hours you want with nobody over your shoulder. A salary buys safety and sells your upside. <span className="text-bold">We chose not to sell your upside.</span>
        </p>
      </FeatureSection>

      {/* Section: Flat commission per sale */}
      <FeatureSection
        eyebrowText="The core pay"
        eyebrowIcon={<Banknote size={16} />}
        title="A flat commission on every deal you close."
        imageSrc="/images/pay_core.png"
        imageAlt="The core pay"
        isReversed={true}
        isGlass={false}
        imageClassName="about-page-image"
        sectionStyle={{ backgroundImage: 'linear-gradient(225deg, rgba(167, 139, 250, 0.15) 0%, rgba(52, 211, 153, 0.08) 100%)', backdropFilter: 'blur(20px)' }}
      >
        <p className="section-body">
          The product sells for somewhere between $1,500 and $5,000 as a monthly subscription, and you earn a <span className="text-highlight">flat commission on every sale you close</span>. Close more, earn more, with no cap and no claw back on your good months. Your closes for the week are totaled and paid the following Friday. Simple and fast.
        </p>
      </FeatureSection>

      {/* Section: The recurring tail */}
      <FeatureSection
        eyebrowText="The engine"
        eyebrowIcon={<Repeat size={16} />}
        title="Every sale keeps paying for three months."
        imageSrc="/images/pay_engine.png"
        imageAlt="The engine"
        isGlass={true}
        imageClassName="about-page-image"
        sectionStyle={{ backgroundImage: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(52, 211, 153, 0.15) 100%)', backdropFilter: 'blur(20px)' }}
      >
        <p className="section-body">
          On top of the flat commission, each sale carries a <span className="text-bold">small recurring percentage that pays out for three consecutive months</span>. So one good close is not a one-time event. It pays you up front, then keeps paying a slice for two more months while you go close the next one. The recurring is what turns steady closing into compounding income.
        </p>
      </FeatureSection>

      {/* Section: How it stacks */}
      <FeatureSection
        eyebrowText="The math, made real"
        eyebrowIcon={<Layers size={16} />}
        title="A steady closer earns on three months of work at once."
        imageSrc="/images/pay_math.png"
        imageAlt="The math"
        isReversed={true}
        isGlass={false}
        imageClassName="about-page-image"
        sectionStyle={{ backgroundImage: 'linear-gradient(225deg, rgba(236, 72, 153, 0.15) 0%, rgba(244, 63, 94, 0.08) 100%)', backdropFilter: 'blur(20px)' }}
      >
        <p className="section-body">Picture a closer bringing in deals every month:</p>
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
          From there, every month is fresh commissions sitting on top of recurring tails from recent sales. That is how the <span className="text-highlight">average closer lands around $5,000 a month</span> and the strong ones push past $10,000. Not from one giant week, but from closing consistently and letting the recurring stack behind them.
        </p>
      </FeatureSection>

      {/* Section: What "active" means for your pay */}
      <FeatureSection
        eyebrowText="The rule that protects the recurring"
        eyebrowIcon={<Activity size={16} />}
        title="Keep closing, keep collecting."
        imageSrc="/images/about_our_way.png"
        imageAlt="The rule"
        isGlass={true}
        imageClassName="about-page-image"
        sectionStyle={{ backgroundImage: 'linear-gradient(135deg, rgba(234, 179, 8, 0.12) 0%, rgba(249, 115, 22, 0.1) 100%)', backdropFilter: 'blur(20px)' }}
      >
        <p className="section-body">
          The recurring keeps paying as long as you stay active, and active means you <span className="text-bold">close at least one new sale that calendar month</span>. Dialing alone does not keep it alive, closing does. From the closer's side: stay active and every recurring tail you have built keeps landing while you close more. From the pause side: a full month with no new sale pauses the recurring until you are back. From the restart side: the moment you close again, you are active and the recurring resumes. It rewards the closers who keep producing, which is exactly who we want carrying the client.
        </p>
      </FeatureSection>

      {/* Section: Payout mechanics */}
      <FeatureSection
        eyebrowText="The logistics"
        eyebrowIcon={<Calculator size={16} />}
        title="Logged instantly, paid weekly."
        imageSrc="/the_money.png"
        imageAlt="The logistics"
        isReversed={true}
        isGlass={false}
        imageClassName="about-page-image"
        sectionStyle={{ backgroundImage: 'linear-gradient(225deg, rgba(56, 189, 248, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)', backdropFilter: 'blur(20px)' }}
      >
        <p className="section-body">
          Every close is logged in the system the moment it happens, so what you are owed is never a guess. <span className="text-highlight">The week's flat commissions total up and pay the following Friday</span>. The recurring tails from prior months' pay on the same weekly rhythm. Nothing to invoice, nothing to chase.
        </p>
      </FeatureSection>

      {/* Section: No ceiling */}
      <FeatureSection
        eyebrowText="The philosophy"
        eyebrowIcon={<Flame size={16} />}
        title="We don't cap you and we don't punish a hot streak."
        imageSrc="/images/about_what_we_do.png"
        imageAlt="The philosophy"
        isGlass={true}
        imageClassName="about-page-image"
        sectionStyle={{ backgroundImage: 'linear-gradient(135deg, rgba(167, 139, 250, 0.12) 0%, rgba(236, 72, 153, 0.12) 100%)', backdropFilter: 'blur(20px)' }}
      >
        <p className="section-body">
          There is no ceiling on commissions and no claw back on your strong months. The better you close and the longer you stay active, the more you make. <span className="text-bold">Your income is a function of your skill and your effort</span>, not a number someone else decided you were allowed to reach.
        </p>
      </FeatureSection>

      <CTASection 
        headline="Want a piece of that?"
        buttonText="Apply to close"
        body={null}
      />
      <Footer />
    </main>
  );
}
