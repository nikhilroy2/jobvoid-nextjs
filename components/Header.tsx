"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import PixelButton from "./PixelButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerState, setHeaderState] = useState<'top' | 'hidden' | 'sticky'>('top');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setHeaderState('top');
      } else if (window.scrollY >= 100 && window.scrollY < 400) {
        setHeaderState('hidden');
      } else {
        setHeaderState('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: headerState === 'top' ? 'absolute' : 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
      transform: headerState === 'hidden' ? 'translateY(-150%)' : 'translateY(0)',
      transition: headerState === 'top' ? 'none' : 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <nav className={`nav-container ${headerState === 'sticky' ? 'scrolled' : ''}`}>
          <Link href="/" className="nav-brand">Jobvoid</Link>

          {/* Desktop Links */}
          <div className="nav-links">
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/the-role">The Role</Link>
            <Link href="/pay">Pay</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/about">About</Link>
          </div>

          {/* Right side: Button + Toggle */}
          <div className="nav-right">
            <div className="nav-actions">
              <PixelButton href="/apply" className="nav-btn-desktop" withArrow color="primary">
                <span className="desktop-text">Apply to close</span>
                <span className="mobile-text">Apply</span>
              </PixelButton>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <Link href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link>
              <Link href="/the-role" onClick={() => setIsMobileMenuOpen(false)}>The Role</Link>
              <Link href="/pay" onClick={() => setIsMobileMenuOpen(false)}>Pay</Link>
              <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
