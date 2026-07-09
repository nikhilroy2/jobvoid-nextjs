"use client";

import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const monthlyData = [
  { name: 'Jan', applications: 400, hired: 240 },
  { name: 'Feb', applications: 300, hired: 139 },
  { name: 'Mar', applications: 200, hired: 98 },
  { name: 'Apr', applications: 278, hired: 190 },
  { name: 'May', applications: 189, hired: 48 },
  { name: 'Jun', applications: 239, hired: 138 },
  { name: 'Jul', applications: 349, hired: 230 },
];

const trafficData = [
  { name: 'Organic Search', value: 400 },
  { name: 'Social Media', value: 300 },
  { name: 'Referral', value: 300 },
  { name: 'Direct', value: 200 },
];

const COLORS = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b'];

export default function AnalyticsPage() {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Analytics Dashboard</h1>
          <p className="admin-page-subtitle">Deep dive into your platform's metrics and conversion rates.</p>
        </div>
      </div>

      <div className="admin-charts-grid">
        {/* Bar Chart */}
        <div className="admin-card">
          <h3 className="chart-title">Applications vs Hires (YTD)</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                <Legend iconType="circle" />
                <Bar dataKey="applications" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Total Applications" />
                <Bar dataKey="hired" fill="#10b981" radius={[4, 4, 0, 0]} name="Closers Hired" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="admin-card">
          <h3 className="chart-title">Traffic Sources</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {trafficData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                <Legend iconType="circle" layout="vertical" verticalAlign="middle" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
