import React from 'react';
import { css } from 'emotion';
import style, { 
  Container,
  BasketContent,
} from "./style";
import BasketHeader from './CartHeader/CartHeader';
import BasketItem from './CartItem/CartItem';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cart: state.cart,
});

class CartMenu extends React.Component {
  render() {
    const { cart } = this.props;
    
    return (
      <Container>
        <BasketHeader />
        <BasketContent>
          {
            cart.map((item, key) => <BasketItem key={key} cartItem={item} index={key}/>)
          }
        </BasketContent>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(CartMenu);