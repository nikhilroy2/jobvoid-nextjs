'use client';
import React, { useRef } from 'react';
import styles from './PremiumSlider.module.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const cases = [
  { id: 1, title: 'E-Commerce Platform Redesign', category: 'Web Development', seed: 15 },
  { id: 2, title: 'Minimalist Brand Identity', category: 'UI/UX Design', seed: 28 },
  { id: 3, title: 'Banking Mobile App', category: 'Product Design', seed: 39 },
  { id: 4, title: 'Crypto Trading Dashboard', category: 'UX Research', seed: 44 },
  { id: 5, title: 'Creative Agency Website', category: 'Development', seed: 52 },
  { id: 6, title: 'Healthcare Management Portal', category: 'UX Design', seed: 66 },
];

export default function PremiumSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Calculate scroll amount: card width + gap (approx 440px)
      // We dynamically read clientWidth to ensure it works responsively
      const cardWidth = window.innerWidth > 768 ? 440 : window.innerWidth * 0.85 + 20;
      
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        
        <div className={styles.headerText}>
          <h2 className={styles.title}>
            Featured <span className={styles.italic}>Work</span>
          </h2>
          <p className={styles.subtitle}>
            Explore some of our most recent and exciting projects. We pride ourselves on pushing boundaries.
          </p>
        </div>
        
        <div className={styles.controls}>
          <button onClick={() => scroll('left')} className={styles.btn} aria-label="Scroll left">
            <ArrowLeft size={24} />
          </button>
          <button onClick={() => scroll('right')} className={styles.btn} aria-label="Scroll right">
            <ArrowRight size={24} />
          </button>
        </div>
        
      </div>

      <div className={styles.sliderWrapper}>
        <div className={styles.slider} ref={scrollRef}>
          {cases.map((c) => (
            <div key={c.id} className={styles.card}>
              <img 
                src={`https://picsum.photos/seed/${c.seed}/800/1000`} 
                alt={c.title} 
                className={styles.image} 
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span className={styles.category}>{c.category}</span>
                <h3 className={styles.cardTitle}>{c.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
