import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './PixelButton.module.css';

export default function PixelButton({ 
  children = "Get Started", 
  onClick,
  variant = "solid",
  href,
  className = "",
  withArrow = true
}: { 
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outline";
  href?: string;
  className?: string;
  withArrow?: boolean;
}) {
  const classes = `${styles.button} ${variant === 'outline' ? styles.outline : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span className={styles.text}>
          {children}
          {withArrow && (
            <div className={styles.arrowContainer}>
              <ArrowRight size={18} className={styles.arrow1} />
              <ArrowRight size={18} className={styles.arrow2} />
            </div>
          )}
        </span>
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={classes}
    >
      <span className={styles.text}>
        {children}
        {withArrow && (
          <div className={styles.arrowContainer}>
            <ArrowRight size={18} className={styles.arrow1} />
            <ArrowRight size={18} className={styles.arrow2} />
          </div>
        )}
      </span>
    </button>
  );
}
