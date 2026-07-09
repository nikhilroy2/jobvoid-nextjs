import { 
  CheckCircle2,
  Clock,
  CalendarDays,
  BriefcaseBusiness,
  ClipboardEdit,
  BadgeCheck,
  Settings,
  Headset,
  Banknote,
  FileText,
  CheckCircle,
  PhoneCall,
  BadgeDollarSign
} from "lucide-react";
import CTASection from "../../components/CTASection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeatureSection from "../../components/FeatureSection";
import Hero from "../../components/Hero";
import UnderlineSVG from "../../components/UnderlineSVG";
import WorkingProcess from "../../components/WorkingProcess";
import ServicesShowcase from "../../components/ServicesShowcase";
import AnimatedTitle from "../../components/AnimatedTitle";

const howItWorksProcesses = [
  {
    id: '01',
    title1: 'You',
    title2: 'apply.',
    description: 'The application takes a few minutes and there is no résumé upload or cover letter. We ask about your B2B sales experience and your closing history, because that is the only thing that tells us whether you will do well here. The closers we approve fastest are the ones who describe specific deals they have personally closed. Be concrete, because vague answers get passed over.',
    icon: <ClipboardEdit size={160} strokeWidth={1.2} color="#10b981" />
  },
  {
    id: '02',
    title1: 'A team',
    title2: 'reviews.',
    description: 'A real team reads your application, not a keyword bot. We make a decision and grant access within 1 to 4 business days. If your experience fits the client, you move forward. If it does not, we tell you straight instead of leaving you guessing.',
    icon: <BadgeCheck size={160} strokeWidth={1.2} color="#3b82f6" />
  },
  {
    id: '03',
    title1: 'We set up',
    title2: 'your dialer.',
    description: 'Once you are approved, we create your account in our dialing system so you are ready to make calls. Then we get you fluent on three things: who the client is, what the AI visibility service actually does, and what a strong call sounds like from open to close. This is onboarding, not a sales course. You already know how to sell, so we are handing you the playbook, not teaching you the game. Most closers are dialing within days.',
    icon: <Settings size={160} strokeWidth={1.2} color="#f59e0b" />
  },
  {
    id: '04',
    title1: 'You dial',
    title2: 'and close.',
    description: 'You log into your dialer account and work your list. These are manual dials, you and the phone, calling businesses that fit the client\'s profile. You open the conversation, show them the visibility gap, handle the objections, and close. The script gives you the structure and the language. The close is on you. Every sale is logged the moment it happens, so what you are owed is never in question.',
    icon: <Headset size={160} strokeWidth={1.2} color="#0ea5e9" />
  },
  {
    id: '05',
    title1: 'You get',
    title2: 'paid Friday.',
    description: 'Whatever you close in a week pays out the following Friday for the week before. Then each of those sales keeps paying a small recurring commission for three months while you stay active. New closes stack on top of the recurring tail, which is how a steady closer\'s income compounds month over month.',
    icon: <Banknote size={160} strokeWidth={1.2} color="#ec4899" />
  }
];

