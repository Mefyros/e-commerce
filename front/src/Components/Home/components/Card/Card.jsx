import React from 'react';
import { Link } from "react-router-dom";
import { css } from 'emotion';
import { connect } from 'react-redux';
import { addToCart } from '../../../../Redux/Action/CartAction';
import Button from '../../../DefaultComponent/Button';
import { 
  Container,
  Card,
  CardImageContainer,
  CardImage,
  Name,
  Price,
  ButtonStyle,
} from './style';

const mapStateToProps = state => {
  return { products: state.cart };
}

const mapDispatchToProps = dispatch => ({
  addToCart: payload => dispatch(addToCart(payload)),
});

class CustomCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.product,
      photos: JSON.parse(props.product.photos),
    }
    this.productLink = `/product/${props.product.id}`;
    this.productLinkId = `product${props.product.id}`;
  }

  showProduct = e => {
    e.preventDefault();
    if (e.target.id !== 'add-to-cart' && e.target.tagName !== 'path' && e.target.tagName !== 'svg') {
      const redirect = document.getElementById(this.productLinkId);
      redirect.click();
    }
  }

  addToCart = e => {
    const { addToCart } = this.props;
    const { id, name, photos, price } = this.state;
    addToCart({ id, image: photos[0], name, price });
  }
  
  render() {
    const { id, name, photos, price } = this.state;
    let productName = name.length > 20 ? `${name.slice(0,20)}...` : name;
    const fakePic = 'http://www.eldiariodecoahuila.com.mx/u/fotografias/fotosnoticias/2018/10/15/695930.jpg';

    return (
      <Container>
        <Card href={`/product/${id}`}>
          <CardImageContainer>
            <CardImage src={fakePic} />
          </CardImageContainer>
          <Name>{productName}</Name>
          <Price>{price} $</Price>
        </Card>
        <Button 
          buttonStyle={css(ButtonStyle)}
          text="Add to cart"
          onClick={this.addToCart}
          icon={<i class="fas fa-cart-plus"></i>}
          left
        />
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomCard);