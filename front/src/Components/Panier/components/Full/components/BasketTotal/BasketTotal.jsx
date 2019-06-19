import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { css } from 'emotion';
import style, { 
  
} from "./style";

export default class FullCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products
    }
  }

  render() {

    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardBody>
            <MDBCardTitle>Basket's SubTotal</MDBCardTitle>
            <MDBCardText>
              <h1>
                $500
              </h1>

            </MDBCardText>
            <MDBBtn href="#">Proceed To Checkout</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}
