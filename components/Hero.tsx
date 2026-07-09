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
  secondaryButtonText = "See how the pay works",
  secondaryButtonHref = "/pay",
  trustText = "Closing for AI clients since 2020. Based in Houston, Texas.",
  showActions = true,
  showTrust = true,
  showShapes = false,
  paddingTop = '140px',
  subtitleMaxWidth = '750px'
}: HeroProps) {
  return (
    <section className="hero" style={{ paddingTop }}>
      {showShapes && (
        <div className="hero-shapes">
          <div className="shape shape-circle-1"></div>
          <div className="shape shape-circle-2"></div>
          <div className="shape shape-circle-3"></div>
          <div className="shape shape-pill shape-pill-1"></div>
          <div className="shape shape-pill shape-pill-2"></div>
        </div>
      )}
      <div className="container">
        {titleNode}
        
        <p className="hero-subtitle" style={{ maxWidth: subtitleMaxWidth, margin: '0 auto 40px' }}>
          {subtitle}
        </p>
        
        {showActions && (
          <div className="hero-actions">
            <PixelButton href={primaryButtonHref}>
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
