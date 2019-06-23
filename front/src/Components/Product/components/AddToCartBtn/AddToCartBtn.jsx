import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { css } from 'emotion';
import style from './style';
import { addToCart } from '../../../../Redux/Action/CartAction';

const mapStateToProps = state => {
  return { products: state.cart };
}

const mapDispatchToProps = dispatch => ({
  addToCart: payload => dispatch(addToCart(payload)),
});

class AddToCartBtn extends React.Component {
  handleAddToCart = () => {
    const { product, addToCart } = this.props;
    addToCart(product);
  }

  render() {
    return (
      <Button 
          variant="contained" 
          color="primary" 
          className={css(style.button)}
          onClick={this.handleAddToCart}
      >
          <ShoppingCartIcon id="add-to-cart"/>
      </Button>
    );
  }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartBtn);