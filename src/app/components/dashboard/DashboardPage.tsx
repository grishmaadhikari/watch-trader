"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell 
} from 'recharts';
import { 
  TrendingUp, Package, DollarSign, Clock, ArrowUpRight,
  ArrowDownRight, AlertCircle, FileText, Filter, ChevronDown,
  Calendar, Bell, Search, CircleDollarSign, Tag, ChevronUp,
  ShoppingBag, ArrowRight, Percent, MoreHorizontal, Plus
} from 'lucide-react';

// Chart colors
const chartColors = {
  primary: '#3B82F6',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  purple: '#8B5CF6',
  gray: '#64748B',
  background: '#FFFFFF',
  border: 'rgba(226, 232, 240, 0.8)',
};

// Interfaces for type safety
interface WatchSummary {
  id: string;
  brand: string;
  model: string;
  reference: string;
  purchasePrice: number;
  purchaseDate: string;
  marketPrice: number;
  marketTrend: 'up' | 'down' | 'stable';
  status: 'In Stock' | 'Reserved' | 'Pending';
  daysInStock: number;
  image: string;
}

interface PriceAlert {
  type: 'opportunity' | 'alert';
  watch: string;
  message: string;
  difference: string;
  time: string;
}

interface CompetitorData {
  platform: string;
  avgPrice: number;
  difference: string;
  listings: number;
}

interface StockAgingRange {
  range: string;
  count: number;
  color: string;
}

