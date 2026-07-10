import React from 'react';
import { CheckCircle2 } from "lucide-react";
import PixelButton from "./PixelButton";
import UnderlineSVG from "./UnderlineSVG";

interface HeroProps {
  titleNode?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  trustText?: string;
  showActions?: boolean;
  showTrust?: boolean;
  showShapes?: boolean;
  paddingTop?: string;
  subtitleMaxWidth?: string;
}

export default function Hero({
  titleNode = (
    <h1 className="hero-title">
      <span className="hero-title-text">Close </span>
      <span style={{ position: 'relative', display: 'inline-block', zIndex: 1, whiteSpace: 'nowrap' }}>
        <span className="hero-title-text" style={{ position: 'relative', zIndex: 2 }}>B2B deals.</span>
        <UnderlineSVG style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '14px', zIndex: -1 }} />
      </span>{' '}
      <span className="hero-title-text">Get paid every Friday. Work on your terms.</span>
    </h1>
  ),
  subtitle = (
    <>Jobvoid places <span className="text-highlight">aggressive closers</span> with AI companies that already have the product, the budget, and the demand. We hand you the <span className="text-bold">leads, the script, and a dialer account</span>. You bring the close.</>
  ),
  primaryButtonText = "Start Closing",
  primaryButtonHref = "/",
  secondaryButtonText = "How the pay works",
  secondaryButtonHref = "/pay",
  trustText = "Closing for AI clients since 2020. Based in Houston, Texas.",
  showActions = true,
  showTrust = true,
  showShapes = false,
  paddingTop = '140px',
  subtitleMaxWidth = '750px'
}: HeroProps) {
  return (
    <section className="hero" style={{ paddingTop, position: 'relative' }}>
      <div className="hero-bg-shape">
        <svg
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroShapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <path fill="url(#heroShapeGrad)">
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="
                M0 0 L1200 0 L1100 150 Q1000 300 900 225 Q800 150 700 225 Q600 300 500 225 Q400 150 300 225 Q200 300 100 150 L0 0 Z;
                M0 0 L1200 0 L1120 180 Q1020 250 920 210 Q820 180 720 240 Q620 280 520 220 Q420 180 320 230 Q220 280 120 180 L0 0 Z;
                M0 0 L1200 0 L1100 150 Q1000 300 900 225 Q800 150 700 225 Q600 300 500 225 Q400 150 300 225 Q200 300 100 150 L0 0 Z
              "
            />
          </path>
        </svg>
      </div>
      {showShapes && (
        <div className="hero-shapes">
          <div className="shape shape-circle-1"></div>
          <div className="shape shape-circle-2"></div>
          <div className="shape shape-circle-3"></div>
          <div className="shape shape-pill shape-pill-1"></div>
          <div className="shape shape-pill shape-pill-2"></div>
        </div>
      )}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {titleNode}

        <p className="hero-subtitle" style={{ maxWidth: subtitleMaxWidth }}>
          {subtitle}
        </p>

        {showActions && (
          <div className="hero-actions">
            <PixelButton href={primaryButtonHref} color="primary">
              {primaryButtonText}
            </PixelButton>
            <PixelButton href={secondaryButtonHref} variant="outline">
              {secondaryButtonText}
            </PixelButton>
          </div>
        )}

        {showTrust && (
          <div className="hero-trust" style={{ marginTop: '24px' }}>
            <CheckCircle2 size={16} className="text-accent" color="var(--accent-color)" />
            {trustText}
          </div>
        )}
      </div>
    </section>
  );
}
