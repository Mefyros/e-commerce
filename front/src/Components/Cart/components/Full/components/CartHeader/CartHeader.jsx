import React from 'react';
import { 
    Container,
    NameTitle,
    PriceTitle,
    TotalTitle,
    QuantityTitle,
    ActionTitle,
} from "./style";
import { clearCart } from '../../../../../../Redux/Action/CartAction';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    cartItem: state.cart.find(item => item.id === ownProps.id),
  }
}

const mapDispatchToProps = dispatch => ({
  clearCart: payload => dispatch(clearCart(payload)),
});

class CartHeader extends React.Component {

  handleTrashClick = () => {
    this.props.clearCart([]);
  }

  render() {
    return (
      <Container>
        <NameTitle>Product</NameTitle>
        <PriceTitle>Unit Price</PriceTitle>
        <QuantityTitle>Quantity</QuantityTitle>
        <TotalTitle>Sub-Total</TotalTitle>
        <ActionTitle>
          <i className="far fa-trash-alt" onClick={this.handleTrashClick}></i>
        </ActionTitle>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartHeader);