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

  // Chunk items into rows of 3
  const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <div className={styles.container}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((item) => {
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
          })}
        </div>
      ))}
    </div>
  );
}
