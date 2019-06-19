import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { css } from 'emotion';
import style, { 
  Container,
  Title,
  Price,
  CheckoutBtn,
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
    }
  }

  componentDidMount = () => {
    const { cart } = this.props;
    let totalPrice = 0;

    for (let i = 0; i < cart.length; ++i) {
      const { price, quantity } = cart[i];
      totalPrice += price * quantity;
    }

    this.setState({ totalPrice });
  }

  render() {

    return (
      <Container>
        <Title>Basket's Total</Title>
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