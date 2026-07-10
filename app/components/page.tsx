import AttachButton from '@/components/AttachButton';
import PixelButton from '@/components/PixelButton';
import ExpandableProcess from '@/components/ExpandableProcess';
import SideBySideFeatures from '@/components/SideBySideFeatures';
import { Search, PenTool, Monitor, MessageSquare, Network, BrainCircuit } from 'lucide-react';
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
            <div className={styles.cardContent} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <PixelButton color="primary">Primary</PixelButton>
              <PixelButton color="danger">Danger</PixelButton>
              <PixelButton color="success">Success</PixelButton>
              <PixelButton color="dark">Dark</PixelButton>
              <PixelButton color="gradient">Gradient</PixelButton>
              <PixelButton color="light">Light</PixelButton>
            </div>
          </div>

        </div>
      </div>

      {/* New Expandable Process Showcase */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ffffff', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8b5cf6' }}></div>
              <span style={{ color: '#0f172a', fontWeight: 600 }}>Process</span>
            </span>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '24px', color: '#0f172a' }}>
              For Your<br />Next Projects
            </h2>
          </div>
          <ExpandableProcess 
            items={[
              {
                id: 'discover',
                number: '01.',
                title: <>Discover<br/>& Define</>,
                description: 'We start by understanding your brand, audience, and goals. Through research and workshops, we define a clear direction that guides every creative decision.',
                icon: <Search size={20} color="#8b5cf6" />
              },
              {
                id: 'design',
                number: '02.',
                title: <>Design<br/>& Develop</>,
                description: 'Our design team brings your vision to life with pixel-perfect precision. We develop scalable solutions that look great and perform flawlessly across all devices.',
                icon: <PenTool size={20} color="#ec4899" />
              },
              {
                id: 'deliver',
                number: '03.',
                title: <>Deliver<br/>& Elevate</>,
                description: 'We ensure a smooth launch and provide ongoing support. Our goal is to elevate your digital presence and help you achieve sustained growth.',
                icon: <Monitor size={20} color="#3b82f6" />
              }
            ]} 
          />
        </div>
      </section>

      {/* Side By Side Features Showcase */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <SideBySideFeatures 
            eyebrow="services"
            heading={<>Driving business innovation through advanced neural network solutions</>}
            items={[
              {
                id: 1,
                title: "Smart Chatbots and Virtual Assistants",
                description: "Integrating neural network models into existing systems or software applications, enabling businesses to leverage AI capabilities seamlessly.",
                icon: <MessageSquare size={32} color="#3b82f6" />
              },
              {
                id: 2,
                title: "Supply Chain Optimization",
                description: "Custom design and development of neural network architectures tailored to specific business needs and objectives.",
                icon: <Network size={32} color="#3b82f6" />
              },
              {
                id: 3,
                title: "AI Training and Support",
                description: "Expert guidance and consulting services to help businesses understand the potential of neural networks, identify use cases, and develop strategies for implementation.",
                icon: <BrainCircuit size={32} color="#3b82f6" />
              }
            ]}
          />
        </div>
      </section>

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
