import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowUpRight, ArrowDownRight, Filter, Search, 
  ChevronDown, Calendar, DollarSign, Tag,
  Clock, Package, Wallet, FileText, AlertCircle,
  ChevronUp, TrendingUp, Building, ShoppingBag
} from 'lucide-react';

export const TransactionsPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Sample transactions data
  const transactions = [
    {
      id: 'T001',
      type: 'sale',
      watch: {
        brand: 'Rolex',
        model: 'Submariner',
        reference: '126610LN',
        image: '/watch1.jpg'
      },
      amount: 18500,
      profit: 3000,
      profitPercentage: 19.35,
      date: '2024-02-15',
      buyer: 'John Smith',
      marketplace: 'Direct',
      status: 'Completed',
      paymentMethod: 'Wire Transfer'
    }
  ];

  // Transaction stats
  const stats = {
    totalSales: 185000,
    totalPurchases: 320000,
    totalProfit: 42000,
    averageMargin: 18.5,
    pendingTransactions: 3,
    monthlyGrowth: 12.5
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Transactions</h1>
          <p className="text-text-secondary">Track all purchases, sales, and expenses</p>
        </div>
        <div className="flex space-x-4">
          <button className="btn bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20">
            <FileText className="mr-2" size={20} />
            Export
          </button>
          <button className="btn bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20">
            <ArrowDownRight className="mr-2" size={20} />
            Record Purchase
          </button>
          <button className="btn btn-primary">
            <ArrowUpRight className="mr-2" size={20} />
            Record Sale
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="stats-card">
            <div className="card-header">
              <span className="text-sm text-text-secondary">Total Sales</span>
              <span className="stats-icon">
                <DollarSign className="text-brand-primary" size={16} />
              </span>
            </div>
            <div className="card-content">
              <h3 className="stats-value">${stats.totalSales.toLocaleString()}</h3>
              <div className="flex items-center text-accent-success stats-metric">
                <ChevronUp size={14} className="mr-1" />
                {stats.monthlyGrowth}% growth
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="stats-card">
            <div className="card-header">
              <span className="text-sm text-text-secondary">Total Purchases</span>
              <span className="stats-icon">
                <ShoppingBag className="text-brand-primary" size={16} />
              </span>
            </div>
            <div className="card-content">
              <h3 className="stats-value">${stats.totalPurchases.toLocaleString()}</h3>
              <span className="stats-metric">This month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="stats-card">
            <div className="card-header">
              <span className="text-sm text-text-secondary">Net Profit</span>
              <span className="stats-icon">
                <TrendingUp className="text-brand-primary" size={16} />
              </span>
            </div>
            <div className="card-content">
              <h3 className="stats-value">${stats.totalProfit.toLocaleString()}</h3>
              <span className="stats-metric">{stats.averageMargin}% margin</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="stats-card">
            <div className="card-header">
              <span className="text-sm text-text-secondary">Pending Transactions</span>
              <span className="stats-icon">
                <AlertCircle className="text-brand-primary" size={16} />
              </span>
            </div>
            <div className="card-content">
              <h3 className="stats-value">{stats.pendingTransactions}</h3>
              <span className="stats-metric">Needs attention</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="input-modern pl-10 w-64"
                />
                <Search className="absolute left-3 top-2.5 text-text-muted" size={20} />
              </div>
              <button 
                className="px-4 py-2 border border-border rounded-lg hover:bg-background-hover flex items-center text-text-secondary"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <Filter className="mr-2" size={18} />
                Filters
                <ChevronDown className="ml-2" size={16} />
              </button>
            </div>
            <button className="flex items-center px-3 py-2 border border-border rounded-lg hover:bg-background-hover text-text-secondary">
              <Calendar className="mr-2" size={16} />
              <span>Last 30 Days</span>
            </button>
          </div>

          {filterOpen && (
            <div className="mt-4 pt-4 border-t border-border grid grid-cols-4 gap-4">
              {['Transaction Type', 'Status', 'Marketplace', 'Amount Range'].map((filter) => (
                <div key={filter}>
                  <label className="block text-sm font-medium text-text-secondary mb-1">{filter}</label>
                  <select className="input-modern w-full py-2">
                    <option>All {filter}</option>
                  </select>
                </div>
              ))}
            </div>
          )}

          {/* Transaction Type Tabs */}
          <div className="flex space-x-6 mt-6">
            {['All Transactions', 'Sales', 'Purchases', 'Expenses'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`pb-2 px-1 text-sm font-medium border-b-2 ${
                  activeTab === tab.toLowerCase()
                    ? 'border-brand-primary text-brand-primary' 
                    : 'border-transparent text-text-secondary hover:text-text-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="table-modern">
              <thead>
                <tr>
                  <th>Transaction</th>
                  <th>Watch Details</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-brand-primary/10 mr-3">
                          <ArrowUpRight className="text-brand-primary" size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-text-primary">
                            Sale to {transaction.buyer}
                          </div>
                          <div className="text-xs text-text-secondary">
                            {transaction.marketplace}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-lg bg-background mr-3"></div>
                        <div>
                          <div className="text-sm font-medium text-text-primary">
                            {transaction.watch.brand} {transaction.watch.model}
                          </div>
                          <div className="text-xs text-text-secondary">
                            Ref: {transaction.watch.reference}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-sm font-medium text-text-primary">
                        ${transaction.amount.toLocaleString()}
                      </div>
                      <div className="text-xs text-accent-success">
                        +${transaction.profit.toLocaleString()} ({transaction.profitPercentage}%)
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-success">
                        {transaction.status}
                      </span>
                    </td>
                    <td>
                      <div className="text-sm text-text-primary">{transaction.date}</div>
                      <div className="text-xs text-text-secondary">{transaction.paymentMethod}</div>
                    </td>
                    <td className="text-right">
                      <button className="text-brand-primary hover:text-brand-primary/80 text-sm font-medium">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-text-secondary">
          Showing 1 to 10 of 50 transactions
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-border rounded-lg hover:bg-background-hover text-sm text-text-primary">
            Previous
          </button>
          <button className="px-4 py-2 border border-border rounded-lg hover:bg-background-hover text-sm text-text-primary">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};