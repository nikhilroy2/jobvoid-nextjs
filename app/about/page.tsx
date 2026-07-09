import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import UnderlineSVG from "../../components/UnderlineSVG";
import StickyProjectShowcase, { ProjectItem } from "../../components/StickyProjectShowcase";
import CTASection from "../../components/CTASection";

const aboutProjects: ProjectItem[] = [
  {
    id: 0,
    tag: "The business",
    title: "A sales recruiting firm built around closers.",
    desc: (
      <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
        Companies hire us to <strong style={{ color: '#fff' }}>find closers and run their phone sales</strong> instead of building and managing a team from scratch. They bring the product and the budget. We bring the people who can sell it, the leads to sell to, the script that works, the dialer, and a <strong style={{ color: '#38bdf8' }}>payout system that pays those people every Friday</strong>. Our focus is AI clients, and our closers are our greatest asset.
      </p>
    ),
    image: "/images/about_what_we_do.png"
  },
  {
    id: 1,
    tag: "The problem we solve",
    title: "Good closers are hard to find and easy to lose. We fix both sides.",
    desc: (
      <>
        <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
          Most companies are bad at hiring closers. They post a vague role, attract people who have never closed, bury the pay, and wonder why their pipeline stays empty. Meanwhile, <strong style={{ color: '#fff' }}>real closers get burned by commission gigs</strong> that are vague, slow to pay, or quietly rigged.
        </p>
        <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
          We sit in the middle and fix both. For the client, we deliver closers who actually close. For the closer, we deliver <strong style={{ color: '#38bdf8' }}>leads, a dialer, a script, weekly pay, recurring commission</strong>, and the truth up front about exactly what the job is.
        </p>
      </>
    ),
    image: "/images/about_why_we_exist.png"
  },
  {
    id: 2,
    tag: "Our standard",
    title: "One kind of person. Closers.",
    desc: (
      <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
        Not order-takers, not first-timers, not people looking for a soft salary with a hard cap. We look for <strong style={{ color: '#fff' }}>aggressive, experienced sales talent</strong> that performs on the phone, and we put that talent on <strong style={{ color: '#38bdf8' }}>real contracts with real pay</strong>. We are picky on purpose, because a team of genuine closers is worth more than a crowd of applicants.
      </p>
    ),
    image: "/images/about_who_we_work_with.png"
  },
  {
    id: 3,
    tag: "The current seat",
    title: "AI visibility, a product the market is just waking up to.",
    desc: (
      <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
        Right now we are building the sales team for an AI client whose backend team gets businesses <strong style={{ color: '#fff' }}>referenced and recommended across AI platforms like ChatGPT</strong>, billed as a monthly subscription. As buyers shift from searching to asking AI assistants who to use, being on that short list is the difference between getting the lead and never knowing it existed. It is a <strong style={{ color: '#38bdf8' }}>strong product in a market moving fast</strong>, which means a lot of businesses worth calling and a lot of commission to earn for closers who move fast too.
      </p>
    ),
    image: "/images/about_ai_client.png"
  },
  {
    id: 4,
    tag: "Our way",
    title: "Plainly. And we mean it.",
    desc: (
      <>
        <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
          We tell you it is commission only before you apply. We tell you it is cold calling before you start. We <strong style={{ color: '#38bdf8' }}>pay every Friday without you chasing it</strong>. We log every close so the math is never a mystery. We back every closer with a dedicated support team on chat and email. And we tell people the truth when they are not a fit, instead of stringing them along.
        </p>
        <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
          We think the honesty is the business model. It is why the right people stay and the wrong people leave on their own. There is no trick here: <strong style={{ color: '#fff' }}>a real product, real leads, a real script, and real money on Friday</strong>. If you can close, we want to talk.
        </p>
      </>
    ),
    image: "/images/about_our_way.png"
  }
];

export default function About() {
  return (
    <main>
      <div className="hero-wrapper">
        <Header />
        <Hero 
          titleNode={
            <h1 className="hero-title">
              <span className="hero-title-text">We find closers. We put them on the phones for AI clients. We pay them every </span>
              <span style={{ position: 'relative', display: 'inline-block', zIndex: 1, whiteSpace: 'nowrap' }}>
                <span className="hero-title-text" style={{ position: 'relative', zIndex: 2 }}>Friday.</span>
                <UnderlineSVG style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '14px', zIndex: -1 }} />
              </span>
            </h1>
          }
          subtitle="Jobvoid has been doing exactly that from Houston since 2020."
          showShapes={false}
          showActions={false}
          showTrust={false}
          paddingTop="160px"
          subtitleMaxWidth="850px"
        />
      </div>

      <StickyProjectShowcase 
        label="ABOUT US"
        titleText1="The"
        titleText2="Truth"
        description="Here is exactly who we are, what we do, and who we work with."
        projects={aboutProjects}
      />

      <CTASection 
        headline="Think you can close? Prove it."
        buttonText="Apply to close"
        body={null}
      />
      
      <Footer />
    </main>
  );
}
