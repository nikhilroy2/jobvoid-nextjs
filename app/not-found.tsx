import Link from "next/link";
import { SearchX, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <main>
      <div className="hero-wrapper" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        
        <section className="hero" style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <div className="hero-shapes">
            <div className="shape shape-circle-1"></div>
            <div className="shape shape-circle-2"></div>
            <div className="shape shape-circle-3"></div>
            <div className="shape shape-pill shape-pill-1"></div>
            <div className="shape shape-pill shape-pill-2"></div>
          </div>
          
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px', color: 'var(--accent-color)' }}>
              <SearchX size={64} />
            </div>
            <h1 className="hero-title" style={{ fontSize: '3rem' }}>404. Nothing here.</h1>
            <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
              The page you are looking for does not exist or has been moved. 
              Let's get you back to the parts that matter.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/" className="btn btn-primary">
                Return home <ArrowRight size={18} />
              </Link>
              <Link href="/apply" className="btn btn-outline" style={{ background: 'rgba(255,255,255,0.1)' }}>
                Apply to close
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
