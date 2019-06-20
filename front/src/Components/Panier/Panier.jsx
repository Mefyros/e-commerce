import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import EmptyCart from './components/Empty/Empty';
import FullCart from './components/Full/Full';
import CartService from '../../Service/CartService';
import { connect } from 'react-redux';
// import { css } from 'emotion';

const mapStateToProps = state => ({
  cart: state.cart,
});

// const mapDispatchToProps = dispatch => ({
//   addToCart: (payload) => dispatch(addToCart(payload)),
// });

class Panier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cart,
    }
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevProps.cart !== this.props.cart) {
      console.log(prevProps.cart);
      console.log(this.props.cart);
      // this.setState({  });
    }
  }

  render() {
    const { cart } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          {
            cart.length > 0 ? (
              <FullCart products={cart}/>
            ) : (
              <EmptyCart />
            )
          }
        </Container>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Panier);