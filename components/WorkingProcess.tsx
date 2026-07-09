'use client';
import React, { useEffect, useRef, useState } from 'react';
import AnimatedTitle from './AnimatedTitle';
import styles from './WorkingProcess.module.css';

const processes = [
  {
    id: '01',
    title1: 'Research &',
    title2: 'Planning',
    items: ['Target audience research', 'Site map creation', 'Content strategy']
  },
  {
    id: '02',
    title1: 'Design &',
    title2: 'Development',
    items: ['Wireframing & Prototyping', 'UI/UX Design', 'Frontend Development']
  },
  {
    id: '03',
    title1: 'Testing &',
    title2: 'Launch',
    items: ['Quality Assurance', 'Performance Optimization', 'Deployment']
  },
  {
    id: '04',
    title1: 'Growth &',
    title2: 'Support',
    items: ['SEO Optimization', 'Maintenance', 'Analytics & Reporting']
  }
];

export default function WorkingProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when row hits center of screen
        threshold: 0
      }
    );

    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      {/* Reusing the AnimatedTitle component as requested */}
      <AnimatedTitle text1="Working" text2="Process" />
      
      <div className={styles.container}>
        
        {/* Left Column (Sticky Image) */}
        <div className={styles.leftColumn}>
          <div className={styles.stickyImage}>
             {/* Placeholder for the image */}
          </div>
        </div>

        {/* Right Column (Rows) */}
        <div className={styles.rightColumn}>
          {processes.map((process, index) => (
            <div 
              key={process.id} 
              data-index={index}
              ref={(el) => { rowRefs.current[index] = el; }}
              className={styles.processRow}
            >
              
              <div className={styles.numberCell}>
                {/* Timeline node that sits on the border */}
                <div className={`${styles.timelineNode} ${activeIndex === index ? styles.active : ''}`}>
                  {activeIndex === index && <div className={styles.innerDot}></div>}
                </div>
                <span className={styles.number}>{process.id}</span>
              </div>
              
              <div className={styles.titleCell}>
                <h3 className={styles.rowTitle}>
                  {process.title1}<br />
                  <span className={styles.rowTitleItalic}>{process.title2}</span>
                </h3>
              </div>
              
              <div className={styles.listCell}>
                <ul className={styles.list}>
                  {process.items.map((item, i) => (
                    <li key={i} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