const howItWorksShowcaseItems = [
  {
    id: 'rule',
    title: 'THE RULE',
    desc: 'Stay active and the recurring keeps paying.',
    color: '#ec4899',
    icon: <CheckCircle2 size={24} />,
    contentNode: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ width: '100%', height: '280px', borderRadius: 0, overflow: 'hidden', flexShrink: 0 }}>
          <img src="/images/pay_engine.png" alt="The one rule" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div style={{
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: 0,
            padding: '24px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#ec4899' }} />
            <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111', margin: '0 0 12px 0' }}>What "Active" Means</h4>
            <p style={{ color: '#4b5563', lineHeight: 1.6, margin: 0, fontSize: '1rem' }}>
              Active means you <strong style={{ color: '#ec4899' }}>close at least one new sale in a calendar month</strong>. Just dialing does not count, closing does.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: 0,
            padding: '24px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#111111' }} />
            <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111', margin: '0 0 12px 0' }}>The Recurring Engine</h4>
            <p style={{ color: '#4b5563', lineHeight: 1.6, margin: 0, fontSize: '1rem' }}>
              Stay active and every recurring commission you have built keeps landing. Go a full calendar month without a new sale and the payments pause until you close again. The money flows to the closers who are still producing.
            </p>
          </div>

        </div>
      </div>
    )
  },
  {
    id: 'timeline',
    title: 'TIMELINE',
    desc: 'A realistic timeline for your first week.',
    color: '#3b82f6',
    icon: <CalendarDays size={24} />,
    contentNode: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h4 style={{ fontSize: '1.4rem', marginBottom: '8px', color: '#111', marginTop: 0, fontWeight: 800 }}>A realistic timeline.</h4>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '24px' }}>Here is exactly what happens from the moment you apply.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { time: "Day 1 to 4", desc: "Application reviewed and decision made.", icon: <FileText size={22} />, color: "#ec4899" },
              { time: "On approval", desc: "Dialer account created, script & product walk-through.", icon: <CheckCircle size={22} />, color: "#8b5cf6" },
              { time: "Within days", desc: "Live on the phones with your list.", icon: <PhoneCall size={22} />, color: "#3b82f6" },
              { time: "Following Friday", desc: "Your first payout for that week's closes.", icon: <BadgeDollarSign size={22} />, color: "#10b981" },
            ].map((item, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px', 
                background: '#f9fafb', 
                border: '1px solid #f3f4f6', 
                padding: '16px', 
                borderRadius: 0,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', backgroundColor: item.color }} />
                <div style={{ 
                  width: '48px', height: '48px', borderRadius: 0, 
                  background: `${item.color}15`, color: item.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111', margin: '0 0 4px 0' }}>{item.time}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'labor',
    title: 'YOUR ROLE',
    desc: 'We carry everything that is not the call.',
    color: '#8b5cf6',
    icon: <BriefcaseBusiness size={24} />,
    contentNode: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
        
        {/* We Handle Card */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: 0,
          padding: '32px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#9ca3af' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: 0, background: '#f3f4f6', color: '#4b5563', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BriefcaseBusiness size={22} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111', margin: 0 }}>We handle:</h3>
          </div>
          <p style={{ fontSize: '1.05rem', color: '#4b5563', margin: 0, lineHeight: 1.6 }}>
            The client relationship, the leads, the dialer account, the script and objection answers, the tracking, the payouts, and a support team standing by when you need help.
          </p>
        </div>

        {/* You Handle Card */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: 0,
          padding: '32px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: '#111111' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: 0, background: '#f3f4f6', color: '#111111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Headset size={22} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111', margin: 0 }}>You handle:</h3>
          </div>
          <p style={{ fontSize: '1.05rem', color: '#4b5563', margin: 0, lineHeight: 1.6 }}>
            Showing up, dialing your list, running the call, and closing. You bring your own laptop, headset, and internet. We bring the rest.
          </p>
        </div>

      </div>
    )
  }
];

export default function HowItWorks() {
  return (
    <main>
      <div className="hero-wrapper">
        <Header />
        <Hero 
          titleNode={
            <h1 className="hero-title">
              <span className="hero-title-text">How it works,</span><br />
              <span style={{ position: 'relative', display: 'inline-block', zIndex: 1, whiteSpace: 'nowrap' }}>
                <span className="hero-title-text" style={{ position: 'relative', zIndex: 2 }}>start to finish.</span>
                <UnderlineSVG style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '14px', zIndex: -1 }} />
              </span>
            </h1>
          }
          subtitle="No mystery, no runaround. Here is exactly what happens from the minute you apply to the minute you get paid, and what we handle so you can stay on the phone."
          subtitleMaxWidth="800px"
          showActions={false}
          showTrust={false}
          showShapes={false}
          paddingTop="140px"
        />
      </div>

      {/* Section: The five steps, expanded */}
      <WorkingProcess 
        titleText1="The" 
        titleText2="expanded process"
        processes={howItWorksProcesses} 
      />

      {/* Services Showcase (Combined 3 sections) */}
      <ServicesShowcase 
        titleNode={<AnimatedTitle text1="Important" text2="Details" align="center" />}
        items={howItWorksShowcaseItems}
      />

      <CTASection 
        headline="Ready to get on the phones?"
        buttonText="Apply to close"
        body={null}
      />
      <Footer />
    </main>
  );
}
