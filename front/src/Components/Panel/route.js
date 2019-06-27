import React from "react";
import { Home,AccountCircle } from '@material-ui/icons';
import HomePage from './components/Product';
import StockPage from './components/Stock';
import TransporterPage from './components/Transporter';

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
  }
];

export default Routes;