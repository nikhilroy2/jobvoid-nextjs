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
  ShieldAlert,
  XCircle
} from "lucide-react";
import CTASection from "../../components/CTASection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeatureSection from "../../components/FeatureSection";
import Hero from "../../components/Hero";
import UnderlineSVG from "../../components/UnderlineSVG";
import SpeedMarquee from "../../components/SpeedMarquee";
import StickyProjectShowcase, { ProjectItem } from "../../components/StickyProjectShowcase";

const theRoleProjects: ProjectItem[] = [
  {
    id: 0,
    tag: "The work",
    title: "You're on the phone, closing businesses that need to be seen.",
    desc: (
      <>
        <p style={{ marginBottom: '16px' }}>Your day is calls. The leads are loaded, so you are not researching or list building. You dial a business, get to the decision maker, and <strong style={{ color: '#ec4899' }}>open a conversation most of them did not expect but should be glad they had</strong>.</p>
        <p>Here is the pitch you are carrying. Buyers are starting to ask AI assistants like ChatGPT who the best provider is, and the AI names a short list. Businesses on that list win the lead. Businesses that are not on it never knew the buyer existed. Our client's backend team does the work to put a business on that list and keep them there, billed as a monthly subscription. <strong>Your job is to make a business owner feel that gap, then close them on the team that fixes it.</strong></p>
      </>
    ),
    image: "/who_you_ll_call.png"
  },
  {
    id: 1,
    tag: "The rhythm",
    title: "No clock, but the good ones build a routine.",
    desc: (
      <p>There is no shift to punch, so your day is shaped by you. The closers who win here build blocks of focused dialing during business hours when decision makers actually answer, take short resets, and review the calls that did not land so the next one does. You work a live list, log your closes as they happen, and <strong style={{ color: '#ec4899' }}>watch your Friday number climb through the week</strong>. The momentum days feel great. The slow days are still yours to push through, because nobody is going to do it for you. That is the trade for the freedom.</p>
    ),
    image: "/images/pay_engine.png"
  },
  {
    id: 2,
    tag: "The expectations",
    title: "What we count on from every closer.",
    desc: (
      <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <li>Work your list consistently and professionally.</li>
        <li>Represent the client well on every single call.</li>
        <li>Follow the script's framework while still sounding like a human.</li>
        <li>Handle objections instead of folding at the first no.</li>
        <li>Log your closes accurately.</li>
        <li>Stay active, because that is what keeps your recurring alive.</li>
      </ul>
    ),
    image: "/images/about_our_way.png"
  },
  {
    id: 3,
    tag: "The difference",
    title: "The five-figure earners treat this like a business they own.",
    desc: (
      <p>The closers clearing over $10,000 a month are not lucky. They dial during the hours their prospects pick up. They do not take a no personally and they do not quit a call early. They learn the product well enough to go off-script when the moment calls for it, then come back to the framework. And they understand the math: that <strong style={{ color: '#ec4899' }}>closing every month stacks fresh commissions on top of the recurring tail</strong>, and that consistency beats any single big week.</p>
    ),
    image: "/images/pay_math.png"
  },
  {
    id: 4,
    tag: "What we screen on",
    title: "Experience, and the ability to prove it.",
    desc: (
      <p>You need genuine B2B sales and closing experience. We want people who have sold to businesses, ideally over the phone, and can <strong>point to deals they personally brought in</strong>. We do not care about your degree, your old title, or where you worked. We care that you have closed before and can do it again from your first week. You will use your own laptop, headset, and internet, and we will create your dialer account once you are approved.</p>
    ),
    image: "/images/about_who_we_work_with.png"
  },
  {
    id: 5,
    tag: "Our take",
    title: "The phone doesn't lie.",
    desc: (
      <p>We do not run background checks. A real track record of closing tells us far more than a paperwork screen ever could, and we would rather open the door to every qualified closer than filter out good people over things that have nothing to do with the work. <strong style={{ color: '#ec4899' }}>Either you can close or you cannot</strong>, and that is what we are hiring on.</p>
    ),
    image: "/images/about_why_we_exist.png"
  }
];

