import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';

declare var paypal;

const mapStateToProps = state => ({
    cart: state.cart,
})

let PayPalButton = paypal.Buttons.driver('react', { React, ReactDOM });

class Button extends React.Component {
    getTotalCart = () => {
        const {cart} = this.props;
        let totalPrice = 0;

        for (let i = 0; i < cart.length; ++i) {
            const { price, quantity } = cart[i];
            totalPrice += price * quantity;
        }

        return totalPrice;
    }

    createOrder(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: this.getTotalCart(),
                }
            }]
        });
    }
    onApprove(data, actions) {
        return actions.order.capture();
    }
    render() {
        return (
            <PayPalButton
            createOrder={ (data, actions) => this.createOrder(data, actions) }
            onApprove={ (data, actions) => this.onApprove(data, actions) }
        />
    );
    }
}

export default connect(mapStateToProps)(Button);