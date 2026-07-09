'use client';
import React, { useEffect, useRef, useState } from 'react';
import PixelButton from './PixelButton';
import styles from './StickyProjectShowcase.module.css';

import AnimatedTitle from './AnimatedTitle';

export interface ProjectItem {
  id: number;
  tag: string;
  title: string;
  desc: React.ReactNode;
  image: string;
}

const defaultProjects: ProjectItem[] = [
  {
    id: 0,
    tag: "What you're selling",
    title: "AI visibility, the thing every business will want and most don't understand yet.",
    desc: "Buyers have started asking AI assistants like ChatGPT who the best provider is instead of scrolling a search page. The AI names a short list. If a business is on that list, the lead is theirs. If they are not, they never even knew the buyer was looking.\n\nOur client fixes that. A dedicated backend team does the work to get a business referenced and recommended across AI platforms. Think of it like SEO, but pointed at AI answers instead of search rankings, and handled entirely for the customer. The business pays a monthly subscription and the team does the work. Visibility is earned through what the team actually does, not promised out of thin air.\n\nYou are not selling a gadget nobody asked for. You are calling a business owner, showing them they are invisible in the exact place their next customer is deciding, and closing them on the team that makes them visible.",
    image: "/what_you_re_selling.png"
  },
  {
    id: 1,
    tag: "Who you'll call",
    title: "High-ticket businesses that live and die on being chosen.",
    desc: "The best customers are service businesses where a single new client is worth thousands, so visibility pays for itself fast. Think cosmetic surgeons, med spas, dentists, aesthetic and elective medical practices, law firms, and other high-margin local providers. When one new patient or client is worth several thousand dollars, getting named by an AI assistant instead of a competitor is an easy yes once they understand the stakes. Your job is to make them understand the stakes.",
    image: "/who_you_ll_call.png"
  },
  {
    id: 2,
    tag: "Read this before you apply",
    title: "Commission only. Cold calling. Experience required.",
    desc: "There is no base, no draw, and no hourly. You earn on what you close. These are cold calls, not warm inbound leads, though the list is targeted at businesses that genuinely fit. And you need real B2B closing experience, because this is not where you learn to sell. We put this on the home page on purpose. The people who can handle it should keep reading. The people who cannot should save themselves the time.",
    image: "/read_this_before.png"
  },
  {
    id: 3,
    tag: "The money",
    title: "Flat commission on every close, plus a recurring tail.",
    desc: "Every sale pays you a flat commission, paid that Friday. On top of that, each sale carries a small recurring percentage that keeps paying for three months, as long as you stay active. Active means you close at least one new sale that month. Keep closing and you stack fresh commissions on top of the recurring tail from your recent sales.",
    image: "/the_money.png"
  }
];

function ScrollCard({ project }: { project: any }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on intersection
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Re-scale down when it goes out of view so the animation replays when scrolling back up
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const observerRef = ref.current;
    if (observerRef) {
      observer.observe(observerRef);
    }

    return () => {
      if (observerRef) observer.unobserve(observerRef);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${styles.cardWrapper} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.cardInfo}>
         <h3 className={styles.cardTitle}>{project.title}</h3>
         <div className={styles.cardDesc}>{project.desc}</div>
      </div>
      <div className={styles.imageContainer}>
         <img src={project.image} alt={project.title} className={styles.projectImage} />
         <div className={styles.imageTag}>{project.tag}</div>
      </div>
    </div>
  );
}

export interface StickyProjectShowcaseProps {
  label?: string;
  titleText1?: string;
  titleText2?: string;
  description?: string;
  projects?: ProjectItem[];
}

export default function StickyProjectShowcase({
  label = "NEED TO KNOW",
  titleText1 = "The",
  titleText2 = "Details",
  description = "Clarity fuels trust — here's exactly who you'll call, what to expect, and how the money works before you start dialing.",
  projects = defaultProjects
}: StickyProjectShowcaseProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side: Sticky */}
        <div className={styles.leftColumn}>
          <div className={styles.stickyContent}>
            <div className={styles.labelWrapper}>
              <div className={styles.label}>{label}</div>
              <div className={styles.dashedLine}></div>
            </div>
            
            <div style={{ marginLeft: '-15px', marginBottom: '20px' }}>
              <AnimatedTitle text1={titleText1} text2={titleText2} />
            </div>
            <p className={styles.description}>
              {description}
            </p>
          </div>
        </div>

        {/* Right Side: Scrollable Cards */}
        <div className={styles.rightColumn}>
          {projects.map((project) => (
             <ScrollCard key={project.id} project={project} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
