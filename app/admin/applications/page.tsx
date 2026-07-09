import React from 'react';
import { MoreVertical, Filter, Search, Download, Plus } from 'lucide-react';

const applications = [
  { id: 'APP-1048', name: 'Michael Chen', role: 'Enterprise Closer', date: 'Oct 24, 2026', status: 'Approved', score: 94 },
  { id: 'APP-1049', name: 'Sarah Jenkins', role: 'SDR Team Lead', date: 'Oct 24, 2026', status: 'Pending Review', score: 88 },
  { id: 'APP-1050', name: 'David Rodriguez', role: 'B2B Sales Exec', date: 'Oct 23, 2026', status: 'Pending Review', score: 76 },
  { id: 'APP-1051', name: 'Emily Thompson', role: 'Enterprise Closer', date: 'Oct 23, 2026', status: 'Rejected', score: 42 },
  { id: 'APP-1052', name: 'Marcus Johnson', role: 'Account Executive', date: 'Oct 22, 2026', status: 'Approved', score: 91 },
  { id: 'APP-1053', name: 'Jessica Lee', role: 'SDR Team Lead', date: 'Oct 22, 2026', status: 'Approved', score: 89 },
];

export default function ApplicationsPage() {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">All Applications</h1>
          <p className="admin-page-subtitle">Manage and review incoming closer applications.</p>
        </div>
        <div className="admin-page-actions">
          <button className="admin-btn admin-btn-secondary">
            <Download size={16} />
            Export
          </button>
          <button className="admin-btn admin-btn-primary">
            <Plus size={16} />
            New Application
          </button>
        </div>
      </div>

      <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
        {/* Table Toolbar */}
        <div className="admin-table-toolbar">
          <div className="admin-search-wrapper">
            <Search size={18} className="admin-search-icon" />
            <input type="text" placeholder="Search applications..." className="admin-search-input" />
          </div>
          <div className="admin-toolbar-actions">
            <button className="admin-icon-btn"><Filter size={18} /></button>
          </div>
        </div>

        {/* Table */}
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>App ID</th>
                <th>Candidate Name</th>
                <th>Desired Role</th>
                <th>Applied Date</th>
                <th>AI Score</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td className="admin-td-id">{app.id}</td>
                  <td className="admin-td-main">{app.name}</td>
                  <td className="admin-td-secondary">{app.role}</td>
                  <td className="admin-td-secondary">{app.date}</td>
                  <td>
                    <div className="admin-score-bar">
                      <div className="admin-score-fill" style={{ width: `${app.score}%`, backgroundColor: app.score > 90 ? '#10b981' : app.score > 70 ? '#3b82f6' : '#ef4444' }}></div>
                      <span className="admin-score-text">{app.score}/100</span>
                    </div>
                  </td>
                  <td>
                    <span className={`admin-badge status-${app.status.replace(' ', '-').toLowerCase()}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="admin-td-actions">
                    <button className="admin-action-btn"><MoreVertical size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="admin-table-pagination">
          <span className="admin-pagination-info">Showing 1 to 6 of 1,248 results</span>
          <div className="admin-pagination-controls">
            <button className="admin-pagination-btn" disabled>Previous</button>
            <button className="admin-pagination-btn active">1</button>
            <button className="admin-pagination-btn">2</button>
            <button className="admin-pagination-btn">3</button>
            <span className="admin-pagination-ellipsis">...</span>
            <button className="admin-pagination-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
