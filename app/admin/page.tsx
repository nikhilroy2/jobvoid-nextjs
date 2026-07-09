"use client";

import React from 'react';
import { Users, FileText, DollarSign, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 5000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 8900 },
  { name: 'Sat', revenue: 2390 },
  { name: 'Sun', revenue: 3490 },
];

export default function AdminDashboard() {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Dashboard Overview</h1>
          <p className="admin-page-subtitle">Welcome back! Here's what's happening today.</p>
        </div>
      </div>

      <div className="admin-stats-grid">
        {/* Stat Card 1 */}
        <div className="hover-card admin-stat-card">
          <div className="stat-icon-box" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
            <FileText size={24} />
          </div>
          <div>
            <div className="stat-label">Total Applications</div>
            <div className="stat-value">1,248</div>
            <div className="stat-trend positive">+12% this week</div>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="hover-card admin-stat-card">
          <div className="stat-icon-box" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
            <Users size={24} />
          </div>
          <div>
            <div className="stat-label">Active Closers</div>
            <div className="stat-value">84</div>
            <div className="stat-trend positive">+3 new today</div>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="hover-card admin-stat-card">
          <div className="stat-icon-box" style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899' }}>
            <DollarSign size={24} />
          </div>
          <div>
            <div className="stat-label">Monthly Revenue</div>
            <div className="stat-value">$42,500</div>
            <div className="stat-trend positive">+8% vs last month</div>
          </div>
        </div>
        
        {/* Stat Card 4 */}
        <div className="hover-card admin-stat-card">
          <div className="stat-icon-box" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
            <TrendingUp size={24} />
          </div>
          <div>
            <div className="stat-label">Avg Conversion</div>
            <div className="stat-value">14.2%</div>
            <div className="stat-trend negative">-1.2% this week</div>
          </div>
        </div>
      </div>
      
      {/* Revenue Chart Section */}
      <div className="admin-section" style={{ marginTop: '48px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', color: '#111' }}>Revenue Overview</h2>
        <div className="admin-card" style={{ height: '400px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
              <Tooltip 
                contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                formatter={(value: number) => [`$${value}`, 'Revenue']}
              />
              <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={3} dot={{r: 4, strokeWidth: 2}} activeDot={{r: 6}} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
