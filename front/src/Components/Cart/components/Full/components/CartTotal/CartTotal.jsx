import React from 'react';
import Checkout from '../../../../../Checkout/StepperCheckout'
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

    if (this.state.checkout === false) {
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
          <CheckoutBtn onClick={() => this.setState({checkout: true})}>Proceed To Checkout</CheckoutBtn>
        </Container>
      );
    } else {
      return (
        <div>
          <Checkout/>
        </div>
      );
    }
    
  }
}

export default connect(mapStateToProps)(CartTotal);