import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { css } from 'emotion';
import style from './style';
import CartService from '../../../../Service/CartService';

const mapStateToProps = state => {
  return { products: state.cart };
}

const handleAddToCart = ({ id, name, price, image }) => {
  CartService.addToCart({
    id,
    name,
    price,
    image,
  });
}

const AddToCartBtn = ({ product }) => (
    <Button 
        variant="contained" 
        color="primary" 
        className={css(style.button)}
        onClick={() => handleAddToCart(product)}
    >
        <ShoppingCartIcon id="add-to-cart"/>
    </Button>
);

export default connect(mapStateToProps)(AddToCartBtn);