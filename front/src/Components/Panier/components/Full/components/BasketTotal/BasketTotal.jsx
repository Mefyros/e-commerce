import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
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

class FullCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      totalProduct: 0,
    }
  }

  componentDidMount = () => {
    const { cart } = this.props;
    let totalPrice = 0;
    let totalProduct = 0;

    for (let i = 0; i < cart.length; ++i) {
      const { price, quantity } = cart[i];
      totalPrice += price * quantity;
      ++totalProduct;
    }

    this.setState({ totalPrice, totalProduct });
  }

  render() {

    return (
      <Container>
        <Title>Basket's Total</Title>
        {
          this.state.totalPrice > 1 ? (
            <Quantity>{ this.state.totalProduct } Products in basket</Quantity>
          ) : (
            <Quantity>{ this.state.totalProduct } Product in basket</Quantity>
          )
        }
        <Price>Total: { this.state.totalPrice } $</Price>
        <CheckoutBtn href="#">Proceed To Checkout</CheckoutBtn>
      </Container>
      // <MDBCol>
      //   <MDBCard style={{ width: "22rem" }}>
      //     <MDBCardBody>
      //       <MDBCardTitle>Basket's SubTotal</MDBCardTitle>
      //       <MDBCardText>
      //         <h1>
      //           $500
      //         </h1>

      //       </MDBCardText>
      //       <MDBBtn href="#">Proceed To Checkout</MDBBtn>
      //     </MDBCardBody>
      //   </MDBCard>
      // </MDBCol>
    );
  }
}

export default connect(mapStateToProps)(FullCard);