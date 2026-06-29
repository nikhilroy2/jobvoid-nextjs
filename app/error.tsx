"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production
    console.error("Runtime error caught by boundary:", error);
  }, [error]);

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
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px', color: '#ef4444' }}>
              <AlertTriangle size={64} />
            </div>
            <h1 className="hero-title" style={{ fontSize: '3rem' }}>Something went wrong.</h1>
            <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
              An unexpected error occurred. You can try loading the page again, or head back to the homepage.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={() => reset()} className="btn btn-primary">
                Try again <RotateCcw size={18} />
              </button>
              <Link href="/" className="btn btn-outline" style={{ background: 'rgba(255,255,255,0.1)' }}>
                Return home <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
