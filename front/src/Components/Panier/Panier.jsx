import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import EmptyCart from './components/Empty/Empty';
import FullCart from './components/Full/Full';
import CartService from '../../Service/CartService';
// import { css } from 'emotion';

export default class Panier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount = () => {
    const products = CartService.getCartContent();
    
    if (products.length > 0) {
      this.setState({ products });
    }
  }

  render() {
    const { products } = this.state;
    
    return(
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          {
            products.length > 0 ? (
              <FullCart products={products}/>
            ) : (
              <EmptyCart />
            )
          }
        </Container>
      </React.Fragment>
    );
  }
}