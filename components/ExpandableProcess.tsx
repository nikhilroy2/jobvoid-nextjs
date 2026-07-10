'use client';

import React, { useState } from 'react';
import styles from './ExpandableProcess.module.css';

export interface ExpandableProcessItem {
  id: string | number;
  number: string;
  title: React.ReactNode;
  description: React.ReactNode;
  icon?: React.ReactNode;
}

export interface ExpandableProcessProps {
  items: ExpandableProcessItem[];
  defaultActiveId?: string | number;
}

export default function ExpandableProcess({ items, defaultActiveId }: ExpandableProcessProps) {
  const [activeId, setActiveId] = useState<string | number>(defaultActiveId ?? items[0]?.id);

  // Chunk items into rows of 3 for desktop
  const desktopRows = [];
  for (let i = 0; i < items.length; i += 3) {
    desktopRows.push(items.slice(i, i + 3));
  }

  // Chunk items into rows of 2 for mobile
  const mobileRows = [];
  for (let i = 0; i < items.length; i += 2) {
    mobileRows.push(items.slice(i, i + 2));
  }

  const renderItem = (item: ExpandableProcessItem) => {
    const isActive = activeId === item.id;
    return (
      <div 
        key={item.id}
        className={`${styles.item} ${isActive ? styles.active : ''}`}
        onMouseEnter={() => setActiveId(item.id)}
        onClick={() => setActiveId(item.id)}
      >
        <div className={styles.content}>
          <div className={`${styles.iconWrapper} ${isActive ? styles.iconActive : ''}`}>
            {item.icon}
          </div>
          <h3 className={`${styles.title} ${isActive ? styles.titleActive : ''}`}>
            {item.title}
          </h3>
          
          <div className={styles.descWrapper}>
            <div className={styles.descInner}>
              <div className={styles.description}>
                {item.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Desktop Layout: Flex rows with horizontal expansion */}
      <div className={`${styles.container} ${styles.desktopOnly}`}>
        {desktopRows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map(renderItem)}
          </div>
        ))}
      </div>

      {/* Mobile Layout: Rows of 2 with horizontal expansion */}
      <div className={`${styles.container} ${styles.mobileOnly}`}>
        {mobileRows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map(renderItem)}
          </div>
        ))}
      </div>
    </>
  );
}
