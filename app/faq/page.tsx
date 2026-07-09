"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import CTASection from "../../components/CTASection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import UnderlineSVG from "../../components/UnderlineSVG";

const faqs = [
  {
    question: "Is this a scam?",
    answer: "No, and we get why you check. Commission-only listings have a bad name because half of them hide everything that matters. We do the opposite. You close for a real AI client, every close is logged, and you are paid every Friday for the prior week. The entire pay structure is on the Pay page. Hiding things is how you lose good closers, so we do not."
  },
  {
    question: "Who is Jobvoid?",
    answer: "A sales recruiting firm in Houston, Texas, closing for AI clients since 2020. Companies hire us to find closers and run their phone sales instead of building a team from scratch. Our closers are our greatest asset, and we look for aggressive, experienced ones who can carry a B2B close."
  },
  {
    question: "Why is it commission only?",
    answer: "Because that structure is what lets us pay you weekly, pay you recurring for three months, and let you set your own hours. A base salary comes with a manager, a schedule, and a cap. We traded all of that for freedom and upside. If you close, you do better here than on a salary."
  },
  {
    question: "How much can I actually make?",
    answer: "An average closer earns around $5,000 a month. Strong closers earn over $10,000. The product sells between $1,500 and $5,000, you earn a flat commission on every sale plus a small recurring slice for three months, and there is no cap. Your number comes down to how well and how often you close."
  },
  {
    question: "When do I get paid?",
    answer: "Every Friday, for the week before. Close this week, get paid next Friday. The recurring tails from earlier sales pay on the same weekly rhythm."
  },
  {
    question: "What does \"active\" mean and why does it matter?",
    answer: "Active means you close at least one new sale in a calendar month. Stay active and your three-month recurring keeps paying. Miss a full month with no new sale and the recurring pauses until you close again. Dialing alone does not count. Closing does. It keeps the recurring flowing to the people still producing."
  },
  {
    question: "What exactly am I selling?",
    answer: "A done-for-you AI visibility service. A dedicated backend team does the work to get a business referenced and recommended across AI platforms like ChatGPT, similar to SEO but pointed at AI answers, and billed as a monthly subscription. The business pays monthly and the team does the work. You are closing the business on the service."
  },
  {
    question: "Who am I calling?",
    answer: "High-ticket service businesses where one new client is worth thousands, so visibility pays for itself fast. Think cosmetic surgeons, med spas, dentists, aesthetic and elective medical practices, law firms, and similar high-margin providers. The leads are loaded for you. These are cold calls, but targeted at businesses that genuinely fit."
  },
  {
    question: "Are these warm leads or cold calls?",
    answer: "Cold, but targeted. The list is built around businesses that fit the client, not random numbers. You are opening conversations worth having, not chasing people who will never buy."
  },
  {
    question: "Do I need experience?",
    answer: "Yes. This is not where you learn to sell. You need real B2B sales and closing experience, ideally over the phone. If you can describe deals you have personally closed, you are the kind of applicant we want."
  },
  {
    question: "Is there training?",
    answer: "There is onboarding, not training. We get you fluent on the client, the product, and the script so your calls land, and that takes days, not weeks. We hired you on the assumption you already know how to sell."
  },
  {
    question: "What does the script cover?",
    answer: "The opening, the qualifying questions, a clear explanation of the AI visibility service and why a business needs it, and mapped-out answers to the objections you will hear most. It is built from real calls. You bring the delivery, and the best closers make it sound like their own words."
  },
  {
    question: "What equipment do I need?",
    answer: "Your own laptop, a headset, and reliable internet, plus a quiet place to talk. We create your dialer account and load your leads. You provide the setup to make calls and the skill to close them."
  },
  {
    question: "How do the calls work?",
    answer: "Manual dialing. We create an account for you in our dialing system, and you dial your list yourself. No autodialed doing the work for you. Just you, the phone, and the close."
  },
  {
    question: "How are taxes handled?",
    answer: "You are an independent contractor, not an employee, so taxes are not withheld. You are responsible for your own taxes and may receive year-end tax documentation depending on your situation. We cannot give tax advice, so talk to a tax professional for your specifics."
  },
  {
    question: "How long until I am approved?",
    answer: "A team reviews every application and makes a decision within 1 to 4 business days."
  },
  {
    question: "How fast can I start?",
    answer: "If you are approved, we create your dialer account quickly and many closers are on the phones within the same week they apply."
  },
  {
    question: "What kind of support do I get?",
    answer: "A dedicated team of experts is available to every closer through an internal chat and email system. You are not dropped on an island. Beyond onboarding, you have the script, the objection answers, and real people to reach when something comes up while you are working your list."
  },
  {
    question: "Can I really set my own hours?",
    answer: "Yes. Nobody clocks you in. One honest note worth more than it sounds: decision makers answer during business hours, so the closers who earn the most call when their prospects are at their desks. The freedom is real. Use it smart and it pays."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      <div className="hero-wrapper">
        <Header />
        <Hero 
          titleNode={
            <h1 className="hero-title">
              <span className="hero-title-text">Straight </span>
              <span style={{ position: 'relative', display: 'inline-block', zIndex: 1, whiteSpace: 'nowrap' }}>
                <span className="hero-title-text" style={{ position: 'relative', zIndex: 2 }}>answers.</span>
                <UnderlineSVG style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '14px', zIndex: -1 }} />
              </span>
            </h1>
          }
          subtitle="The real questions closers ask before they join. If something is missing, the application has a spot to ask it."
          showShapes={false}
          showActions={false}
          showTrust={false}
          paddingTop="160px"
          subtitleMaxWidth="850px"
        />
      </div>

      <section className="section faq-section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`faq-item ${isOpen ? 'open' : ''}`}
                >
                  <button 
                    className="faq-question" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-question-content">
                      <div className="faq-left-icon">
                        <MessageCircleQuestion size={20} />
                      </div>
                      <span className="faq-question-text">{faq.question}</span>
                    </div>
                    <ChevronDown className="faq-icon" size={20} />
                  </button>
                  <div className="faq-answer-wrapper" style={{ 
                    display: 'grid', 
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease'
                  }}>
                    <div style={{ overflow: 'hidden' }}>
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <CTASection 
        headline="Still reading? You're our kind of closer."
        buttonText="Apply to close"
        body={null}
      />
      <Footer />
    </main>
  );
}
