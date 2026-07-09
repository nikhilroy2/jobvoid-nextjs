'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './AnimatedTitle.module.css';

export default function AnimatedTitle({ 
  text1 = "Working", 
  text2 = "Process" 
}: { 
  text1?: string, 
  text2?: string 
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible
      // Start filling when the element enters the bottom of the screen
      // Finish filling when it reaches the middle of the screen
      const start = windowHeight; 
      const end = windowHeight * 0.4; 
      
      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Trigger once on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <h2 
        className={styles.title} 
        style={{ '--progress': `${scrollProgress * 100}%` } as React.CSSProperties}
      >
        <span className={styles.word1}>{text1}</span>
        <span className={styles.word2}>{text2}</span>
      </h2>
    </div>
  );
}
