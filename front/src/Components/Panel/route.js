import React from 'react';
import ProductManagement from './components/ProductManagement';
import StockManagement from './components/StockManagement';
import TransporterManagement from './components/TransporterManagement';
import PromotionManagement from './components/PromotionManagement';

export default [
  {
    label: "Home",
    icon: <i class="fas fa-home"></i>,
    view: ProductManagement,
  },
  {
    label: "Stock",
    icon: <i class="fas fa-boxes"></i>,
    view: StockManagement,
  },
  {
    label: "Delivery",
    icon: <i class="fas fa-truck"></i>,
    view: TransporterManagement,
  },
  {
    label: "Promotion",
    icon: <i class="fas fa-percent"></i>,
    view: PromotionManagement,
  },
]