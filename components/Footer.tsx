import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BriefcaseBusiness size={18} color="var(--accent-color)" /> 
          Jobvoid &middot; Houston, Texas &middot; Closing for AI clients since 2020
        </div>
        <div className="footer-links">
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/the-role">The Role</Link>
          <Link href="/pay">Pay</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/about">About</Link>
          <Link href="/apply">Apply</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
