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
  Rocket,
  Users,
  Radar
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
import CreativeDualCards from "../components/CreativeDualCards";
import ProjectShowcase from "../components/ProjectShowcase";
import SideBySideFeatures from "../components/SideBySideFeatures";
import ExpandableProcess from "../components/ExpandableProcess";
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
      <section className="section features-section-bg" style={{ padding: '80px 0' }}>
        <div className="container">
          <SideBySideFeatures
            heading={
              <div>
                <AnimatedTitle text1="What" text2="this is" align="left-on-mobile" />
                <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', marginTop: '16px', fontWeight: 600, color: '#334155', lineHeight: 1.4, maxWidth: '500px' }}>
                  A real closing seat with an AI client,<br />not a job board listing.
                </h3>
              </div>
            }
            items={[
              {
                id: 'recruiting',
                title: "Jobvoid is a sales recruiting firm in Houston.",
                description: <>Since 2020 we have done one thing: <span className="text-bold">find closers and put them on the phones</span> for AI companies that need pipeline. We are not a marketplace and we are not posting other people's jobs. When you join, you are <span className="text-highlight">closing for our current client</span>, and we run everything behind you so your only job is the conversation.</>,
                icon: <Users size={32} color="#3b82f6" />
              },
              {
                id: 'client',
                title: "The client sells a one-for-you AI visibility service to businesses.",
                description: <>You will be calling companies that should be buying it and most of the time do not even know they need it yet. That gap is your opening, and it is <span className="text-highlight">why these calls convert</span>.</>,
                icon: <Radar size={32} color="#3b82f6" />
              }
            ]}
          />
        </div>
      </section>

      {/* Section: Why closers take this seriously */}
      <section className="section offer-section-bg" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Animated glowing grid lines */}
        <div className="grid-beam grid-beam-1"></div>
        <div className="grid-beam grid-beam-2"></div>
        <div className="grid-beam grid-beam-3"></div>
        <div className="grid-beam grid-beam-4"></div>
        <div className="grid-beam grid-beam-5"></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="opportunity-content" style={{ maxWidth: '800px', margin: '0 auto 0' }}>
            <AnimatedTitle text1="The" text2="Offer" align="left-on-mobile" />
            <h3 style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', marginTop: '16px', marginBottom: '64px', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Everything a closer wants, and nothing they hate.
            </h3>
          </div>

          <ExpandableProcess items={[
            {
              id: 'paid-friday',
              number: '01.',
              title: "Paid every Friday.",
              description: "Close this week, get paid next Friday for it. No net-30, no waiting on the client, no chasing anyone for your money.",
              icon: <Banknote size={24} color="#10b981" />
            },
            {
              id: 'leads-provided',
              number: '02.',
              title: "Leads and dialer provided.",
              description: "We give you a dialer account and a list of businesses worth calling. You log in and dial. No list building, no buying data, no prospecting grind.",
              icon: <PhoneCall size={24} color="#3b82f6" />
            },
            {
              id: 'script',
              number: '03.',
              title: "A script that already closes.",
              description: "You get the framework, the qualifying questions, and the objection answers built from real calls. You bring the delivery.",
              icon: <FileCheck size={24} color="#f59e0b" />
            },
            {
              id: 'recurring',
              number: '04.',
              title: "Recurring commission for 3 months.",
              description: "Every sale pays you a flat commission up front, plus a small recurring slice each month for three months.",
              icon: <TrendingUp size={24} color="#0ea5e9" />
            },
            {
              id: 'earnings',
              number: '05.',
              title: "Real earnings.",
              description: "An average closer here earns around $5,000 a month. The strong ones earn over $10,000. The ceiling is yours to find.",
              icon: <Target size={24} color="#ec4899" />
            },
            {
              id: 'hours',
              number: '06.',
              title: "Your hours, your pace.",
              description: "Nobody clocks you in. We count closes, not minutes in a seat.",
              icon: <Clock size={24} color="#8b5cf6" />
            }
          ]} />
        </div>
      </section>

      {/* Combined Section: Who you'll call */}
      <StickyProjectShowcase />

      {/* New Section: Dynamic Interactive Cards Section */}
      <section className="section" style={{ padding: '0 0 80px 0', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, padding: 0 }}>
          <CreativeDualCards />
        </div>
      </section>

      {/* Section: How it works, condensed */}
      <WorkingProcess />

      {/* Final call to action */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
