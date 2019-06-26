import { Home, ContentPaste, Notifications, AccountCircle } from '@material-ui/icons';
import HomePage from './components/Product';
import StockPage from './components/Stock';

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
  }
];

export default Routes;