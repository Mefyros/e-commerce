import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import EmptyCart from './components/Empty/Empty';
import FullCart from './components/Full/Full';
import CartService from '../../Service/CartService';
import { connect } from 'react-redux';
// import { css } from 'emotion';

const mapStateToProps = state => {
  return { products: state.cart };
}

const Panier = ({ products }) => (
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

export default connect(mapStateToProps)(Panier);