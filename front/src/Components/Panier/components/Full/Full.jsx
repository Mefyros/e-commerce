import React from 'react';
import BasketCard from './components/card';
import Container from '@material-ui/core/Container';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {blockFull} from "./style";
import { css } from 'emotion';

export default class FullCard extends React.Component {


    render() {

        return (
            <div className={css(blockFull)}>
                <Container maxWidth="md">
                    <BasketCard/>
                </Container>
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
            </div>

        );
    }
}
