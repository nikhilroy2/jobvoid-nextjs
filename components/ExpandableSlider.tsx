'use client';
import React, { useState } from 'react';
import styles from './ExpandableSlider.module.css';

const items = [
  { id: 1, title: 'Mountain Peaks', subtitle: 'Explore the highest altitudes and majestic views.', seed: 101 },
  { id: 2, title: 'Ocean Waves', subtitle: 'Dive into the deep blue and discover the unknown.', seed: 102 },
  { id: 3, title: 'Urban Jungle', subtitle: 'Discover city secrets and concrete canyons.', seed: 103 },
  { id: 4, title: 'Desert Dunes', subtitle: 'Wander the endless sands under the blazing sun.', seed: 104 },
  { id: 5, title: 'Forest Trails', subtitle: 'Get lost in nature and breathe the fresh pine.', seed: 105 },
];

export default function ExpandableSlider() {
  const [active, setActive] = useState(1);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>Expandable <span className={styles.italic}>Gallery</span></h2>
      </div>

      <div className={styles.container}>
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`${styles.panel} ${active === item.id ? styles.active : ''}`}
            onClick={() => setActive(item.id)}
          >
            {/* The Background Image */}
            <img 
              src={`https://picsum.photos/seed/${item.seed}/1000/800`} 
              alt={item.title} 
              className={styles.image} 
              loading="lazy"
            />
            
            {/* The Expanded Content (Only visible when active) */}
            <div className={styles.content}>
               <h3 className={styles.title}>{item.title}</h3>
               <p className={styles.subtitle}>{item.subtitle}</p>
            </div>
            
            {/* The Collapsed Title (Rotated vertically) */}
            <h3 className={styles.verticalTitle}>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
