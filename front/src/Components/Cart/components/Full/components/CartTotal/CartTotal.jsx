import React from 'react';
import Checkout from '../../../../../Checkout/Stepper_checkout'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {
  Container,
  Title,
  Price,
  CheckoutBtn,
  Quantity,
} from "./style";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state,
})

class CartTotal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checkout: false,
    };
  }

  render() {
    const { cart } = this.props;
    let totalPrice = 0;
    let totalProduct = 0;

    for (let i = 0; i < cart.length; ++i) {
      const { price, quantity } = cart[i];
      totalPrice += price * quantity;
      totalProduct += quantity;
    }

    if (this.state.checkout == false) {
      return (
        <Container>
        <Title>Cart's Total</Title>
        {
          totalPrice > 1 ? (
            <Quantity>{ totalProduct } Products in cart</Quantity>
          ) : (
            <Quantity>{ totalProduct } Product in cart</Quantity>
          )
        }
        <Price>Total: { totalPrice } $</Price>
        <CheckoutBtn onClick={() => this.setState({checkout: true})} href="#">Proceed To Checkout</CheckoutBtn>
        </Container>
      );
    }else {
      return (
        <div>
        <Checkout/>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(CartTotal);
