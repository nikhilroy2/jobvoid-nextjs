'use client';
import React from 'react';
import styles from './BlogGrid.module.css';

const posts = [
  {
    id: 1,
    title: "Our strategic planning ensures your brand's vision aligns with market opportunities",
    category: "Development",
    date: "August 12, 2024",
    seed: 14 // Seed for consistent random image
  },
  {
    id: 2,
    title: "The complex but awesome CSS border-image proper for web design company",
    category: "Development",
    date: "August 12, 2024",
    seed: 42
  },
  {
    id: 3,
    title: "Our strategic planning ensures your brand's vision aligns with market opportunities",
    category: "Development",
    date: "August 12, 2024",
    seed: 88
  }
];

export default function BlogGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            
            <div className={styles.imageContainer}>
              {/* Using picsum.photos for beautiful placeholder images */}
              <img 
                src={`https://picsum.photos/seed/${post.seed}/600/500`} 
                alt={post.title}
                className={styles.image}
                loading="lazy"
              />
            </div>
            
            <h3 className={styles.title}>{post.title}</h3>
            
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.line}></span>
              <span className={styles.date}>{post.date}</span>
            </div>
            
          </div>
        ))}

      </div>
    </section>
  );
}
