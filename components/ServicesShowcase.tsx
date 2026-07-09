'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ServicesShowcase.module.css';

export interface ShowcaseItem {
  id: string;
  title: string;
  desc: React.ReactNode;
  tags?: string[];
  color?: string;
  icon?: React.ReactNode;
  contentNode?: React.ReactNode;
}

const defaultServices: ShowcaseItem[] = [
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

export interface ServicesShowcaseProps {
  label?: string;
  title?: string;
  titleNode?: React.ReactNode;
  items?: ShowcaseItem[];
}

export default function ServicesShowcase({
  label = "DEVELOPMENT SERVICES",
  title = "WHAT WE OFFER",
  titleNode,
  items = defaultServices
}: ServicesShowcaseProps = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sidebarListRef = useRef<HTMLDivElement>(null);
  const isMobile = useRef(false);

  useEffect(() => {
    if (isMobile.current && sidebarListRef.current) {
      const activeEl = sidebarListRef.current.children[activeIndex] as HTMLElement;
      if (activeEl) {
        sidebarListRef.current.scrollTo({
          left: activeEl.offsetLeft - 20,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

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
      if (!containerRef.current) return;
      
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
      
      let idx = Math.floor(scrolled * items.length);
      if (idx >= items.length) idx = items.length - 1;
      
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
      const targetPercentage = (index + 0.1) / items.length; 
      const targetScrollY = window.scrollY + rect.top - 120 + (scrollableDistance * targetPercentage);
      
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }
  };

  const activeService = items[activeIndex];

  return (
    <div className={styles.showcaseWrapper}>
      <div className={styles.sectionPadding} style={{ paddingBottom: '40px' }}>
        {titleNode ? (
          titleNode
        ) : (
          <div className={styles.header}>
            <div className={styles.labelWrapper}>
              <div className={styles.label}>{label}</div>
              <div className={styles.dashedLine}></div>
            </div>
            <h2 className={styles.title}>{title}</h2>
          </div>
        )}
      </div>

      <section ref={containerRef} className={styles.scrollContainer} style={{ height: `calc(100vh + ${items.length * 40}vh)` }}>
        <div className={styles.stickyWrapper}>
          <div className={styles.sectionPadding} style={{ paddingTop: '20px' }}>

            <div className={styles.container}>
            
            {/* Left Sidebar (Tabs) */}
            <div className={styles.sidebar}>
              <div ref={sidebarListRef} className={styles.sidebarList}>
                {items.map((service, idx) => (
                  <div 
                    key={service.id}
                    className={`${styles.sidebarItem} ${activeIndex === idx ? styles.active : ''}`}
                    onClick={() => handleTabClick(idx)}
                  >
                    <div className={styles.sidebarItemHeader}>
                      {service.icon && (
                        <div className={styles.sidebarIcon} style={{ 
                          background: service.color ? `${service.color}15` : '#f3f4f6', 
                          color: service.color || '#4b5563', 
                        }}>
                          {service.icon}
                        </div>
                      )}
                      <h3 className={styles.sidebarTitle}>{service.title}</h3>
                    </div>
                    <div className={styles.sidebarDesc}>{service.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content (Single Card Replaces) */}
            <div className={styles.content}>
              {/* Key forces React to re-mount the div, triggering the CSS scale animation */}
              <div key={activeService.id} className={styles.activeCardWrapper}>
                {activeService.contentNode ? (
                  activeService.contentNode
                ) : (
                  <div className={styles.cardImage} style={{ backgroundColor: activeService.color }}>
                    <div className={styles.tags}>
                      {activeService.tags?.map((tag: string) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
    </div>
  );
}
