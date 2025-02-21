export interface WatchItem {
  watchId: string;
  stockNumber: string;
  brand: string;
  model: string;
  referenceNumber: string;
  purchasePrice: number;
  expenses: {
    shipping: number;
    repairs: number;
    serviceCosts: number;
    total: number;
  };
  totalCost: number;
  sellingPrice: number;
  profit: number;
  profitMargin: number;
  datePurchased: string;
  dateSold: string | null;
  daysInStock: number;
  status: 'In Stock' | 'Pending' | 'Sold';
  sellerInfo: {
    name: string;
    location: string;
    type: string;
  };
  buyerInfo: null | {
    name: string;
    location: string;
    type: string;
  };
  marketplace: string;
  condition: string;
  papers: string;
  serviceHistory: Array<{
    date: string;
    type: string;
    cost: number;
    provider: string;
  }>;
  details: {
    box: boolean;
    papers: boolean;
    warranty: boolean;
    warrantyDate: string;
  };
} 