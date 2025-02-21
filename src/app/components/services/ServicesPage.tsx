import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wrench, Plus, Search, Filter, ChevronDown,
  Clock, DollarSign, Tag, AlertCircle, CheckCircle,
  Package, Calendar, ChevronRight, MoreHorizontal,
  ArrowUpRight, Settings
} from 'lucide-react';

export const ServicesPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Sample service data
  const services = [{
    id: 'S001',
    watch: {
      brand: 'Rolex',
      model: 'Submariner',
      reference: '126610LN',
      image: '/watch1.jpg'
    },
    type: 'Full Service',
    provider: 'Luxury Watch Service Center',
    cost: 1200,
    status: 'In Progress',
    startDate: '2024-02-01',
    estimatedCompletion: '2024-02-20',
    urgency: 'Normal',
    progress: 65,
    documents: ['Service Quote', 'Inspection Report']
  }];

  // Service statistics
  const stats = {
    activeServices: 5,
    completedThisMonth: 8,
    totalSpent: 12500,
    averageTime: 14,
    upcomingServices: 3
  };

  const getStatusBadge = (status: string): string => {
    const badges: Record<string, string> = {
      'Completed': 'badge-success',
      'In Progress': 'badge-warning',
      'Pending': 'badge-warning',
      'Cancelled': 'badge-danger'
    };
    return badges[status] || 'badge-secondary';
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Service & Repairs</h1>
          <p className="text-text-secondary">Track watch maintenance and repair status</p>
        </div>
        <div className="flex space-x-4">
          <button className="btn bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20">
            <Calendar className="mr-2" size={20} />
            Schedule Service
          </button>
          <button className="btn btn-primary">
            <Plus className="mr-2" size={20} />
            New Service Request
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="stats-card">
            <div className="card-header">
              <span className="text-sm text-text-secondary">Active Services</span>
              <span className="stats-icon">
                <Wrench className="text-brand-primary" size={16} />
              </span>
            </div>
            <div className="card-content">
              <h3 className="stats-value">{stats.activeServices}</h3>
              <span className="stats-metric">In progress</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="stats-card">
            <div className="card-header">
              <span className="text-sm text-text-secondary">Completed Services</span>
              <span className="stats-icon">
                <CheckCircle className="text-brand-primary" size={16} />
              </span>
            </div>
            <div className="card-content">
              <h3 className="stats-value">{stats.completedThisMonth}</h3>
              <span className="stats-metric">This month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="stats-card">
            <div className="card-header">
              <span className="text-sm text-text-secondary">Total Service Costs</span>
              <span className="stats-icon">
                <DollarSign className="text-brand-primary" size={16} />
              </span>
            </div>
            <div className="card-content">
              <h3 className="stats-value">${stats.totalSpent.toLocaleString()}</h3>
              <span className="stats-metric">MTD spent</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="stats-card">
            <div className="card-header">
              <span className="text-sm text-text-secondary">Avg Service Time</span>
              <span className="stats-icon">
                <Clock className="text-brand-primary" size={16} />
              </span>
            </div>
            <div className="card-content">
              <h3 className="stats-value">{stats.averageTime} days</h3>
              <span className="stats-metric">Turn around</span>
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
                  placeholder="Search services..."
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
            <select className="input-modern py-2">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>This Year</option>
            </select>
          </div>

          {filterOpen && (
            <div className="mt-4 pt-4 border-t border-border grid grid-cols-4 gap-4">
              {['Service Type', 'Status', 'Service Provider', 'Cost Range'].map((filter) => (
                <div key={filter}>
                  <label className="block text-sm font-medium text-text-secondary mb-1">{filter}</label>
                  <select className="input-modern w-full py-2">
                    <option>All {filter}</option>
                  </select>
                </div>
              ))}
            </div>
          )}

          {/* Service Status Tabs */}
          <div className="flex space-x-6 mt-6">
            {['All Services', 'In Progress', 'Pending', 'Completed'].map((tab) => (
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

      {/* Services List */}
      <div className="space-y-4">
        {services.map((service) => (
          <Card key={service.id}>
            <CardContent className="p-6">
              <div className="flex justify-between">
                <div className="flex space-x-6">
                  {/* Watch Details */}
                  <div className="flex items-start space-x-4">
                    <div className="h-24 w-24 bg-background rounded-lg"></div>
                    <div>
                      <h3 className="text-lg font-medium text-text-primary">
                        {service.watch.brand} {service.watch.model}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        Ref: {service.watch.reference}
                      </p>
                      <div className="mt-2 flex items-center space-x-4">
                        <span className={`badge ${getStatusBadge(service.status)}`}>
                          {service.status}
                        </span>
                        <span className="text-xs font-medium text-brand-primary">
                          {service.urgency} Priority
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="flex-1 ml-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-text-secondary">Service Type</p>
                        <p className="text-sm font-medium text-text-primary">{service.type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">Provider</p>
                        <p className="text-sm font-medium text-text-primary">{service.provider}</p>
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">Cost</p>
                        <p className="text-sm font-medium text-text-primary">
                          ${service.cost.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">Start Date</p>
                        <p className="text-sm font-medium text-text-primary">{service.startDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">Est. Completion</p>
                        <p className="text-sm font-medium text-text-primary">
                          {service.estimatedCompletion}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">Documents</p>
                        <p className="text-sm font-medium text-text-primary">
                          {service.documents.length} files
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {service.status === 'In Progress' && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-text-secondary">Progress</span>
                          <span className="text-sm font-medium text-text-primary">
                            {service.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-background rounded-full h-2">
                          <div 
                            className="bg-brand-primary h-2 rounded-full" 
                            style={{ width: `${service.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-start space-x-2">
                  <button className="p-2 hover:bg-background rounded-lg text-text-secondary">
                    <Settings className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-background rounded-lg text-text-secondary">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};