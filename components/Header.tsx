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
          <Link href="#">How It Works</Link>
          <Link href="#">The Role</Link>
          <Link href="#">Pay</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">About</Link>
        </div>
        
        {/* Desktop Button */}
        <div className="nav-actions">
          <button className="btn btn-primary nav-btn-desktop">
            Apply to close <ArrowRight size={18} />
          </button>
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
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>The Role</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>Pay</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <button className="btn btn-primary" style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}>
              Apply to close <ArrowRight size={18} />
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
