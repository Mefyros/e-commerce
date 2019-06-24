import React from 'react';
import { 
  Container,
  Title,
  Price,
  CheckoutBtn,
  Quantity,
  ColorNumber,
} from "./style";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cart: state.cart,
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
            <Quantity><ColorNumber>{ totalProduct }</ColorNumber> Products in cart</Quantity>
          ) : (
            <Quantity><ColorNumber>{ totalProduct }</ColorNumber> Product in cart</Quantity>
          )
        }
        <Price>{ totalPrice } $</Price>
        <CheckoutBtn href="#">Proceed To Checkout</CheckoutBtn>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(CartTotal);