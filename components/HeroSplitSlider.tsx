'use client';
import React, { useState, useEffect } from 'react';
import styles from './HeroSplitSlider.module.css';

const slides = [
  {
    id: 1,
    title: 'Digital',
    titleLine2: 'Vision',
    subtitle: '01 / Branding',
    desc: 'Crafting unforgettable identities for modern enterprises that stand out in crowded markets.',
    color: '#0f172a', // Slate 900
    seed: 201
  },
  {
    id: 2,
    title: 'Creative',
    titleLine2: 'Direction',
    subtitle: '02 / Design',
    desc: 'Guiding the aesthetic journey of your product with precision and unparalleled creativity.',
    color: '#312e81', // Indigo 900
    seed: 202
  },
  {
    id: 3,
    title: 'Future',
    titleLine2: 'Tech',
    subtitle: '03 / Development',
    desc: 'Building robust, scalable platforms using cutting edge technology for the next generation.',
    color: '#831843', // Pink 900
    seed: 203
  }
];

export default function HeroSplitSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side: Text Content */}
        <div 
          className={styles.left} 
          style={{ backgroundColor: slides[current].color }}
        >
          {slides.map((slide, index) => (
            <div 
              key={`text-${slide.id}`} 
              className={`${styles.textContent} ${index === current ? styles.activeText : ''}`}
            >
              <span className={styles.subtitle}>{slide.subtitle}</span>
              <h2 className={styles.title}>
                {slide.title}
                <br />
                <span className={styles.titleLine2}>{slide.titleLine2}</span>
              </h2>
              <p className={styles.desc}>{slide.desc}</p>
            </div>
          ))}
          
          <div className={styles.controls}>
             {slides.map((_, idx) => (
               <button 
                 key={idx}
                 onClick={() => setCurrent(idx)}
                 className={`${styles.dot} ${idx === current ? styles.activeDot : ''}`}
                 aria-label={`Go to slide ${idx + 1}`}
               />
             ))}
          </div>
        </div>

        {/* Right Side: Image with Clip-Path Reveal */}
        <div className={styles.right}>
          {slides.map((slide, index) => (
            <div 
              key={`img-${slide.id}`} 
              className={`${styles.imageWrapper} ${index === current ? styles.activeImage : ''}`}
              style={{ zIndex: index === current ? 2 : 1 }}
            >
              <img 
                src={`https://picsum.photos/seed/${slide.seed}/1000/1200`} 
                alt={slide.title} 
                className={styles.image} 
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