export const DashboardPage = () => {
  const [dateRange, setDateRange] = useState('30');

  // Inventory stats
  const inventoryStats = {
    totalValue: 2450000,
    activeListings: 25,
    avgDaysInStock: 45,
    lowStockAlert: 3,
    pendingDeals: 5,
    totalWatches: 28,
    stockStatus: {
      inStock: 18,
      pending: 7,
      reserved: 3
    },
    stockAging: {
      under30: 12,
      under60: 8,
      under90: 5,
      over90: 3
    }
  };

  // Financial stats
  const financialStats = {
    monthlyRevenue: 385000,
    monthlyProfit: 72000,
    avgMargin: 18.7,
    pendingRevenue: 145000,
    revenueGrowth: 12.5,
    profitGrowth: 15.2,
    expenseTotal: 12500
  };

  // Market insights
  const marketStats = {
    priceAlerts: 4,
    marketTrends: "Upward",
    competitorPrices: 8,
    opportunityAlerts: 3
  };

  // Sample data for charts
  const monthlyData = [
    { month: 'Jan', revenue: 320000, profit: 58000, sales: 4, expenses: 8500 },
    { month: 'Feb', revenue: 355000, profit: 65000, sales: 5, expenses: 9200 },
    { month: 'Mar', revenue: 385000, profit: 72000, sales: 6, expenses: 12500 },
  ];

  // Brand distribution data
  const brandData = [
    { name: 'Rolex', value: 45 },
    { name: 'Patek Philippe', value: 25 },
    { name: 'AP', value: 20 },
    { name: 'Others', value: 10 }
  ];

  const BRAND_COLORS = ['#10B981', '#3B82F6', '#6366F1', '#9CA3AF'];

  return (
    <div className="space-y-8 p-8 animate-fade-in">
      {/* Header Stats */}
      <div className="grid grid-cols-4 gap-6">
        {/* Total Inventory Value */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-text-secondary">Total Inventory Value</span>
              <div className="p-2 bg-brand-primary/10 rounded-lg">
                <CircleDollarSign className="text-brand-primary" size={20} />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-bold">
                ${inventoryStats.totalValue.toLocaleString()}
              </h3>
              <span className="flex items-center text-accent-success font-medium">
                <ChevronUp size={16} className="mr-0.5" />
                8.2%
              </span>
            </div>
            <div className="mt-2 text-sm text-text-secondary">
              {inventoryStats.totalWatches} watches in total
            </div>
          </CardContent>
        </Card>

        {/* Monthly Revenue */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-text-secondary">Monthly Revenue</span>
              <div className="p-2 bg-brand-primary/10 rounded-lg">
                <TrendingUp className="text-brand-primary" size={20} />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-bold">
                ${financialStats.monthlyRevenue.toLocaleString()}
              </h3>
              <span className="flex items-center text-accent-success font-medium">
                <ChevronUp size={16} className="mr-0.5" />
                {financialStats.revenueGrowth}%
              </span>
            </div>
            <div className="mt-2 text-sm text-text-secondary">
              vs last month
            </div>
          </CardContent>
        </Card>

        {/* Active Listings */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-text-secondary">Active Listings</span>
              <div className="p-2 bg-brand-primary/10 rounded-lg">
                <Package className="text-brand-primary" size={20} />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-bold">
                {inventoryStats.activeListings}
              </h3>
              <span className="flex items-center text-accent-success font-medium">
                <ChevronUp size={16} className="mr-0.5" />
                4.5%
              </span>
            </div>
            <div className="mt-2 text-sm text-text-secondary">
              {inventoryStats.pendingDeals} pending deals
            </div>
          </CardContent>
        </Card>

        {/* Average Days in Stock */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-text-secondary">Avg. Days in Stock</span>
              <div className="p-2 bg-brand-primary/10 rounded-lg">
                <Clock className="text-brand-primary" size={20} />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-bold">
                {inventoryStats.avgDaysInStock}
              </h3>
              <span className="flex items-center text-accent-success font-medium">
                <ChevronUp size={16} className="mr-0.5" />
                2.1%
              </span>
            </div>
            <div className="mt-2 text-sm text-text-secondary">
              {inventoryStats.lowStockAlert} low stock alerts
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Revenue & Profit Trend</CardTitle>
              <select 
                className="input-modern"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="30">Last 30 Days</option>
                <option value="90">Last 90 Days</option>
                <option value="180">Last 180 Days</option>
                <option value="365">Last Year</option>
              </select>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.border} />
                <XAxis dataKey="month" stroke={chartColors.gray} />
                <YAxis stroke={chartColors.gray} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: chartColors.background,
                    border: `1px solid ${chartColors.border}`,
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke={chartColors.primary} 
                  strokeWidth={2}
                  dot={{ fill: chartColors.primary }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke={chartColors.success}
                  strokeWidth={2}
                  dot={{ fill: chartColors.success }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Distribution Chart */}
        <Card>
          <CardHeader className="border-b border-border">
            <CardTitle className="text-lg font-semibold">Inventory Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={brandData}
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {brandData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={BRAND_COLORS[index % BRAND_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Section */}
      <Card>
        <CardHeader className="border-b border-border">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
            <button className="btn btn-secondary">
              View All
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="table-modern">
              <thead>
                <tr>
                  <th>Watch Details</th>
                  <th>Purchase Info</th>
                  <th>Market Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 'W001',
                    brand: 'Rolex',
                    model: 'Submariner',
                    reference: '126610LN',
                    purchasePrice: 15000,
                    purchaseDate: '2024-01-15',
                    marketPrice: 18500,
                    marketTrend: 'up',
                    status: 'In Stock',
                    daysInStock: 15,
                    image: '/watch1.jpg'
                  },
                  {
                    id: 'W002',
                    brand: 'Patek Philippe',
                    model: 'Nautilus',
                    reference: '5711/1A',
                    purchasePrice: 135000,
                    purchaseDate: '2024-01-20',
                    marketPrice: 148000,
                    marketTrend: 'stable',
                    status: 'Reserved',
                    daysInStock: 45,
                    image: '/watch2.jpg'
                  },
                ].map((watch) => (
                  <tr key={watch.id}>
                    <td>
                      <div className="flex items-center">
                        <div className="h-16 w-16 bg-background rounded-lg mr-4"></div>
                        <div>
                          <div className="text-sm font-medium text-text-primary">
                            {watch.brand} {watch.model}
                          </div>
                          <div className="text-sm text-text-secondary">
                            Ref: {watch.reference}
                          </div>
                          <div className="text-xs text-text-muted">
                            ID: {watch.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-sm">
                        <div className="font-medium text-text-primary">
                          ${watch.purchasePrice.toLocaleString()}
                        </div>
                        <div className="text-text-secondary">
                          {watch.purchaseDate}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-sm">
                        <div className="font-medium text-text-primary">
                          ${watch.marketPrice.toLocaleString()}
                        </div>
                        <div className={`flex items-center text-sm ${
                          watch.marketTrend === 'up' ? 'text-accent-success' : 
                          watch.marketTrend === 'down' ? 'text-accent-danger' : 
                          'text-text-secondary'
                        }`}>
                          {watch.marketTrend === 'up' && <ChevronUp size={14} className="mr-1" />}
                          {watch.marketTrend === 'down' && <ChevronDown size={14} className="mr-1" />}
                          {watch.marketTrend === 'up' ? '+8.5%' : 
                           watch.marketTrend === 'down' ? '-3.2%' : 
                           'Stable'}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className={`badge ${
                          watch.status === 'In Stock' ? 'badge-success' :
                          watch.status === 'Reserved' ? 'badge-warning' :
                          watch.status === 'Pending' ? 'badge-danger' :
                          'badge-secondary'
                        }`}>
                          {watch.status}
                        </span>
                        <div className="text-xs text-text-muted mt-1">
                          {watch.daysInStock} days in stock
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-end space-x-2">
                        <button 
                          className="btn btn-icon" 
                          title="Market Analysis"
                        >
                          <TrendingUp size={18} />
                        </button>
                        <button 
                          className="btn btn-icon" 
                          title="Edit Details"
                        >
                          <FileText size={18} />
                        </button>
                        <button 
                          className="btn btn-icon" 
                          title="More Options"
                        >
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Market Overview Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Price Alerts */}
        <Card>
          <CardHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Price Alerts</CardTitle>
              <button className="btn btn-icon">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: 'opportunity',
                  watch: 'Rolex Daytona',
                  message: 'Price below market average',
                  difference: '-12%',
                  time: '2h ago'
                },
                {
                  type: 'alert',
                  watch: 'AP Royal Oak',
                  message: 'Significant price increase',
                  difference: '+8%',
                  time: '5h ago'
                }
              ].map((alert, index) => (
                <div key={index} className="flex items-start p-3 rounded-lg bg-background-hover">
                  <div className={`stats-icon mr-3 ${
                    alert.type === 'opportunity' ? 'bg-accent-success/10' : 'bg-accent-warning/10'
                  }`}>
                    {alert.type === 'opportunity' ? 
                      <TrendingUp size={16} className="text-accent-success" /> :
                      <AlertCircle size={16} className="text-accent-warning" />
                    }
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text-primary">{alert.watch}</p>
                    <p className="text-sm text-text-secondary">{alert.message}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className={`badge ${
                        alert.difference.startsWith('+') ? 'badge-success' : 'badge-danger'
                      }`}>
                        {alert.difference}
                      </span>
                      <span className="text-xs text-text-muted">{alert.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Competitor Analysis */}
        <Card>
          <CardHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Competitor Analysis</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  platform: 'Chrono24',
                  avgPrice: 18750,
                  difference: '+2.5%',
                  listings: 15
                },
                {
                  platform: 'eBay',
                  avgPrice: 17800,
                  difference: '-1.8%',
                  listings: 23
                }
              ].map((competitor, index) => (
                <div key={index} className="flex items-center justify-between p-3">
                  <div>
                    <p className="text-sm font-medium text-text-primary">{competitor.platform}</p>
                    <p className="text-sm text-text-secondary">{competitor.listings} active listings</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-text-primary">
                      ${competitor.avgPrice.toLocaleString()}
                    </p>
                    <span className={`text-sm font-medium ${
                      competitor.difference.startsWith('+') ? 'text-accent-success' : 'text-accent-danger'
                    }`}>
                      {competitor.difference} vs avg
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stock Aging Analysis */}
        <Card>
          <CardHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Stock Aging Analysis</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { range: '< 30 days', count: 12, color: 'badge-success' },
                { range: '30-60 days', count: 8, color: 'badge-warning' },
                { range: '60-90 days', count: 5, color: 'badge-danger' },
                { range: '> 90 days', count: 3, color: 'badge-secondary' }
              ].map((range, index) => (
                <div key={index} className="flex items-center justify-between p-2">
                  <span className={`badge ${range.color}`}>
                    {range.range}
                  </span>
                  <span className="text-sm font-medium text-text-primary">
                    {range.count} watches
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;