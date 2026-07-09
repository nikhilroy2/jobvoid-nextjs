'use client';
import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import styles from './ReadingContent.module.css';

export default function ReadingContent() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.titleWrapper}>
          <AnimatedTitle text1="Our Core" text2="Philosophy" />
        </div>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            We believe that <span className={styles.highlightBlue}>design</span> is not just what it looks like and feels like. Design is how it <span className={styles.highlightOrange}>works</span>. 
            In a world filled with endless noise and digital clutter, we strive to create experiences that are deeply <span className={styles.highlightPink}>meaningful</span>, 
            intuitive, and relentlessly focused on the <span className={styles.highlightGreen}>user's journey</span>.
          </p>
          <p className={styles.paragraph}>
            Every pixel we push and every single line of code we write is dedicated to elevating your brand. 
            We don't just build websites; we craft <span className={styles.highlightGradient}>digital ecosystems</span> that 
            empower modern businesses to scale, innovate, and lead their respective industries.
          </p>
        </div>
        
        <div className={styles.signature}>
           — The Creative Team
        </div>
        
      </div>
    </section>
  );
}