export default function TheRole() {
  return (
    <main>
      <div className="hero-wrapper">
        <Header />
        <Hero 
          titleNode={
            <h1 className="hero-title">
              <span className="hero-title-text">B2B Closer,</span><br />
              <span style={{ position: 'relative', display: 'inline-block', zIndex: 1, whiteSpace: 'nowrap' }}>
                <span className="hero-title-text" style={{ position: 'relative', zIndex: 2 }}>AI visibility client.</span>
                <UnderlineSVG style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '14px', zIndex: -1 }} />
              </span>
            </h1>
          }
          subtitle="A real role with a real product. Cold calling, commission only, paid weekly, recurring for three months. You need to know how to close before you get here."
          subtitleMaxWidth="850px"
          showActions={false}
          showTrust={false}
          showShapes={false}
          paddingTop="160px"
        />
      </div>

      <SpeedMarquee items={[
        { text: "TYPE", subText: "Commission only, independent contractor", icon: <BriefcaseBusiness size={50} color="#ec4899" /> },
        { text: "PAY", subText: "Flat commission per sale, plus recurring", icon: <Banknote size={50} color="#10b981" /> },
        { text: "EARNINGS", subText: "Around $5,000/mo avg, $10,000+ for strong closers", icon: <TrendingUp size={50} color="#8b5cf6" /> },
        { text: "LEADS", subText: "Provided. Manual dialing through our account", icon: <Target size={50} color="#f59e0b" /> },
        { text: "HOURS", subText: "Your own. We measure closes, not time", icon: <Clock size={50} color="#3b82f6" /> },
        { text: "REQUIREMENT", subText: "Real B2B sales and closing experience", icon: <CheckCircle2 size={50} color="#f43f5e" /> },
        { text: "EQUIPMENT", subText: "Your own laptop, headset, and internet", icon: <Laptop size={50} color="#06b6d4" /> },
      ]} />

      <StickyProjectShowcase 
        label="THE REALITY"
        titleText1="What to"
        titleText2="expect"
        description="A clear look at the day-to-day, what it takes to win here, and how we evaluate the closers we bring on."
        projects={theRoleProjects} 
      />

      {/* Section: Who this is for and who it isn't */}
      <section className="section section-glass">
        <div className="container">
          <div className="two-col-grid">
            <div className="col-box" style={{ 
              background: 'linear-gradient(145deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%)', 
              borderColor: 'rgba(59, 130, 246, 0.2)',
              borderRadius: '24px',
              boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={32} color="rgb(59, 130, 246)" />
                </div>
                <h3 className="col-title" style={{ color: 'rgb(59, 130, 246)', fontSize: '2rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>This is for:</h3>
              </div>
              <p className="section-body" style={{ fontSize: '1.125rem', lineHeight: 1.7, margin: 0, color: '#4b5563' }}>Closers who have carried a B2B quota and hit it, people who like the phone, people who would rather be paid on results than capped by a salary, people who read this and want to start dialing.</p>
            </div>
            
            <div className="col-box" style={{ 
              background: 'linear-gradient(145deg, rgba(239, 68, 68, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%)', 
              borderColor: 'rgba(239, 68, 68, 0.2)',
              borderRadius: '24px',
              boxShadow: '0 10px 30px -10px rgba(239, 68, 68, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <XCircle size={32} color="rgb(239, 68, 68)" />
                </div>
                <h3 className="col-title" style={{ color: 'rgb(239, 68, 68)', fontSize: '2rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>This is not for:</h3>
              </div>
              <p className="section-body" style={{ fontSize: '1.125rem', lineHeight: 1.7, margin: 0, color: '#4b5563' }}>First-time reps who have never closed, people who need a base to feel safe, people who want leads handed to them but do not want to be measured, people who go quiet at the first objection. No insult intended. It is just not this seat.</p>
            </div>
          </div>
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
