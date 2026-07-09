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
import Hero from "../../components/Hero";
import UnderlineSVG from "../../components/UnderlineSVG";
import StickyProjectShowcase, { ProjectItem } from "../../components/StickyProjectShowcase";

const payProjects: ProjectItem[] = [
  {
    id: 0,
    tag: 'The foundation',
    title: 'No base, no draw, no hourly. You earn on what you close.',
    desc: (
      <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
        If that makes you nervous, this is not your seat, and that is fine. If it makes you lean in, you already get it. <strong style={{ color: '#ec4899' }}>Commission only is what lets us pay you every Friday instead of once a month</strong>, pay you recurring instead of once, and let you work whatever hours you want with nobody over your shoulder. A salary buys safety and sells your upside. <strong>We chose not to sell your upside.</strong>
      </p>
    ),
    image: '/images/pay_foundation.png'
  },
  {
    id: 1,
    tag: 'The core pay',
    title: 'A flat commission on every deal you close.',
    desc: (
      <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
        The product sells for somewhere between $1,500 and $5,000 as a monthly subscription, and you earn a <strong style={{ color: '#ec4899' }}>flat commission on every sale you close</strong>. Close more, earn more, with no cap and no claw back on your good months. Your closes for the week are totaled and paid the following Friday. Simple and fast.
      </p>
    ),
    image: '/images/pay_core.png'
  },
  {
    id: 2,
    tag: 'The engine',
    title: 'Every sale keeps paying for three months.',
    desc: (
      <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
        On top of the flat commission, each sale carries a <strong>small recurring percentage that pays out for three consecutive months</strong>. So one good close is not a one-time event. It pays you up front, then keeps paying a slice for two more months while you go close the next one. The recurring is what turns steady closing into compounding income.
      </p>
    ),
    image: '/images/pay_engine.png'
  },
  {
    id: 3,
    tag: 'The math, made real',
    title: 'A steady closer earns on three months of work at once.',
    desc: (
      <>
        <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>Picture a closer bringing in deals every month:</p>
        <ul style={{ margin: '0 0 16px 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li style={{ display: 'flex', gap: '12px' }}>
            <CheckCircle2 size={20} color="#3b82f6" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{ lineHeight: 1.6 }}><strong>Month one:</strong> flat commissions on month one's closes.</span>
          </li>
          <li style={{ display: 'flex', gap: '12px' }}>
            <CheckCircle2 size={20} color="#3b82f6" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{ lineHeight: 1.6 }}><strong>Month two:</strong> flat commissions on month two's closes, plus the recurring tail from month one.</span>
          </li>
          <li style={{ display: 'flex', gap: '12px' }}>
            <CheckCircle2 size={20} color="#3b82f6" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{ lineHeight: 1.6 }}><strong>Month three:</strong> flat commissions on month three's closes, plus recurring tails from both month one and month two.</span>
          </li>
        </ul>
        <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
          From there, every month is fresh commissions sitting on top of recurring tails from recent sales. That is how the <strong style={{ color: '#ec4899' }}>average closer lands around $5,000 a month</strong> and the strong ones push past $10,000. Not from one giant week, but from closing consistently and letting the recurring stack behind them.
        </p>
      </>
    ),
    image: '/images/pay_math.png'
  },
  {
    id: 4,
    tag: 'The rule that protects',
    title: 'Keep closing, keep collecting.',
    desc: (
      <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
        The recurring keeps paying as long as you stay active, and active means you <strong>close at least one new sale that calendar month</strong>. Dialing alone does not keep it alive, closing does. From the closer's side: stay active and every recurring tail you have built keeps landing while you close more. From the pause side: a full month with no new sale pauses the recurring until you are back. From the restart side: the moment you close again, you are active and the recurring resumes. It rewards the closers who keep producing, which is exactly who we want carrying the client.
      </p>
    ),
    image: '/images/about_our_way.png'
  },
  {
    id: 5,
    tag: 'The logistics',
    title: 'Logged instantly, paid weekly.',
    desc: (
      <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
        Every close is logged in the system the moment it happens, so what you are owed is never a guess. <strong style={{ color: '#ec4899' }}>The week's flat commissions total up and pay the following Friday</strong>. The recurring tails from prior months' pay on the same weekly rhythm. Nothing to invoice, nothing to chase.
      </p>
    ),
    image: '/the_money.png'
  },
  {
    id: 6,
    tag: 'The philosophy',
    title: "We don't cap you and we don't punish a hot streak.",
    desc: (
      <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
        There is no ceiling on commissions and no claw back on your strong months. The better you close and the longer you stay active, the more you make. <strong>Your income is a function of your skill and your effort</strong>, not a number someone else decided you were allowed to reach.
      </p>
    ),
    image: '/images/about_what_we_do.png'
  }
];

export default function Pay() {
  return (
    <main>
      <div className="hero-wrapper">
        <Header />
        <Hero
          titleNode={
            <h1 className="hero-title">
              <span className="hero-title-text">How the money works. All of it, </span>
              <span style={{ position: 'relative', display: 'inline-block', zIndex: 1, whiteSpace: 'nowrap' }}>
                <span className="hero-title-text" style={{ position: 'relative', zIndex: 2 }}>in plain sight.</span>
                <UnderlineSVG style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '14px', zIndex: -1 }} />
              </span>
            </h1>
          }
          subtitle="Flat commission on every sale, paid every Friday, plus a small recurring slice for three months. Average closers earn around $5,000 a month. Strong closers earn over $10,000. Here is exactly how."
          showShapes={false}
          showActions={false}
          showTrust={false}
          paddingTop="160px"
        />
      </div>



      <StickyProjectShowcase 
        label="THE MONEY"
        titleText1="The"
        titleText2="Model"
        description="Here is exactly how you get paid, without any fine print."
        projects={payProjects}
      />

      <CTASection
        headline="Want a piece of that?"
        buttonText="Apply to close"
        body={null}
      />
      <Footer />
    </main>
  );
}
