"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Files, 
  Settings,
  CreditCard,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  User as UserIcon,
  Newspaper,
  MessageSquare,
  LogOut,
  PieChart
} from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    'Applications': true,
    'Users': true
  });

  const toggleMenu = (name: string) => {
    setOpenMenus(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Analytics', href: '/admin/analytics', icon: PieChart },
    {
      name: 'Applications',
      icon: Files,
      subItems: [
        { name: 'All Applications', href: '/admin/applications' },
        { name: 'Review Queue', href: '/admin/applications/review' },
      ]
    },
    {
      name: 'Users',
      icon: Users,
      subItems: [
        { name: 'Closers', href: '/admin/users/closers' },
        { name: 'Clients', href: '/admin/users/clients' },
      ]
    },
    { name: 'Payments', href: '/admin/payments', icon: CreditCard },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        className="admin-mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <Link href="/admin" className="nav-brand" style={{ fontSize: '1rem', color: '#111' }}>
            <span style={{ borderBottom: '2px solid #111', paddingBottom: '2px' }}>AI Closing</span>
          </Link>
        </div>

        <nav className="admin-sidebar-nav">
          {navItems.map((item) => {
            const hasSubItems = !!item.subItems;
            // Check if active (either direct link or a sub-item is active)
            const isActive = pathname === item.href || (hasSubItems && item.subItems?.some(sub => pathname === sub.href));
            const isExpanded = openMenus[item.name];
            const Icon = item.icon;

            return (
              <div key={item.name} className="admin-nav-group">
                {hasSubItems ? (
                  <button 
                    className={`admin-nav-link ${isActive || isExpanded ? 'active' : ''}`}
                    onClick={() => toggleMenu(item.name)}
                  >
                    <div className="admin-nav-link-left">
                      <Icon size={20} className="admin-nav-icon" />
                      <span>{item.name}</span>
                    </div>
                    {isExpanded ? (
                      <div className="admin-nav-chevron-active"><ChevronDown size={14} /></div>
                    ) : (
                      <div className="admin-nav-chevron"><ChevronRight size={14} /></div>
                    )}
                  </button>
                ) : (
                  <Link 
                    href={item.href!}
                    className={`admin-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="admin-nav-link-left">
                      <Icon size={20} className="admin-nav-icon" />
                      <span>{item.name}</span>
                    </div>
                    <div className="admin-nav-chevron"><ChevronRight size={14} /></div>
                  </Link>
                )}

                {/* Sub Items */}
                {hasSubItems && isExpanded && (
                  <div className="admin-subnav">
                    {item.subItems.map((sub) => (
                      <Link 
                        key={sub.name}
                        href={sub.href}
                        className={`admin-subnav-link ${pathname === sub.href ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="admin-subnav-dash">-</span>
                        <span>{sub.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="admin-sidebar-footer" style={{ position: 'relative' }}>
          
          {isProfileOpen && (
            <div className="admin-profile-dropdown">
              <div className="admin-profile-dropdown-header">
                <img src="https://i.pravatar.cc/150?img=47" alt="Admin" className="admin-avatar" />
                <div className="admin-profile-info">
                  <span className="admin-profile-name">Administrator</span>
                  <span className="admin-profile-email">admin@taxi.pvrtechstu...</span>
                </div>
              </div>
              
              <div className="admin-profile-divider"></div>
              
              <div className="admin-profile-menu">
                <button className="admin-profile-item">
                  <UserIcon size={18} />
                  <span>Profile</span>
                </button>
                <button className="admin-profile-item">
                  <Settings size={18} />
                  <span>Settings</span>
                </button>
                <button className="admin-profile-item">
                  <Newspaper size={18} />
                  <span>What's New</span>
                </button>
                <button className="admin-profile-item">
                  <MessageSquare size={18} />
                  <span>Feedback</span>
                </button>
              </div>
              
              <div className="admin-profile-divider"></div>
              
              <div className="admin-profile-menu">
                <button className="admin-profile-item">
                  <LogOut size={18} />
                  <span>Sign out</span>
                </button>
              </div>
            </div>
          )}

          <div className="admin-profile-box" onClick={() => setIsProfileOpen(!isProfileOpen)}>
            <img src="https://i.pravatar.cc/150?img=47" alt="Admin" className="admin-avatar" />
            <div className="admin-profile-info">
              <span className="admin-profile-name">Administrator</span>
              <span className="admin-profile-email">admin@taxi.pvrtechstu...</span>
            </div>
            {isProfileOpen ? <ChevronDown size={16} className="admin-profile-chevron" /> : <ChevronUp size={16} className="admin-profile-chevron" />}
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="admin-mobile-overlay" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}
