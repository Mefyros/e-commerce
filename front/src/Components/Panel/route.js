import React from "react";
import { Home,AccountCircle } from '@material-ui/icons';
import ProductManagement from './components/ProductManagement';
import StockManagement from './components/StockManagement';
import TransporterManagement from './components/TransporterManagement';
import PromotionManagement from './components/PromotionManagement';

const Routes = [
  {
    path: '/panel/product',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: Home,
    component: ProductManagement,
  },
  {
    path: '/panel/stock',
    sidebarName: 'Stock',
    navbarName: 'Stock',
    icon: AccountCircle,
    component: StockManagement,
  },
  {
    path: '/panel/transporter',
    sidebarName: 'Transporter',
    navbarName: 'Transporter',
    icon:  AccountCircle,
    component: TransporterManagement,
  },
  {
    path: '/panel/promotion',
    sidebarName: 'Promotion',
    navbarName: 'Promotion',
    icon:  AccountCircle,
    component: PromotionManagement,
  }
];

export default Routes;