import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PixelButton from "./PixelButton";

interface CTASectionProps {
  headline?: string;
  body?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  headline = "If you can close, we want to talk.",
  body = "We read every application and we move fast on the ones that fit. A strong closer can be approved and dialing inside the same week.",
  buttonText = "Apply to close",
  buttonHref = "/apply"
}: CTASectionProps) {
  return (
    <div className="container">
      <section className="cta-section">
        {/* Background 3D Shapes */}
        <div className="cta-shapes">
          {/* Pillar 1 */}
          <div className="pillar" style={{ left: '15%', top: '40%' }}>
            <div className="pillar-main"></div>
            <div className="pillar-side"></div>
            <div className="pillar-cap"></div>
          </div>
          {/* Pillar 2 */}
          <div className="pillar" style={{ left: '45%', top: '20%', width: '120px' }}>
            <div className="pillar-main"></div>
            <div className="pillar-side" style={{ width: '60px' }}></div>
            <div className="pillar-cap" style={{ height: '60px' }}></div>
          </div>
          {/* Pillar 3 */}
          <div className="pillar" style={{ left: '75%', top: '60%', width: '80px' }}>
            <div className="pillar-main"></div>
            <div className="pillar-side" style={{ width: '30px' }}></div>
            <div className="pillar-cap" style={{ height: '30px' }}></div>
          </div>
          {/* Pillar 4 (Background depth) */}
          <div className="pillar" style={{ left: '-5%', top: '10%', width: '150px', opacity: 0.5 }}>
            <div className="pillar-main"></div>
            <div className="pillar-side" style={{ width: '80px' }}></div>
            <div className="pillar-cap" style={{ height: '80px' }}></div>
          </div>
          {/* Pillar 5 */}
          <div className="pillar" style={{ left: '100%', top: '-30%', width: '200px', opacity: 0.7 }}>
            <div className="pillar-main"></div>
            <div className="pillar-side" style={{ width: '100px' }}></div>
            <div className="pillar-cap" style={{ height: '100px' }}></div>
          </div>
        </div>

        {/* Dark overlay specifically requested by user */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}></div>

        <div className="cta-content" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="cta-title">{headline}</h2>
          {body && (
            <p className="cta-body">
              {body}
            </p>
          )}
          {/* Button using PixelButton */}
          <PixelButton href={buttonHref} withArrow color="gradient">
            {buttonText}
          </PixelButton>
        </div>
      </section>
    </div>
  );
}
