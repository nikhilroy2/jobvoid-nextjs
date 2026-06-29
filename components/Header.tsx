"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="container">
      <nav className="nav-container">
        <div className="nav-brand">Jobvoid</div>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/the-role">The Role</Link>
          <Link href="/pay">Pay</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/about">About</Link>
        </div>
        
        {/* Desktop Button */}
        <div className="nav-actions">
          <Link href="/apply" className="btn btn-primary nav-btn-desktop">
            Apply to close <ArrowRight size={18} />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <Link href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link>
            <Link href="/the-role" onClick={() => setIsMobileMenuOpen(false)}>The Role</Link>
            <Link href="/pay" onClick={() => setIsMobileMenuOpen(false)}>Pay</Link>
            <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/apply" className="btn btn-primary" style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}>
              Apply to close <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
