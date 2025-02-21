import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, AlertCircle, Search, Filter, 
  ChevronDown, DollarSign, ArrowUpRight, ArrowDownRight,
  Clock, Package, Bell, ChevronUp, ExternalLink,
  FileDown, Download, History, Settings
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const MarketAnalysisPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedWatch, setSelectedWatch] = useState(null);

  // Sample market data
  const marketStats = {
    totalWatches: 42,
    underpriced: 8,
    overpriced: 5,
    priceAlerts: 12,
    avgMargin: 15.8
  };

  // Sample price trends data
  const priceTrends = [
    { date: 'Jan', market: 18500, our: 18000 },
    { date: 'Feb', market: 19200, our: 18500 },
    { date: 'Mar', market: 19000, our: 18800 },
    { date: 'Apr', market: 19500, our: 19000 },
  ];

  // Sample competitor listings
  const competitorListings = [
    {
      id: 1,
      watch: {
        brand: 'Rolex',
        model: 'Submariner',
        reference: '126610LN'
      },
      ourPrice: 18500,
      marketLow: 18000,
      marketHigh: 19500,
      marketAvg: 18800,
      sources: ['Chrono24', 'eBay', 'Grailzee'],
      trend: 'up',
      trendValue: 2.5
    },
    // Add more listings...
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Market Analysis</h1>
          <p className="text-text-secondary">Track market trends and optimize pricing</p>
        </div>
        <div className="flex space-x-4">
          <button className="btn bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20">
            <Bell className="mr-2" size={20} />
            Price Alerts ({marketStats.priceAlerts})
          </button>
          <button className="btn btn-primary">
            <TrendingUp className="mr-2" size={20} />
            Update Market Data
          </button>
        </div>
      </div>

      {/* Market Overview Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary">Tracked Watches</span>
              <Package className="text-brand-primary" size={16} />
            </div>
            <h3 className="text-2xl font-bold mt-2">{marketStats.totalWatches}</h3>
            <span className="text-sm text-text-secondary">Active tracking</span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary">Underpriced Items</span>
              <ArrowDownRight className="text-accent-success" size={16} />
            </div>
            <h3 className="text-2xl font-bold mt-2">{marketStats.underpriced}</h3>
            <span className="text-sm text-text-secondary">Below market avg</span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary">Overpriced Items</span>
              <ArrowUpRight className="text-accent-danger" size={16} />
            </div>
            <h3 className="text-2xl font-bold mt-2">{marketStats.overpriced}</h3>
            <span className="text-sm text-text-secondary">Above market avg</span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary">Average Margin</span>
              <TrendingUp className="text-brand-primary" size={16} />
            </div>
            <h3 className="text-2xl font-bold mt-2">{marketStats.avgMargin}%</h3>
            <div className="flex items-center text-accent-success text-sm">
              <ChevronUp size={14} className="mr-1" />
              2.3% vs market
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search watches..."
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
            <select className="input-modern w-48">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>This Year</option>
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
                <label className="block text-sm font-medium text-text-secondary mb-1">Price Range</label>
                <select className="input-modern w-full">
                  <option>All Prices</option>
                  <option>Under $10,000</option>
                  <option>$10,000 - $50,000</option>
                  <option>Over $50,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Market Status</label>
                <select className="input-modern w-full">
                  <option>All Status</option>
                  <option>Underpriced</option>
                  <option>Overpriced</option>
                  <option>Market Match</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Data Source</label>
                <select className="input-modern w-full">
                  <option>All Sources</option>
                  <option>Chrono24</option>
                  <option>eBay</option>
                  <option>Grailzee</option>
                </select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Market Analysis Content */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-6">Price Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priceTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="date" stroke="#9B6B9E" />
                <YAxis stroke="#9B6B9E" />
                <Tooltip />
                <Line type="monotone" dataKey="market" name="Market Avg" stroke="#9B6B9E" strokeWidth={2} />
                <Line type="monotone" dataKey="our" name="Our Price" stroke="#D4A5A5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-6">Price Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[
                { range: '0-10k', count: 5 },
                { range: '10-20k', count: 12 },
                { range: '20-30k', count: 8 },
                { range: '30k+', count: 4 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="range" stroke="#9B6B9E" />
                <YAxis stroke="#9B6B9E" />
                <Tooltip />
                <Bar dataKey="count" fill="#9B6B9E" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Market Comparison Table */}
      <Card>
        <CardContent className="p-0">
          <table className="table-modern">
            <thead>
              <tr>
                <th>Watch Details</th>
                <th>Our Price</th>
                <th>Market Range</th>
                <th>Sources</th>
                <th>Trend</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {competitorListings.map((listing) => (
                <tr key={listing.id}>
                  <td>
                    <div className="flex items-center">
                      <div className="h-12 w-12 bg-background rounded-lg mr-3"></div>
                      <div>
                        <div className="text-sm font-medium text-text-primary">
                          {listing.watch.brand} {listing.watch.model}
                        </div>
                        <div className="text-xs text-text-secondary">
                          Ref: {listing.watch.reference}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-sm font-medium text-text-primary">
                      ${listing.ourPrice.toLocaleString()}
                    </div>
                  </td>
                  <td>
                    <div className="text-sm">
                      <div className="font-medium text-text-primary">
                        ${listing.marketLow.toLocaleString()} - ${listing.marketHigh.toLocaleString()}
                      </div>
                      <div className="text-xs text-text-secondary">
                        Avg: ${listing.marketAvg.toLocaleString()}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex space-x-1">
                      {listing.sources.map((source) => (
                        <span 
                          key={source}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-brand-primary/10 text-brand-primary"
                        >
                          {source}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div className={`flex items-center text-sm ${
                      listing.trend === 'up' ? 'text-accent-success' : 'text-accent-danger'
                    }`}>
                      {listing.trend === 'up' ? (
                        <ChevronUp size={16} className="mr-1" />
                      ) : (
                        <ChevronDown size={16} className="mr-1" />
                      )}
                      {listing.trendValue}%
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-end space-x-2">
                      <button className="btn bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 text-sm">
                        View Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Price Alerts Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Recent Price Alerts</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((alert) => (
            <Card key={alert}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-accent-warning/10">
                      <AlertCircle className="text-accent-warning" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-text-primary">
                        Price Drop Alert: Rolex Daytona
                      </h4>
                      <p className="text-xs text-text-secondary mt-1">
                        Average market price dropped by 5% in the last 24 hours
                      </p>
                    </div>
                  </div>
                  <button className="text-brand-primary hover:text-brand-primary/80 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Competitor Analysis Section */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Top Marketplace Analysis</h3>
            <div className="space-y-4">
              {[
                { name: 'Chrono24', active: 156, avgPrice: 22500, trend: 'up', trendValue: 3.2 },
                { name: 'eBay', active: 98, avgPrice: 21800, trend: 'down', trendValue: 1.8 },
                { name: 'Grailzee', active: 45, avgPrice: 22100, trend: 'up', trendValue: 2.4 }
              ].map((marketplace) => (
                <div key={marketplace.name} className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-text-primary">{marketplace.name}</div>
                    <div className="text-xs text-text-secondary mt-1">
                      {marketplace.active} active listings
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-text-primary">
                      ${marketplace.avgPrice.toLocaleString()}
                    </div>
                    <div className={`text-xs flex items-center justify-end mt-1 ${
                      marketplace.trend === 'up' ? 'text-accent-success' : 'text-accent-danger'
                    }`}>
                      {marketplace.trend === 'up' ? (
                        <ChevronUp size={14} className="mr-1" />
                      ) : (
                        <ChevronDown size={14} className="mr-1" />
                      )}
                      {marketplace.trendValue}% vs avg
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Brand Performance</h3>
            <div className="space-y-4">
              {[
                { brand: 'Rolex', avgTurnover: 18, margin: 15.5, trend: 'up' },
                { brand: 'Patek Philippe', avgTurnover: 25, margin: 12.8, trend: 'down' },
                { brand: 'Audemars Piguet', avgTurnover: 22, margin: 14.2, trend: 'up' }
              ].map((brand) => (
                <div key={brand.brand} className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-text-primary">{brand.brand}</div>
                    <div className="text-xs text-text-secondary mt-1">
                      {brand.avgTurnover} days avg. turnover
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-text-primary">
                      {brand.margin}% margin
                    </div>
                    <div className={`text-xs flex items-center justify-end mt-1 ${
                      brand.trend === 'up' ? 'text-accent-success' : 'text-accent-danger'
                    }`}>
                      {brand.trend === 'up' ? (
                        <ChevronUp size={14} className="mr-1" />
                      ) : (
                        <ChevronDown size={14} className="mr-1" />
                      )}
                      vs. last month
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Market Opportunities */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Market Opportunities</h3>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              title: 'Undervalued Watches',
              description: 'Watches priced significantly below market average',
              count: 8,
              type: 'success'
            },
            {
              title: 'Fast Moving Models',
              description: 'Models with high demand and quick turnover',
              count: 12,
              type: 'primary'
            },
            {
              title: 'Price Adjustment Needed',
              description: 'Watches requiring price updates based on market',
              count: 5,
              type: 'warning'
            }
          ].map((opportunity) => (
            <Card key={opportunity.title}>
              <CardContent className="p-6">
                <div className={`p-2 w-10 h-10 rounded-lg mb-4 flex items-center justify-center ${
                  opportunity.type === 'success' ? 'bg-accent-success/10 text-accent-success' :
                  opportunity.type === 'primary' ? 'bg-brand-primary/10 text-brand-primary' :
                  'bg-accent-warning/10 text-accent-warning'
                }`}>
                  <TrendingUp size={20} />
                </div>
                <h4 className="text-lg font-medium text-text-primary">{opportunity.title}</h4>
                <p className="text-sm text-text-secondary mt-2">{opportunity.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-text-primary">{opportunity.count}</span>
                  <button className="text-brand-primary hover:text-brand-primary/80 text-sm font-medium">
                    View All
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Market Insights */}
      <div className="mt-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Market Insights</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Price Trend Alert',
                  message: 'Rolex Submariner prices showing upward trend across all marketplaces',
                  type: 'info',
                  time: '2 hours ago'
                },
                {
                  title: 'New Market Opportunity',
                  message: 'Patek Philippe Nautilus listings below market average on Chrono24',
                  type: 'success',
                  time: '4 hours ago'
                },
                {
                  title: 'Competitor Alert',
                  message: 'Significant price drops detected for Audemars Piguet Royal Oak models',
                  type: 'warning',
                  time: '6 hours ago'
                }
              ].map((insight, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-background rounded-lg">
                  <div className={`p-2 rounded-full ${
                    insight.type === 'info' ? 'bg-brand-primary/10 text-brand-primary' :
                    insight.type === 'success' ? 'bg-accent-success/10 text-accent-success' :
                    'bg-accent-warning/10 text-accent-warning'
                  }`}>
                    <AlertCircle size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-text-primary">{insight.title}</h4>
                    <p className="text-sm text-text-secondary mt-1">{insight.message}</p>
                    <div className="flex items-center mt-2 text-xs text-text-muted">
                      <Clock size={12} className="mr-1" />
                      {insight.time}
                    </div>
                  </div>
                  <button className="text-brand-primary hover:text-brand-primary/80 text-sm font-medium">
                    Details
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-text-secondary">
          Showing 10 of 42 watches
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