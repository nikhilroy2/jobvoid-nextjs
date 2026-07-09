import React from 'react';
import styles from './PixelButton.module.css';

export default function PixelButton({ 
  children = "Get Started", 
  onClick 
}: { 
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className={styles.button}
    >
      <span className={styles.text}>
        {children}
      </span>
    </button>
  );
}
