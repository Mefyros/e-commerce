import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { cardStyle, media, addToCard, descript} from './style';
import { css } from 'emotion';

export default class CustomCard extends React.Component {
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
    if (e.target.id !== 'add-to-cart' && e.target.tagName !== 'path' && e.target.tagName !== 'svg') {
      const redirect = document.getElementById(this.productLinkId);
      redirect.click();
    }
  }

  addToCart = e => {
    console.log(`${this.productLinkId} add to cart`);
  }
  
  render() {
    const { name, photos, price, description } = this.state;

    return (
      <Card className={css(cardStyle)} onClick={this.showProduct}>
        <CardMedia
          className={css(media)}
          image={photos[0]}
          title="Bird"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            Price: {price}$
          </Typography>
          <Typography className={css(descript)} variant="body2" color="textSecondary" component="h2">
            {description.substring(0, 75)}...
          </Typography>
        </CardContent>
        <CardActions className={css(addToCard)} disableSpacing>
          <IconButton  id="add-to-cart" aria-label="Add to cart" onClick={this.addToCart}>
            <ShoppingCartIcon id="add-to-cart"/>
          </IconButton>
        </CardActions>
        <Link id={this.productLinkId} to={this.productLink}/>
      </Card>
    );
  }
}
