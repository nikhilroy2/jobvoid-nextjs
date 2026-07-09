import Link from "next/link";
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
import CTASection from "../components/CTASection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FeatureSection from "../components/FeatureSection";
import PixelButton from "../components/PixelButton";
import UnderlineSVG from "../components/UnderlineSVG";
import SpeedMarquee from "../components/SpeedMarquee";
import AnimatedTitle from "../components/AnimatedTitle";
import ProjectShowcase from "../components/ProjectShowcase";
import StickyProjectShowcase from "../components/StickyProjectShowcase";
import WorkingProcess from "../components/WorkingProcess";

export default function Home() {
  return (
    <main>
      {/* Hero Wrapper (Includes Header + Hero to extend background to top) */}
      <div className="hero-wrapper">
        {/* Top nav */}
        <Header />

        {/* Hero Section */}
        <Hero />
      </div>

      {/* Stat strip */}
      <SpeedMarquee items={[
        { text: "CLOSING SINCE 2020", icon: <BriefcaseBusiness size="1em" color="#3b82f6" /> },
        { text: "$1.5K - $5K DEALS", icon: <Banknote size="1em" color="#10b981" /> },
        { text: "PAID EVERY FRIDAY", icon: <CalendarDays size="1em" color="#f43f5e" /> },
        { text: "3 MONTHS RECURRING", icon: <TrendingUp size="1em" color="#0ea5e9" /> }
      ]} />

      {/* Section: The opportunity */}
      <section className="section section-glass">
        <div className="container">
          <AnimatedTitle text1="What" text2="this is" align="left-on-mobile" />

          <div className="opportunity-content" style={{ maxWidth: '800px', margin: '0 auto', marginTop: '-20px' }}>
            <h3 style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', marginBottom: '32px', fontWeight: 700, letterSpacing: '-0.02em' }}>
              A real closing seat with an AI client, not a job board listing.
            </h3>
            <p className="section-body" style={{ marginBottom: '24px', fontSize: 'clamp(1rem, 4vw, 1.15rem)' }}>
              Jobvoid is a sales recruiting firm in Houston. Since 2020 we have done one thing: <span className="text-bold">find closers and put them on the phones</span> for AI companies that need pipeline. We are not a marketplace and we are not posting other people's jobs. When you join, you are <span className="text-highlight">closing for our current client</span>, and we run everything behind you so your only job is the conversation.
            </p>
            <p className="section-body" style={{ fontSize: 'clamp(1rem, 4vw, 1.15rem)' }}>
              The client sells a <span className="text-bold">one-for-you AI visibility service</span> to businesses. You will be calling companies that should be buying it and most of the time do not even know they need it yet. That gap is your opening, and it is <span className="text-highlight">why these calls convert</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Why closers take this seriously */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background Image Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: '#bcdbed98',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="opportunity-content" style={{ maxWidth: '800px', margin: '0 auto 0' }}>
            <AnimatedTitle text1="The" text2="Offer" align="left-on-mobile" />
            <h3 style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', marginTop: '16px', marginBottom: '64px', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Everything a closer wants, and nothing they hate.
            </h3>
          </div>

          <ProjectShowcase hideTitle items={[
            {
              title: "Paid every Friday.",
              description: "Close this week, get paid next Friday for it. No net-30, no waiting on the client, no chasing anyone for your money.",
              icon: <Banknote size={96} strokeWidth={1.5} color="#10b981" />,
              color: "#10b98144",
              aspect: "landscape"
            },
            {
              title: "Leads and dialer provided.",
              description: "We give you a dialer account and a list of businesses worth calling. You log in and dial. No list building, no buying data, no prospecting grind.",
              icon: <PhoneCall size={96} strokeWidth={1.5} color="#3b82f6" />,
              color: "#3b83f64d",
              aspect: "wide"
            },
            {
              title: "A script that already closes.",
              description: "You get the framework, the qualifying questions, and the objection answers built from real calls. You bring the delivery.",
              icon: <FileCheck size={96} strokeWidth={1.5} color="#f59e0b" />,
              color: "#f59f0b46",
              aspect: "landscape"
            },
            {
              title: "Recurring commission for 3 months.",
              description: "Every sale pays you a flat commission up front, plus a small recurring slice each month for three months.",
              icon: <TrendingUp size={96} strokeWidth={1.5} color="#0ea5e9" />,
              color: "#0ea4e94d",
              aspect: "wide"
            },
            {
              title: "Real earnings.",
              description: "An average closer here earns around $5,000 a month. The strong ones earn over $10,000. The ceiling is yours to find.",
              icon: <Target size={96} strokeWidth={1.5} color="#ec4899" />,
              color: "#ec489a57",
              aspect: "landscape"
            },
            {
              title: "Your hours, your pace.",
              description: "Nobody clocks you in. We count closes, not minutes in a seat.",
              icon: <Clock size={96} strokeWidth={1.5} color="#8b5cf6" />,
              color: "#8a5cf646",
              aspect: "wide"
            }
          ]} />
        </div>
      </section>

      {/* Combined Section: Who you'll call, Read this before you apply, The money */}
      <StickyProjectShowcase />

      {/* Section: How it works, condensed */}
      <WorkingProcess />

      {/* Final call to action */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
