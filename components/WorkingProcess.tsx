'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ClipboardEdit, BadgeCheck, Settings, Headset, Banknote } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle';
import styles from './WorkingProcess.module.css';

const processes = [
  {
    id: '01',
    title1: 'Apply.',
    title2: '',
    items: ['A few minutes.', 'We screen on closing experience, nothing else.'],
    icon: <ClipboardEdit size={160} strokeWidth={1.2} color="#10b981" />
  },
  {
    id: '02',
    title1: 'Get approved.',
    title2: '',
    items: ['A team reviews your application', 'Grants access within 1 to 4 business days.'],
    icon: <BadgeCheck size={160} strokeWidth={1.2} color="#3b82f6" />
  },
  {
    id: '03',
    title1: 'Get set up.',
    title2: '',
    items: ['We create your dialer account', 'Walk you through the client, product, and script.'],
    icon: <Settings size={160} strokeWidth={1.2} color="#f59e0b" />
  },
  {
    id: '04',
    title1: 'Start',
    title2: 'closing.',
    items: ['You dial your list', 'Work the script', 'Log every close.'],
    icon: <Headset size={160} strokeWidth={1.2} color="#0ea5e9" />
  },
  {
    id: '05',
    title1: 'Get paid',
    title2: 'Friday.',
    items: ['Closes pay out the following Friday.', 'Recurs for three months while active.'],
    icon: <Banknote size={160} strokeWidth={1.2} color="#ec4899" />
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
        rootMargin: '-30% 0px -30% 0px', // Trigger slightly before center so last item is easily reachable
        threshold: 0
      }
    );

    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      {/* Reusing the AnimatedTitle component as requested */}
      <AnimatedTitle text1="The" text2="Process" />
      
      <div className={styles.container}>
        
        {/* Left Column (Sticky Image) */}
        <div className={styles.leftColumn}>
          <div className={styles.stickyImage}>
             {processes[activeIndex]?.icon}
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
