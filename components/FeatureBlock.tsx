'use client';
import React from 'react';
import styles from './FeatureBlock.module.css';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FeatureBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT COLUMN: Text Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Next Generation Platform
          </div>
          
          <h2 className={styles.title}>
            Build your dream <span className={styles.highlight}>digital product</span> faster than ever.
          </h2>
          
          <p className={styles.description}>
            We combine strategic thinking with stunning design and flawless engineering to deliver products that don't just look good, but drive real business results.
          </p>

          <ul className={styles.list}>
            <li><CheckCircle2 size={20} className={styles.checkIcon} /> Seamless Integration & APIs</li>
            <li><CheckCircle2 size={20} className={styles.checkIcon} /> Enterprise-Grade Security</li>
            <li><CheckCircle2 size={20} className={styles.checkIcon} /> 24/7 Priority Support</li>
          </ul>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>
              Get Started <ArrowRight size={18} />
            </button>
            <button className={styles.secondaryBtn}>
              View Case Studies
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Image Collage & Floating Elements */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            
            {/* Primary large image */}
            <img 
              src="https://picsum.photos/seed/featureMain/800/900" 
              alt="Team collaborating" 
              className={styles.mainImage} 
              loading="lazy"
            />
            
            {/* Decorative Glassmorphism Stat Card */}
            <div className={styles.floatingCard}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}></div>
                <div>
                  <h4 className={styles.cardTitle}>Performance</h4>
                  <p className={styles.cardSub}>+400% Growth</p>
                </div>
              </div>
              <div className={styles.chartBar}>
                <div className={styles.chartFill}></div>
              </div>
            </div>
            
            {/* Secondary overlapping image */}
            <img 
              src="https://picsum.photos/seed/featureSub/400/300" 
              alt="App interface" 
              className={styles.subImage} 
              loading="lazy"
            />
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
