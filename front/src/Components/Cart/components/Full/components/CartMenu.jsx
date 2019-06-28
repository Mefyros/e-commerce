import React from 'react';
import { 
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
            cart.map((item, key) => <BasketItem key={key} id={item.id} inputDisable={this.props.inputDisable}/>)
          }
        </BasketContent>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(CartMenu);