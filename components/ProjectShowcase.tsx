import React from 'react';
import { ArrowUpRight, Monitor, Layout, Smartphone, PenTool, Camera } from 'lucide-react';
import styles from './ProjectShowcase.module.css';

const projects = {
  chair: {
    title: "Developed visionary Designs with spectacular ideas",
    icon: <Monitor size={48} strokeWidth={1} />,
    aspect: "landscape"
  },
  abstract: {
    title: "Product Design is which a brand is created",
    icon: <PenTool size={32} strokeWidth={1} />,
    aspect: "wide"
  },
  girl: {
    title: "Branding is very needed for tech",
    icon: <Layout size={48} strokeWidth={1} />,
    aspect: "landscape"
  },
  profile: {
    title: "Graphics Design in which a brand is created",
    icon: <Smartphone size={48} strokeWidth={1} />,
    aspect: "wide"
  },
  sketching: {
    title: "Creativity comes when we give best efforts",
    icon: <Camera size={32} strokeWidth={1} />,
    aspect: "landscape"
  }
} as const;

function ProjectCard({ project, className }: { project: any, className?: string }) {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={`${styles.imageBox} ${styles[project.aspect]}`}>
        {project.icon}
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <ArrowUpRight className={styles.arrowIcon} />
      </div>
      <div className={styles.divider}></div>
    </div>
  );
}

export default function ProjectShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Title Row (At Top) */}
        <div className={styles.titleRow}>
          <p className={styles.subtitle}>OUR PROJECT WE HAVE DONE</p>
          <h2 className={styles.title}>
            See Our Recent<br />
            <span className={styles.titleItalic}>Projects</span>
          </h2>
        </div>

        {/* Scattered Layout (3 Top, 2 Below) */}
        <div className={styles.layoutWrapper}>
          
          <div className={styles.topRow}>
            <div className={styles.card1}>
              <ProjectCard project={projects.chair} />
            </div>
            <div className={styles.card2Wrapper}>
              <div className={styles.card2}>
                <ProjectCard project={projects.abstract} />
              </div>
            </div>
            <div className={styles.card3}>
              <ProjectCard project={projects.girl} />
            </div>
          </div>

          <div className={styles.bottomRow}>
            <div className={styles.card4}>
              <ProjectCard project={projects.profile} />
            </div>
            <div className={styles.card5}>
              <ProjectCard project={projects.sketching} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
