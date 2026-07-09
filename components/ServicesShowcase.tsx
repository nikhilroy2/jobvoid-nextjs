'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ServicesShowcase.module.css';

const services = [
  { 
    id: 'web-design', 
    title: 'WEB DESIGN', 
    desc: 'Scalable, fast, and visually refined web experiences.', 
    tags: ['Web Design', 'Web Development'], 
    color: '#6b7280' 
  },
  { 
    id: 'ui-ux', 
    title: 'UI/UX DESIGN', 
    desc: 'Beautiful interfaces built for effortless user journeys.', 
    tags: ['UI/UX', 'Prototyping'], 
    color: '#4b5563' 
  },
  { 
    id: 'branding', 
    title: 'BRANDING', 
    desc: 'Distinct identities that captivate and communicate effectively.', 
    tags: ['Branding', 'Identity'], 
    color: '#374151' 
  },
  { 
    id: 'mobile-apps', 
    title: 'MOBILE APPS', 
    desc: 'Native and cross-platform applications for all devices.', 
    tags: ['iOS', 'Android'], 
    color: '#1f2937' 
  }
];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      isMobile.current = window.innerWidth <= 1024;
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile.current || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start pinning when top of container reaches 120px from top
      const startTop = 120;
      
      if (rect.top > startTop) {
        setActiveIndex(0);
        return;
      }
      
      // scrollableDistance is total height minus the viewport height
      const scrollableDistance = rect.height - windowHeight;
      if (scrollableDistance <= 0) return;
      
      let scrolled = (startTop - rect.top) / scrollableDistance;
      scrolled = Math.max(0, Math.min(1, scrolled));
      
      let idx = Math.floor(scrolled * services.length);
      if (idx >= services.length) idx = services.length - 1;
      
      setActiveIndex(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (index: number) => {
    if (isMobile.current) {
      setActiveIndex(index);
    } else {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = containerRef.current.scrollHeight - window.innerHeight;
      
      // Target a point safely inside the percentage bracket for this index
      const targetPercentage = (index + 0.1) / services.length; 
      const targetScrollY = window.scrollY + rect.top - 120 + (scrollableDistance * targetPercentage);
      
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }
  };

  const activeService = services[activeIndex];

  return (
    <section ref={containerRef} className={styles.scrollContainer}>
      <div className={styles.stickyWrapper}>
        <div className={styles.sectionPadding}>
          
          <div className={styles.header}>
            <div className={styles.labelWrapper}>
              <div className={styles.label}>DEVELOPMENT SERVICES</div>
              <div className={styles.dashedLine}></div>
            </div>
            <h2 className={styles.title}>WHAT WE OFFER</h2>
          </div>

          <div className={styles.container}>
            
            {/* Left Sidebar (Tabs) */}
            <div className={styles.sidebar}>
              <div className={styles.sidebarList}>
                {services.map((service, idx) => (
                  <div 
                    key={service.id}
                    className={`${styles.sidebarItem} ${activeIndex === idx ? styles.active : ''}`}
                    onClick={() => handleTabClick(idx)}
                  >
                    <h3 className={styles.sidebarTitle}>{service.title}</h3>
                    <p className={styles.sidebarDesc}>{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content (Single Card Replaces) */}
            <div className={styles.content}>
              {/* Key forces React to re-mount the div, triggering the CSS scale animation */}
              <div key={activeService.id} className={styles.activeCardWrapper}>
                <div className={styles.cardImage} style={{ backgroundColor: activeService.color }}>
                  <div className={styles.tags}>
                    {activeService.tags.map((tag: string) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
