'use client';
import React, { useState } from 'react';
import AnimatedTitle from './AnimatedTitle';
import styles from './Testimonials.module.css';
import { ArrowLeft, ArrowRight, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "We are excited for our work and how it positively impacts clients. With over 12 years of experience we have been constantly providing solutions. We are committed to deliver unique digital media solutions from web design",
    author: "David Backhum",
    role: "Designer",
    color: "#cbd5e1" // Placeholder background color
  },
  {
    id: 2,
    quote: "Working with this team was an absolute game-changer. They understood our vision perfectly and delivered a product that exceeded all our expectations. Highly recommended for any ambitious project.",
    author: "Sarah Jenkins",
    role: "Marketing Director",
    color: "#94a3b8"
  },
  {
    id: 3,
    quote: "The level of professionalism and technical expertise is unmatched. They didn't just build what we asked for, they helped us figure out what we actually needed. A truly seamless experience.",
    author: "Michael Chang",
    role: "Startup Founder",
    color: "#64748b"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDir, setSlideDir] = useState('right');

  const handlePrev = () => {
    setSlideDir('left');
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideDir('right');
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeT = testimonials[activeIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT COLUMN */}
        <div className={styles.leftColumn}>
          <h4 className={styles.label}>CLIENTS FEEDBACK</h4>
          
          <div className={styles.statsWrapper}>
            <p className={styles.statsText}>
              More than 25k clients all<br /> over the world
            </p>
            <div className={styles.avatars}>
              {/* Using generic placeholders for avatars */}
              <div className={styles.avatar} style={{ zIndex: 3, backgroundColor: '#e2e8f0' }}>
                <User size={20} color="#64748b" />
              </div>
              <div className={styles.avatar} style={{ zIndex: 2, backgroundColor: '#cbd5e1' }}>
                <User size={20} color="#475569" />
              </div>
              <div className={styles.avatar} style={{ zIndex: 1, backgroundColor: '#94a3b8' }}>
                <User size={20} color="#334155" />
              </div>
              <div className={styles.avatarPlus}>+</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Main Content) */}
        <div className={styles.mainColumn}>
          
          <div className={styles.titleWrapper}>
            <AnimatedTitle text1="What Our Clients" text2="Say About Us" />
          </div>

          <div className={styles.sliderContainer}>
            {/* The decorative circle dot on the left of the image */}
            <div className={styles.decorativeDot}>
              <div className={styles.innerDot}></div>
            </div>

            {/* Slider Content */}
            {/* Using key to force re-render and trigger CSS slide animation on change */}
            <div key={`${activeT.id}-${slideDir}`} className={`${styles.slideContent} ${styles[slideDir]}`}>
              
              <div className={styles.imageColumn}>
                <div 
                  className={styles.mainImage} 
                  style={{ backgroundColor: activeT.color }}
                >
                  {/* Placeholder for actual person image */}
                  <User size={80} color="rgba(255,255,255,0.5)" strokeWidth={1} />
                </div>
              </div>

              <div className={styles.textColumn}>
                <p className={styles.quote}>{activeT.quote}</p>
                
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{activeT.author}</h4>
                  <span className={styles.authorRole}>{activeT.role}</span>
                </div>

                <div className={styles.controls}>
                  <button onClick={handlePrev} className={styles.controlBtn} aria-label="Previous">
                    <ArrowLeft size={28} strokeWidth={1} />
                  </button>
                  <button onClick={handleNext} className={styles.controlBtn} aria-label="Next">
                    <ArrowRight size={28} strokeWidth={1} />
                  </button>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
