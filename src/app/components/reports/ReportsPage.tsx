import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FileText, Calendar, Filter, Download, ChevronDown,
  TrendingUp, Clock, Package, DollarSign, ChevronRight,
  AlertCircle, Search, ArrowUpDown, Tag, ChevronUp
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const ReportsPage = () => {
  const [activeReport, setActiveReport] = useState('inventory');
  const [dateRange, setDateRange] = useState('30');
  const [filterOpen, setFilterOpen] = useState(false);

  // Sample data for reports
  const reports = [
    {
      id: 'inventory',
      name: 'Inventory Valuation Report',
      icon: Package,
      stats: {
        totalValue: '$2,850,000',
        totalCost: '$2,450,000',
        potentialProfit: '$400,000',
        itemCount: 42
      }
    },
    {
      id: 'sales',
      name: 'Purchase & Sales Report',
      icon: DollarSign,
      stats: {
        totalSales: '$850,000',
        totalPurchases: '$720,000',
        netProfit: '$130,000',
        transactions: 24
      }
    },
    {
      id: 'aging',
      name: 'Stock Aging Report',
      icon: Clock,
      stats: {
        avgDays: 45,
        under30: 15,
        under60: 18,
        over90: 9
      }
    },
    {
      id: 'market',
      name: 'Market Comparison Report',
      icon: TrendingUp,
      stats: {
        analyzed: 42,
        underpriced: 8,
        overpriced: 5,
        competitive: 29
      }
    }
  ];

  const getReportContent = () => {
    switch (activeReport) {
      case 'inventory':
        return (
          <div>
            {/* Report Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Total Value</span>
                    <span className="stats-icon">
                      <DollarSign className="text-brand-primary" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[0].stats.totalValue}</h3>
                    <span className="stats-metric">{reports[0].stats.itemCount} watches</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Total Cost</span>
                    <span className="stats-icon">
                      <Tag className="text-brand-primary" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[0].stats.totalCost}</h3>
                    <span className="stats-metric">Investment</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Potential Profit</span>
                    <span className="stats-icon">
                      <TrendingUp className="text-brand-primary" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[0].stats.potentialProfit}</h3>
                    <div className="flex items-center text-accent-success stats-metric">
                      <ChevronUp size={14} className="mr-1" />
                      16.3% margin
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Total Items</span>
                    <span className="stats-icon">
                      <Package className="text-brand-primary" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[0].stats.itemCount}</h3>
                    <span className="stats-metric">In stock</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Inventory Table */}
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="table-modern">
                    <thead>
                      <tr>
                        <th>Watch Details</th>
                        <th>Purchase Cost</th>
                        <th>Market Value</th>
                        <th>Days in Stock</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3].map((item) => (
                        <tr key={item}>
                          <td>
                            <div className="flex items-center">
                              <div className="h-10 w-10 bg-background rounded-lg mr-3"></div>
                              <div>
                                <div className="text-sm font-medium text-text-primary">
                                  Rolex Submariner
                                </div>
                                <div className="text-xs text-text-secondary">
                                  Ref: 126610LN
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-sm font-medium text-text-primary">
                              $15,500
                            </div>
                            <div className="text-xs text-text-secondary">
                              Purchased 30 days ago
                            </div>
                          </td>
                          <td>
                            <div className="text-sm font-medium text-text-primary">
                              $18,500
                            </div>
                            <div className="text-xs text-accent-success">
                              +$3,000 (19.4%)
                            </div>
                          </td>
                          <td>
                            <div className="text-sm text-text-primary">30 days</div>
                          </td>
                          <td>
                            <span className="badge badge-success">
                              In Stock
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'sales':
        return (
          <div>
            {/* Sales Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Total Sales</span>
                    <span className="stats-icon">
                      <DollarSign className="text-brand-primary" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[1].stats.totalSales}</h3>
                    <span className="stats-metric">24 transactions</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Total Purchases</span>
                    <span className="stats-icon">
                      <Tag className="text-brand-primary" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[1].stats.totalPurchases}</h3>
                    <span className="stats-metric">Investment</span>
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
                    <h3 className="stats-value">{reports[1].stats.netProfit}</h3>
                    <div className="flex items-center text-accent-success stats-metric">
                      <ChevronUp size={14} className="mr-1" />
                      15.3% margin
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Transactions</span>
                    <span className="stats-icon">
                      <FileText className="text-brand-primary" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[1].stats.transactions}</h3>
                    <span className="stats-metric">Completed</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sales Table */}
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="table-modern">
                    <thead>
                      <tr>
                        <th>Transaction</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3].map((item) => (
                        <tr key={item}>
                          <td>
                            <div className="text-sm font-medium text-text-primary">
                              #100{item}
                            </div>
                          </td>
                          <td>
                            <div className="text-sm text-text-primary">
                              Jan {item}, 2024
                            </div>
                          </td>
                          <td>
                            <div className="text-sm font-medium text-text-primary">
                              $35,000
                            </div>
                          </td>
                          <td>
                            <div className="text-sm text-text-primary">
                              {item % 2 === 0 ? 'Purchase' : 'Sale'}
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-success">
                              Completed
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'aging':
        return (
          <div>
            {/* Aging Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Average Days</span>
                    <span className="stats-icon">
                      <Clock className="text-brand-primary" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[2].stats.avgDays}</h3>
                    <span className="stats-metric">In inventory</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Under 30 Days</span>
                    <span className="stats-icon bg-accent-success/10">
                      <Package className="text-accent-success" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[2].stats.under30}</h3>
                    <span className="stats-metric">watches</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">30-60 Days</span>
                    <span className="stats-icon bg-accent-warning/10">
                      <Package className="text-accent-warning" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[2].stats.under60}</h3>
                    <span className="stats-metric">watches</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Over 90 Days</span>
                    <span className="stats-icon bg-accent-danger/10">
                      <AlertCircle className="text-accent-danger" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[2].stats.over90}</h3>
                    <span className="stats-metric">Need attention</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Aging Table */}
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="table-modern">
                    <thead>
                      <tr>
                        <th>Watch Details</th>
                        <th>Purchase Date</th>
                        <th>Days in Stock</th>
                        <th>Current Value</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3].map((item) => (
                        <tr key={item}>
                          <td>
                            <div className="flex items-center">
                              <div className="h-10 w-10 bg-background rounded-lg mr-3"></div>
                              <div>
                                <div className="text-sm font-medium text-text-primary">
                                  Patek Philippe Nautilus
                                </div>
                                <div className="text-xs text-text-secondary">
                                  Ref: 5711/1A
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-sm text-text-primary">
                              Jan 15, 2024
                            </div>
                          </td>
                          <td>
                            <div className="text-sm font-medium text-accent-danger">
                              95 days
                            </div>
                          </td>
                          <td>
                            <div className="text-sm font-medium text-text-primary">
                              $85,000
                            </div>
                            <div className="text-xs text-accent-danger">
                              -$2,000 (-2.3%)
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-danger">
                              Price Review Needed
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'market':
        return (
          <div>
            {/* Market Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Analyzed</span>
                    <span className="stats-icon">
                      <Search className="text-brand-primary" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[3].stats.analyzed}</h3>
                    <span className="stats-metric">watches</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Underpriced</span>
                    <span className="stats-icon bg-accent-success/10">
                      <TrendingUp className="text-accent-success" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[3].stats.underpriced}</h3>
                    <span className="stats-metric">Opportunities</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Overpriced</span>
                    <span className="stats-icon bg-accent-danger/10">
                      <AlertCircle className="text-accent-danger" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[3].stats.overpriced}</h3>
                    <span className="stats-metric">Need adjustment</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="stats-card">
                  <div className="card-header">
                    <span className="text-sm text-text-secondary">Competitive</span>
                    <span className="stats-icon">
                      <Tag className="text-brand-primary" size={16} />
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="stats-value">{reports[3].stats.competitive}</h3>
                    <span className="stats-metric">Priced right</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Market Table */}
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="table-modern">
                    <thead>
                      <tr>
                        <th>Watch Details</th>
                        <th>Our Price</th>
                        <th>Market Price</th>
                        <th>Difference</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3].map((item) => (
                        <tr key={item}>
                          <td>
                            <div className="flex items-center">
                              <div className="h-10 w-10 bg-background rounded-lg mr-3"></div>
                              <div>
                                <div className="text-sm font-medium text-text-primary">
                                  Rolex Daytona
                                </div>
                                <div className="text-xs text-text-secondary">
                                  Ref: 116500LN
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-sm font-medium text-text-primary">
                              $45,000
                            </div>
                          </td>
                          <td>
                            <div className="text-sm font-medium text-text-primary">
                              $47,500
                            </div>
                          </td>
                          <td>
                            <div className="text-sm font-medium text-accent-danger">
                              -$2,500
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-warning">
                              Adjust Price
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Reports</h1>
          <p className="text-text-secondary">Monitor and analyze your business performance</p>
        </div>
        <div className="flex space-x-4">
          <button className="btn bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20">
            <Calendar className="mr-2" size={20} />
            Schedule Report
          </button>
          <button className="btn btn-primary">
            <Download className="mr-2" size={20} />
            Export Report
          </button>
        </div>
      </div>

      {/* Report Selection and Filters */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <select 
                className="input-modern w-64"
                value={activeReport}
                onChange={(e) => setActiveReport(e.target.value)}
              >
                {reports.map(report => (
                  <option key={report.id} value={report.id}>
                    {report.name}
                  </option>
                ))}
              </select>
              <button 
                className="px-4 py-2 border border-border rounded-lg hover:bg-background-hover flex items-center text-text-secondary"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <Filter className="mr-2" size={18} />
                Filters
                <ChevronDown className="ml-2" size={16} />
              </button>
            </div>
            <select 
              className="input-modern w-48"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
              <option value="90">Last 90 Days</option>
              <option value="365">This Year</option>
            </select>
          </div>

          {filterOpen && (
            <div className="mt-4 pt-4 border-t border-border grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Brand</label>
                <select className="input-modern w-full">
                  <option>All Brands</option>
                  <option>Rolex</option>
                  <option>Patek Philippe</option>
                  <option>Audemars Piguet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Status</label>
                <select className="input-modern w-full">
                  <option>All Status</option>
                  <option>In Stock</option>
                  <option>Sold</option>
                  <option>Pending</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Price Range</label>
                <select className="input-modern w-full">
                  <option>All Prices</option>
                  <option>Under $10,000</option>
                  <option>$10,000 - $50,000</option>
                  <option>Over $50,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Sort By</label>
                <select className="input-modern w-full">
                  <option>Most Recent</option>
                  <option>Highest Value</option>
                  <option>Days in Stock</option>
                  <option>Profit Margin</option>
                </select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Report Content */}
      <div className="space-y-6">
        {getReportContent()}
      </div>

      {/* Footer - Pagination & Export Options */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-text-secondary">
          Showing 10 of 50 items
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