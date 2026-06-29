import { 
  Building,
  Target,
  Users,
  BrainCircuit,
  ShieldCheck
} from "lucide-react";
import CTASection from "../../components/CTASection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function About() {
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
            <h1 className="hero-title">We find closers. We put them on the phones for AI clients. We pay them every Friday.</h1>
            <p className="hero-subtitle" style={{ maxWidth: '850px', margin: '0 auto' }}>
              Jobvoid has been doing exactly that from Houston since 2020.
            </p>
          </div>
        </section>
      </div>

      {/* Section: What we do */}
      <section className="section section-glass" style={{ position: 'relative', zIndex: 10, marginTop: '-40px', paddingTop: '60px' }}>
        <div className="container section-inner">
          <div className="section-grid">
            <div className="section-content">
              <span className="eyebrow"><Building size={16} /> The business</span>
              <h2 className="section-title">A sales recruiting firm built around closers.</h2>
              <p className="section-body">
                Companies hire us to find closers and run their phone sales instead of building and managing a team from scratch. They bring the product and the budget. We bring the people who can sell it, the leads to sell to, the script that works, the dialer, and a payout system that pays those people every Friday. Our focus is AI clients, and our closers are our greatest asset.
              </p>
            </div>
            <div className="section-image-wrapper">
              <img src="/images/about_what_we_do.png" alt="Sales Floor" className="section-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why we exist */}
      <section className="section" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}>
        <div className="container section-inner">
          <div className="section-grid">
            <div className="section-image-wrapper" style={{ order: -1 }}>
              <img src="/images/about_why_we_exist.png" alt="Corporate Problem Solving" className="section-image" />
            </div>
            <div className="section-content">
              <span className="eyebrow"><Target size={16} /> The problem we solve</span>
              <h2 className="section-title">Good closers are hard to find and easy to lose. We fix both sides.</h2>
              <p className="section-body">
                Most companies are bad at hiring closers. They post a vague role, attract people who have never closed, bury the pay, and wonder why their pipeline stays empty. Meanwhile, real closers get burned by commission gigs that are vague, slow to pay, or quietly rigged.
              </p>
              <p className="section-body">
                We sit in the middle and fix both. For the client, we deliver closers who actually close. For the closer, we deliver leads, a dialer, a script, weekly pay, recurring commission, and the truth up front about exactly what the job is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Who we work with */}
      <section className="section section-glass">
        <div className="container section-inner">
          <div className="section-grid">
            <div className="section-content">
              <span className="eyebrow"><Users size={16} /> Our standard</span>
              <h2 className="section-title">One kind of person. Closers.</h2>
              <p className="section-body">
                Not order-takers, not first-timers, not people looking for a soft salary with a hard cap. We look for aggressive, experienced sales talent that performs on the phone, and we put that talent on real contracts with real pay. We are picky on purpose, because a team of genuine closers is worth more than a crowd of applicants.
              </p>
            </div>
            <div className="section-image-wrapper">
              <img src="/images/about_who_we_work_with.png" alt="Focused Closer" className="section-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: The client we're staffing now */}
      <section className="section" style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}>
        <div className="container section-inner">
          <div className="section-grid">
            <div className="section-image-wrapper" style={{ order: -1 }}>
              <img src="/images/about_ai_client.png" alt="AI Neural Network" className="section-image" />
            </div>
            <div className="section-content">
              <span className="eyebrow"><BrainCircuit size={16} /> The current seat</span>
              <h2 className="section-title">AI visibility, a product the market is just waking up to.</h2>
              <p className="section-body">
                Right now we are building the sales team for an AI client whose backend team gets businesses referenced and recommended across AI platforms like ChatGPT, billed as a monthly subscription. As buyers shift from searching to asking AI assistants who to use, being on that short list is the difference between getting the lead and never knowing it existed. It is a strong product in a market moving fast, which means a lot of businesses worth calling and a lot of commission to earn for closers who move fast too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: How we run things */}
      <section className="section section-glass">
        <div className="container section-inner">
          <div className="section-grid">
            <div className="section-content">
              <span className="eyebrow"><ShieldCheck size={16} /> Our way</span>
              <h2 className="section-title">Plainly. And we mean it.</h2>
              <p className="section-body">
                We tell you it is commission only before you apply. We tell you it is cold calling before you start. We pay every Friday without you chasing it. We log every close so the math is never a mystery. We back every closer with a dedicated support team on chat and email. And we tell people the truth when they are not a fit, instead of stringing them along.
              </p>
              <p className="section-body">
                We think the honesty is the business model. It is why the right people stay and the wrong people leave on their own. There is no trick here: a real product, real leads, a real script, and real money on Friday. If you can close, we want to talk.
              </p>
            </div>
            <div className="section-image-wrapper">
              <img src="/images/about_our_way.png" alt="Financial Dashboard" className="section-image" />
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        headline="Think you can close? Prove it."
        buttonText="Apply to close"
        body={null}
      />
      
      <Footer />
    </main>
  );
}
