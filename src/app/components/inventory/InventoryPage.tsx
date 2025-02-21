import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Package, Edit, Trash2, Filter, Plus, Search, 
  ArrowUpDown, ChevronDown, Clock, DollarSign, Tag,
  TrendingUp, ShoppingBag, Wallet, AlertCircle
} from 'lucide-react';

export const InventoryPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Sample inventory data
  const inventoryData = [{
    id: 'W001',
    stockNumber: 'STK001',
    brand: 'Rolex',
    model: 'Submariner',
    reference: '126610LN',
    purchasePrice: 15000,
    expenses: 500,
    totalCost: 15500,
    sellingPrice: 18500,
    profit: 3000,
    profitMargin: 19.35,
    datePurchased: '2024-01-15',
    status: 'In Stock',
    daysInStock: 15,
    seller: 'Dealer Network',
    marketPlace: 'Direct'
  }];

  // Inventory statistics
  const stats = {
    totalValue: 2850000,
    totalWatches: 42,
    averageValue: 67857,
    pendingArrivals: 5,
    monthlyGrowth: 12.5
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Inventory Management</h1>
          <p className="text-text-secondary">Manage your watch collection and track performance</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="stats-card">
            <div className="card-header">
              <span className="text-sm text-text-secondary">Total Inventory Value</span>
              <span className="stats-icon">
                <DollarSign className="text-brand-primary" size={16} />
              </span>
            </div>
            <div className="card-content">
              <h3 className="stats-value">${stats.totalValue.toLocaleString()}</h3>
              <div className="flex items-center text-accent-success stats-metric">
                <TrendingUp size={14} className="mr-1" />
                {stats.monthlyGrowth}% growth
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="stats-card">
            <div className="card-header">
              <span className="text-sm text-text-secondary">Total Watches</span>
              <span className="stats-icon">
                <ShoppingBag className="text-brand-primary" size={16} />
              </span>
            </div>
            <div className="card-content">
              <h3 className="stats-value">{stats.totalWatches}</h3>
              <span className="stats-metric">In collection</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="stats-card">
            <div className="card-header">
              <span className="text-sm text-text-secondary">Average Value</span>
              <span className="stats-icon">
                <Wallet className="text-brand-primary" size={16} />
              </span>
            </div>
            <div className="card-content">
              <h3 className="stats-value">${stats.averageValue.toLocaleString()}</h3>
              <span className="stats-metric">Per watch</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="stats-card">
            <div className="card-header">
              <span className="text-sm text-text-secondary">Pending Arrivals</span>
              <span className="stats-icon">
                <AlertCircle className="text-brand-primary" size={16} />
              </span>
            </div>
            <div className="card-content">
              <h3 className="stats-value">{stats.pendingArrivals}</h3>
              <span className="stats-metric">Expected soon</span>
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
                  placeholder="Search inventory..."
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
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <span>Sort by:</span>
              <select className="input-modern py-2">
                <option>Days in Stock</option>
                <option>Purchase Date</option>
                <option>Price</option>
              </select>
            </div>
          </div>
          
          {filterOpen && (
            <div className="mt-4 pt-4 border-t border-border grid grid-cols-4 gap-4">
              {['Brand', 'Status', 'Price Range', 'Days in Stock'].map((filter) => (
                <div key={filter}>
                  <label className="block text-sm font-medium text-text-secondary mb-1">{filter}</label>
                  <select className="input-modern w-full py-2">
                    <option>All {filter}</option>
                  </select>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Inventory Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="table-modern">
              <thead>
                <tr>
                  <th>Watch Details</th>
                  <th>Purchase Info</th>
                  <th>Pricing</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="flex items-start">
                        <div className="h-20 w-20 bg-background rounded-lg mr-4"></div>
                        <div>
                          <div className="text-sm font-medium text-text-primary">{item.brand}</div>
                          <div className="text-sm text-text-secondary">{item.model}</div>
                          <div className="text-xs text-text-muted">Ref: {item.reference}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-sm text-text-primary">
                        <div className="flex items-center">
                          <Tag size={16} className="mr-1 text-brand-primary" />
                          ${item.purchasePrice.toLocaleString()}
                        </div>
                        <div className="flex items-center text-text-secondary">
                          <Clock size={16} className="mr-1" />
                          {item.datePurchased}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-sm">
                        <div className="font-medium text-text-primary">
                          ${item.sellingPrice.toLocaleString()}
                        </div>
                        <div className="text-accent-success">
                          +${item.profit.toLocaleString()} ({item.profitMargin}%)
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-success">
                        {item.status}
                      </span>
                      <div className="text-sm text-text-secondary mt-1">
                        {item.daysInStock} days
                      </div>
                    </td>
                    <td>
                      <div className="flex space-x-2">
                        <button className="p-2 hover:bg-background rounded-lg text-text-secondary">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 hover:bg-background rounded-lg text-text-secondary">
                          <Trash2 size={18} />
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

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-text-secondary">
          Showing 1 to 10 of 50 items
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