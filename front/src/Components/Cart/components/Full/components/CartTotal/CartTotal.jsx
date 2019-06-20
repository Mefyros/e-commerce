import React from 'react';
import { css } from 'emotion';
import style, { 
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
  render() {
    const { cart } = this.props;
    let totalPrice = 0;
    let totalProduct = 0;

    for (let i = 0; i < cart.length; ++i) {
      const { price, quantity } = cart[i];
      totalPrice += price * quantity;
      totalProduct += quantity;
    }

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
        <CheckoutBtn href="#">Proceed To Checkout</CheckoutBtn>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(CartTotal);