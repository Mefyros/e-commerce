import React from "react";
import { Home,AccountCircle } from '@material-ui/icons';
import HomePage from './components/Product';
import StockPage from './components/Stock';
import TransporterPage from './components/Transporter';
import PromotionPage from './components/Promotion';

const Routes = [
  {
    path: '/panel/product',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: Home,
    component: HomePage
  },
  {
    path: '/panel/stock',
    sidebarName: 'Stock',
    navbarName: 'Stock',
    icon: AccountCircle,
    component: StockPage
  },
  {
    path: '/panel/transporter',
    sidebarName: 'Transporter',
    navbarName: 'Transporter',
    icon:  AccountCircle,
    component: TransporterPage
  },
  {
    path: '/panel/promotion',
    sidebarName: 'Promotion',
    navbarName: 'Promotion',
    icon:  AccountCircle,
    component: PromotionPage
  }
];

export default Routes;