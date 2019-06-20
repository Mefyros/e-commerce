import React from 'react';
import style, { 
    Container,
    NameTitle,
    PriceTitle,
    TotalTitle,
    QuantityTitle,
    ActionTitle,
} from "./style";
import { css } from 'emotion';
// import CartService from '../../../../../../Service/CartService';


export default class CartHeader extends React.Component {

  handleTrashClick = () => {
    // CartService.clearCart();
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