"use client"

import React, { useState } from 'react';
import { 
  Bell, Settings, User, Search, Plus, Filter, DollarSign, 
  Package, Clock, Tag, Truck, Wrench, MoreHorizontal, 
  FileText, History, ChevronUp, ChevronDown, Calendar,
  ShoppingBag, Wallet, TrendingUp, CircleDollarSign,
  ClipboardCheck, Box
} from 'lucide-react';
import { InventoryPage } from './components/inventory/InventoryPage';
import { TransactionsPage } from './components/transactions/TransactionsPage';
import { ServicesPage } from './components/services/ServicesPage';
import { DashboardPage } from './components/dashboard/DashboardPage';
import { ReportsPage } from './components/reports/ReportsPage';
import { MarketAnalysisPage } from './components/market/MarketAnalysisPage';

const WatchTradingPlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Function to render the active tab content
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage />;
      case 'inventory':
        return <InventoryPage />;
      case 'transactions':
        return <TransactionsPage />;
      case 'services':
        return <ServicesPage />;
      case 'market':
        return <MarketAnalysisPage />;
      case 'reports':
        return <ReportsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-border z-50">
        <div className="px-6 mx-auto">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="flex items-center text-xl font-semibold text-brand-primary">
                <Box className="inline-block mr-2 text-brand-primary" size={28} />
                WatchTrader Pro
              </span>
            </div>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative w-96">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 bg-background border border-border rounded-lg
                  text-text-primary placeholder:text-text-muted
                  focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                />
                <Search className="absolute left-3 top-2.5 text-text-muted" size={18} />
              </div>
              <button className="btn btn-primary">
                <Plus size={18} />
                Add Watch
              </button>
              {/* Notifications */}
              <button className="relative p-2 text-text-secondary hover:bg-background rounded-lg">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-danger rounded-full"></span>
              </button>

              {/* User Menu */}
              <div className="relative">
                <button className="flex items-center space-x-3 p-1.5 hover:bg-background rounded-lg group">
                  <div className="w-8 h-8 bg-accent-primary/10 text-accent-primary rounded-lg 
                    flex items-center justify-center font-medium group-hover:bg-accent-primary/20">
                    JD
                  </div>
                  <ChevronDown size={16} className="text-text-secondary" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex space-x-1 py-2">
            {[
              { label: 'Dashboard', icon: <Package size={18} />, tab: 'dashboard' },
              { label: 'Inventory', icon: <Package size={18} />, tab: 'inventory', count: 25 },
              { label: 'Transactions', icon: <DollarSign size={18} />, tab: 'transactions', count: 12 },
              { label: 'Services', icon: <Wrench size={18} />, tab: 'services', count: 3 },
              { label: 'Market Analysis', icon: <TrendingUp size={18} />, tab: 'market' },
              { label: 'Reports', icon: <FileText size={18} />, tab: 'reports', count: 5 }
            ].map((item) => (
              <button 
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeTab === item.tab 
                    ? 'bg-brand-primary/10 text-brand-primary font-medium' 
                    : 'text-text-secondary hover:bg-background hover:text-text-primary'
                }`}
              >
                <span className="w-5">{item.icon}</span>
                <span className="ml-2">{item.label}</span>
                {item.count && (
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    activeTab === item.tab
                      ? 'bg-brand-primary/20 text-brand-primary'
                      : 'bg-background text-text-secondary'
                  }`}>
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content - Adjusted for horizontal nav */}
      <main className="pt-28"> {/* Increased padding-top to account for both header rows */}
        <div className="max-w-7xl mx-auto p-8">
          {renderActiveTabContent()}
        </div>
      </main>
    </div>
  );
};

export default WatchTradingPlatform;