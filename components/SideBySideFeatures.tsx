import React from 'react';
import styles from './SideBySideFeatures.module.css';

export interface FeatureItem {
  id: string | number;
  title: React.ReactNode;
  description: React.ReactNode;
  icon: React.ReactNode;
}

export interface SideBySideFeaturesProps {
  eyebrow?: string;
  heading: React.ReactNode;
  items: FeatureItem[];
}

export default function SideBySideFeatures({ eyebrow, heading, items }: SideBySideFeaturesProps) {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        {eyebrow && <div className={styles.eyebrow}>( _{eyebrow} )</div>}
        {typeof heading === 'string' ? (
          <h2 className={styles.heading}>{heading}</h2>
        ) : (
          <div className={styles.customHeading}>{heading}</div>
        )}
      </div>
      <div className={styles.rightColumn}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.iconWrapper}>
              {item.icon}
            </div>
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <div className={styles.itemDescription}>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
