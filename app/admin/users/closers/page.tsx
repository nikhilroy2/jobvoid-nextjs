import React from 'react';
import { Mail, Phone, MapPin, Star, ShieldCheck } from 'lucide-react';

const closers = [
  { id: 1, name: 'Michael Chen', role: 'Enterprise Closer', location: 'San Francisco, CA', deals: 142, rating: 4.9, active: true, image: 'https://i.pravatar.cc/150?img=11' },
  { id: 2, name: 'Sarah Jenkins', role: 'SDR Team Lead', location: 'Austin, TX', deals: 89, rating: 4.7, active: true, image: 'https://i.pravatar.cc/150?img=5' },
  { id: 3, name: 'David Rodriguez', role: 'B2B Sales Exec', location: 'Miami, FL', deals: 215, rating: 4.9, active: false, image: 'https://i.pravatar.cc/150?img=12' },
  { id: 4, name: 'Emily Thompson', role: 'Enterprise Closer', location: 'New York, NY', deals: 64, rating: 4.5, active: true, image: 'https://i.pravatar.cc/150?img=9' },
  { id: 5, name: 'Marcus Johnson', role: 'Account Executive', location: 'Chicago, IL', deals: 112, rating: 4.8, active: true, image: 'https://i.pravatar.cc/150?img=15' },
  { id: 6, name: 'Jessica Lee', role: 'SDR Team Lead', location: 'Seattle, WA', deals: 45, rating: 4.4, active: true, image: 'https://i.pravatar.cc/150?img=20' },
];

export default function ClosersPage() {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Active Closers</h1>
          <p className="admin-page-subtitle">View and manage your network of AI sales closers.</p>
        </div>
      </div>

      <div className="admin-card-grid">
        {closers.map(closer => (
          <div key={closer.id} className="admin-user-card hover-card">
            <div className="admin-user-card-header">
              <img src={closer.image} alt={closer.name} className="admin-user-avatar" />
              <div className="admin-user-status">
                <span className={`status-dot ${closer.active ? 'active' : 'inactive'}`}></span>
                {closer.active ? 'Available' : 'On Leave'}
              </div>
            </div>
            
            <div className="admin-user-info">
              <h3 className="admin-user-name">{closer.name} <ShieldCheck size={16} className="verified-icon" /></h3>
              <p className="admin-user-role">{closer.role}</p>
              
              <div className="admin-user-meta">
                <span className="meta-item"><MapPin size={14}/> {closer.location}</span>
              </div>
            </div>
            
            <div className="admin-user-stats">
              <div className="stat-block">
                <span className="stat-value">{closer.deals}</span>
                <span className="stat-label">Deals Closed</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-block">
                <span className="stat-value rating"><Star size={14} fill="#f59e0b" color="#f59e0b" /> {closer.rating}</span>
                <span className="stat-label">Avg Rating</span>
              </div>
            </div>
            
            <div className="admin-user-actions">
              <button className="admin-btn admin-btn-outline"><Mail size={16} /> Message</button>
              <button className="admin-btn admin-btn-primary"><Phone size={16} /> Contact</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
