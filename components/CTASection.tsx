import { ArrowRight } from "lucide-react";

export default function CTASection() {
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

        <div className="cta-content">
          <h2 className="cta-title">If you can close, we want to talk.</h2>
          <p className="cta-body">
            We read every application and we move fast on the ones that fit. A strong closer can be approved and dialing inside the same week.
          </p>
          <button className="btn btn-primary" style={{ backgroundColor: '#fff', color: 'var(--accent-hover)' }}>
            Apply to close <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
