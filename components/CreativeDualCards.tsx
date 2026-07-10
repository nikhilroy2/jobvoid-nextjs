'use client';

import React, { useRef, useState, useEffect } from 'react';
import styles from './CreativeDualCards.module.css';
import { Rocket, Target, Quote, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CreativeDualCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  // Check window size for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 991);
    checkMobile(); // Check immediately on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (!isMobile || isDragging) return;

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % 4;
      if (scrollRef.current) {
        const cards = scrollRef.current.children;
        const targetCard = cards[nextIndex] as HTMLElement;
        if (targetCard) {
          const cardWidth = targetCard.clientWidth;
          scrollRef.current.scrollTo({
            left: nextIndex * (cardWidth + 16),
            behavior: 'smooth'
          });
        }
      }
      setActiveIndex(nextIndex);
    }, 4000); // Advance every 4 seconds

    return () => clearInterval(interval);
  }, [isMobile, isDragging, activeIndex]);

  const scrollToCard = (index: number) => {
    if (!scrollRef.current || index < 0 || index > 3) return;
    const cards = scrollRef.current.children;
    const targetCard = cards[index] as HTMLElement;
    if (targetCard) {
      const cardWidth = targetCard.clientWidth;
      scrollRef.current.scrollTo({
        left: index * (cardWidth + 16),
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current || isDragging) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardElement = scrollRef.current.children[0] as HTMLElement;
    if (!cardElement) return;
    const cardWidth = cardElement.clientWidth;
    // 16 is the gap between cards
    const index = Math.round(scrollLeft / (cardWidth + 16)); 
    if (index !== activeIndex && index >= 0 && index < 4) {
      setActiveIndex(index);
    }
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setStartScrollLeft(scrollRef.current.scrollLeft);
    // Optionally remove snap type while dragging for smooth drag
    scrollRef.current.style.scrollSnapType = 'none';
  };

  const handleMouseLeave = () => {
    if (!isDragging || !scrollRef.current) return;
    setIsDragging(false);
    scrollRef.current.style.scrollSnapType = 'x mandatory';
  };

  const handleMouseUp = () => {
    if (!isDragging || !scrollRef.current) return;
    setIsDragging(false);
    scrollRef.current.style.scrollSnapType = 'x mandatory';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed
    scrollRef.current.scrollLeft = startScrollLeft - walk;
  };

  return (
    <div className={styles.treeContainer}>
      {/* The top dot */}
      <div className={styles.topDot}></div>
      
      {/* The vertical trunk dropping down */}
      <div className={styles.trunk}></div>
      
      {/* The horizontal split branching to 4 cards (Desktop only) */}
      <div className={styles.branchesWrapper}>
        <div className={styles.branchCol1}></div>
        <div className={styles.branchCol2}>
          <div className={styles.branchDropLeft}></div>
        </div>
        <div className={styles.branchCol3}>
          <div className={styles.branchDropRight}></div>
        </div>
        <div className={styles.branchCol4}></div>
      </div>
      
      {/* The 4 cards row */}
      <div 
        className={`${styles.cardsRow} ${isDragging ? styles.isDragging : ''}`}
        ref={scrollRef} 
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        
        {/* Card 1: White Glass */}
        <div className={`${styles.cardWrapper} ${styles.cardWrapperOuter}`}>
          <div className={`${styles.cardDot} ${styles.dotOuterLeft}`}>
            <Rocket size={16} color="#3b82f6" />
          </div>
          <div className={`${styles.card} ${styles.cardWhite}`}>
            <div className={styles.mobileIconWrapper} style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <Rocket size={24} color="#3b82f6" />
            </div>
            <h3 className={styles.cardTitle}>Experience Required</h3>
            <p className={styles.cardDesc}>
              Real B2B closing experience is a must. This is not where you learn to sell. We only want closers who can handle the heat.
            </p>
          </div>
        </div>

        {/* Card 2: Purple Square */}
        <div className={`${styles.cardWrapper} ${styles.cardWrapperInner}`}>
          <div className={`${styles.cardDot} ${styles.dotInnerLeft}`}>
            <Target size={16} color="#8b5cf6" />
          </div>
          <div className={`${styles.card} ${styles.cardPurple}`}>
            <div className={styles.mobileIconWrapper} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <Target size={24} color="#ffffff" />
            </div>
            <h2 className={styles.statTitle}>100%<br/>Commission</h2>
            <p className={styles.statDesc}>
              No base. No draw. No hourly.<br/>You earn entirely on what you close.
            </p>
          </div>
        </div>

        {/* Card 3: Dark Quote */}
        <div className={`${styles.cardWrapper} ${styles.cardWrapperInner}`}>
          <div className={`${styles.cardDot} ${styles.dotInnerRight}`}>
            <Quote size={16} color="#ec4899" />
          </div>
          <div className={`${styles.card} ${styles.cardDark}`}>
            <div className={styles.mobileIconWrapper} style={{ backgroundColor: 'rgba(236, 72, 153, 0.15)' }}>
              <Quote size={24} color="#ec4899" />
            </div>
            <p className={styles.quoteText}>
              "These are cold calls, not warm inbound leads. But the list is targeted at businesses that genuinely fit."
            </p>
            <div className={styles.quoteAuthor}>
              <strong>The Reality</strong>
              <span>Sales Operations</span>
            </div>
          </div>
        </div>

        {/* Card 4: Pills */}
        <div className={`${styles.cardWrapper} ${styles.cardWrapperOuter}`}>
          <div className={`${styles.cardDot} ${styles.dotOuterRight}`}>
            <DollarSign size={16} color="#10b981" />
          </div>
          <div className={`${styles.card} ${styles.cardPills}`}>
            <div className={styles.mobileIconWrapper} style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
              <DollarSign size={24} color="#10b981" />
            </div>
            <h3 className={styles.cardTitle}>The Money</h3>
            <p className={styles.cardDesc}>Everything a closer needs to thrive.</p>
            <div className={styles.pillsWrapper}>
              <span className={`${styles.pill} ${styles.pillYellow}`}>Paid Every Friday</span>
              <span className={`${styles.pill} ${styles.pillGreen}`}>Flat Commission</span>
              <span className={`${styles.pill} ${styles.pillPink}`}>3-Month Tail</span>
              <span className={`${styles.pill} ${styles.pillBlue}`}>Stacking Revenue</span>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Slider Controls */}
      <div className={styles.sliderControls}>
        <button 
          className={styles.sliderArrow} 
          onClick={() => scrollToCard(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous card"
        >
          <ChevronLeft size={20} />
        </button>

        <div className={styles.sliderDotsWrapper}>
          {[0, 1, 2, 3].map(i => (
             <button 
               key={i} 
               className={`${styles.sliderDot} ${activeIndex === i ? styles.activeDot : ''}`}
               onClick={() => scrollToCard(i)}
               aria-label={`Go to card ${i + 1}`}
             />
          ))}
        </div>

        <button 
          className={styles.sliderArrow} 
          onClick={() => scrollToCard(activeIndex + 1)}
          disabled={activeIndex === 3}
          aria-label="Next card"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
