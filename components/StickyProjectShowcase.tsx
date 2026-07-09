'use client';
import React, { useEffect, useRef, useState } from 'react';
import PixelButton from './PixelButton';
import styles from './StickyProjectShowcase.module.css';

const projects = [
  {
    id: 1,
    tag: "Web Design",
    title: "Nova Landing",
    desc: "Minimalist product landing page built for startups focused on engagement.",
    color: "#6b7280"
  },
  {
    id: 2,
    tag: "App Development",
    title: "Finance Tracker",
    desc: "A comprehensive dashboard for tracking personal expenses and investments.",
    color: "#4b5563"
  },
  {
    id: 3,
    tag: "Branding",
    title: "Eco Store",
    desc: "Complete brand identity and e-commerce platform for sustainable products.",
    color: "#374151"
  },
  {
    id: 4,
    tag: "UI/UX",
    title: "Healthcare Portal",
    desc: "Intuitive patient management system designed for modern clinics.",
    color: "#1f2937"
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
      <div className={styles.imageContainer} style={{ backgroundColor: project.color }}>
         {/* Placeholder Image container */}
         <div className={styles.imageTag}>{project.tag}</div>
      </div>
      <div className={styles.cardInfo}>
         <h3 className={styles.cardTitle}>{project.title}</h3>
         <p className={styles.cardDesc}>{project.desc}</p>
      </div>
    </div>
  );
}

export default function StickyProjectShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side: Sticky */}
        <div className={styles.leftColumn}>
          <div className={styles.stickyContent}>
            <div className={styles.labelWrapper}>
              <div className={styles.label}>CRAFTED WITH CODE</div>
              <div className={styles.dashedLine}></div>
            </div>
            
            <h2 className={styles.title}>OUR PROJECTS</h2>
            <p className={styles.description}>
              Clarity fuels trust — here's everything you might want to know before we start building together.
            </p>
            <div className={styles.buttonWrapper}>
              <PixelButton>Get Started</PixelButton>
            </div>
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
