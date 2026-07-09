import AttachButton from '@/components/AttachButton';
import PixelButton from '@/components/PixelButton';
import ProjectShowcase from '@/components/ProjectShowcase';
import StickyProjectShowcase from '@/components/StickyProjectShowcase';
import ServicesShowcase from '@/components/ServicesShowcase';
import WorkingProcess from '@/components/WorkingProcess';
import SpeedMarquee from '@/components/SpeedMarquee';
import Testimonials from '@/components/Testimonials';
import BlogGrid from '@/components/BlogGrid';
import PremiumSlider from '@/components/PremiumSlider';
import ExpandableSlider from '@/components/ExpandableSlider';
import HeroSplitSlider from '@/components/HeroSplitSlider';
import FeatureBlock from '@/components/FeatureBlock';
import ReadingContent from '@/components/ReadingContent';
import styles from './page.module.css';

export default function ComponentsPage() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>UI Components Library</h1>
        
        <div className={styles.grid}>
          
          {/* Component Showcase Card 1 */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Animated Attach Button</h2>
            <div className={styles.cardContent}>
              <AttachButton />
            </div>
          </div>

          {/* Component Showcase Card 2 */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Pixelated Action Button</h2>
            <div className={styles.cardContent}>
              <PixelButton>Get Started</PixelButton>
            </div>
          </div>

        </div>
      </div>

      <ProjectShowcase />
      
      <SpeedMarquee />
      
      <WorkingProcess />

      <StickyProjectShowcase />
      
      <ServicesShowcase />
      
      <Testimonials />
      
      <BlogGrid />
      
      <PremiumSlider />
      
      <ExpandableSlider />
      
      <HeroSplitSlider />
      
      <FeatureBlock />
      
      <ReadingContent />

      {/* Extra scrolling space at bottom */}
      <div style={{ height: '30vh', background: '#f8fafc' }} />
    </>
  );
}
