import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './PixelButton.module.css';

export default function PixelButton({ 
  children = "Get Started", 
  onClick,
  variant = "solid",
  color = "dark",
  href,
  className = "",
  withArrow = true,
  type = "button"
}: { 
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outline";
  color?: "primary" | "danger" | "success" | "dark" | "light" | "gradient";
  href?: string;
  className?: string;
  withArrow?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  const classes = `${styles.button} ${variant === 'outline' ? styles.outline : ''} ${variant === 'solid' ? styles[color] || styles.dark : ''} ${className}`;

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
      type={type}
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
