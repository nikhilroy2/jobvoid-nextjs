'use client';
import React, { useEffect, useRef } from 'react';
import styles from './SpeedMarquee.module.css';

export type MarqueeItem = {
  text: string;
  subText?: string;
  icon: React.ReactNode;
};

const defaultItems: MarqueeItem[] = [
  { text: "DESIGN", icon: "×" },
  { text: "CSS3", icon: "×" },
  { text: "JAVASCRIPT", icon: "×" },
  { text: "GSAP", icon: "×" },
  { text: "FIGMA", icon: "×" },
  { text: "REACT", icon: "×" },
  { text: "NEXT.JS", icon: "×" },
  { text: "TAILWIND", icon: "×" }
];

export default function SpeedMarquee({ items = defaultItems }: { items?: MarqueeItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Animation state
  const x = useRef(0);
  const direction = useRef(-1); // -1 for right-to-left
  const baseSpeed = 1.5; // Normal speed
  const targetSpeed = useRef(baseSpeed);
  const currentSpeed = useRef(baseSpeed);

  // Scroll tracking
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    let animationFrameId: number;
    let timeoutId: NodeJS.Timeout;
    let lastTime = performance.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      // Increase speed based on how fast they are scrolling (increased multiplier for more dramatic effect)
      const speedBump = Math.abs(deltaY) * 0.4;
      targetSpeed.current = baseSpeed + speedBump;

      // Reset back to normal speed shortly after they stop scrolling
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        targetSpeed.current = baseSpeed;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const render = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      // Smoothly interpolate current speed towards target speed for fluid acceleration
      currentSpeed.current += (targetSpeed.current - currentSpeed.current) * 0.1;

      // Calculate movement (deltaTime normalization ensures consistent speed across monitor refresh rates)
      x.current += direction.current * currentSpeed.current * (deltaTime * 0.06);

      if (textRef.current) {
        // The total width is split exactly into two identical halves.
        // When we scroll past the first half, we instantly jump back by that width.
        const width = textRef.current.scrollWidth / 2;

        if (Math.abs(x.current) >= width) {
          x.current += width; // Jump back to loop seamlessly
        }

        textRef.current.style.transform = `translate3d(${x.current}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, []);

  const content = (
    <>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span className={styles.word}>{item.text}</span>
            {item.subText && (
              <span style={{ fontSize: 'clamp(0.85rem, 2vw, 1.15rem)', color: '#a3a3a3', marginTop: '0', fontWeight: 500, letterSpacing: 'normal', fontFamily: 'system-ui, sans-serif' }}>
                {item.subText}
              </span>
            )}
          </div>
          <span className={styles.separator} style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>
        </React.Fragment>
      ))}
      {/* We add it again to make sure the single group is long enough to fill the screen */}
      {items.map((item, i) => (
        <React.Fragment key={`extra-${i}`}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span className={styles.word}>{item.text}</span>
            {item.subText && (
              <span style={{ fontSize: 'clamp(0.85rem, 2vw, 1.15rem)', color: '#a3a3a3', marginTop: '0', fontWeight: 500, letterSpacing: 'normal', fontFamily: 'system-ui, sans-serif' }}>
                {item.subText}
              </span>
            )}
          </div>
          <span className={styles.separator} style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className={styles.marqueeContainer} ref={containerRef}>
      <div className={styles.marqueeText} ref={textRef}>
        {/* Group 1 */}
        <div className={styles.marqueeGroup}>{content}</div>
        {/* Group 2 (Identical Clone for seamless loop) */}
        <div className={styles.marqueeGroup} aria-hidden="true">{content}</div>
      </div>
    </div>
  );
}
