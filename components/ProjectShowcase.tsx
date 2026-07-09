import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './ProjectShowcase.module.css';

export type ShowcaseItem = {
  title: string;
  description?: string;
  icon: React.ReactNode;
  aspect: "landscape" | "wide" | "square";
  color?: string;
};

export function ProjectCard({ project, className }: { project: ShowcaseItem, className?: string }) {
  return (
    <div className={`${styles.card} ${className || ''}`} style={{ backgroundColor: project.color ? `color-mix(in srgb, ${project.color} 80%, #000000)` : '#111111', border: 'none' }}>
      <div className={`${styles.imageBox} ${styles[project.aspect]}`} style={{ backgroundColor: '#111111' }}>
        {project.icon}
      </div>
      <div className={styles.textContainer}>
        <div>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          {project.description && <p className={styles.cardDesc}>{project.description}</p>}
        </div>
        <ArrowUpRight className={styles.arrowIcon} />
      </div>
      <div className={styles.divider}></div>
    </div>
  );
}

export default function ProjectShowcase({ items = [], hideTitle = false }: { items?: ShowcaseItem[], hideTitle?: boolean }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Title Row (At Top) */}
        {!hideTitle && (
          <div className={styles.titleRow}>
            <p className={styles.subtitle}>OUR PROJECT WE HAVE DONE</p>
            <h2 className={styles.title}>
              See Our Recent<br />
              <span className={styles.titleItalic}>Projects</span>
            </h2>
          </div>
        )}

        {/* Scattered Layout */}
        <div className={styles.layoutWrapper}>
          
          <div className={styles.topRow}>
            {items[0] && (
              <div className={styles.card1}>
                <ProjectCard project={items[0]} />
              </div>
            )}
            {items[1] && (
              <div className={styles.card2Wrapper}>
                <div className={styles.card2}>
                  <ProjectCard project={items[1]} />
                </div>
              </div>
            )}
            {items[2] && (
              <div className={styles.card3}>
                <ProjectCard project={items[2]} />
              </div>
            )}
          </div>

          <div className={styles.bottomRow}>
            {items[3] && (
              <div className={styles.card4}>
                <ProjectCard project={items[3]} />
              </div>
            )}
            {items[4] && (
              <div className={styles.card5Wrapper}>
                <div className={styles.card5}>
                  <ProjectCard project={items[4]} />
                </div>
              </div>
            )}
            {items[5] && (
              <div className={styles.card6}>
                <ProjectCard project={items[5]} />
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
