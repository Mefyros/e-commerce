import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import useStyles from './style';

export default (props) => {
  const classes = useStyles();
  const { price, name, id } = props.product;
  const productLink = `/product/${id}`;
  const productLinkId = `product${id}`;

  const showProduct = e => {
    if (e.target.id !== 'add-to-cart' && e.target.tagName !== 'path' && e.target.tagName !== 'svg') {
      const redirect = document.getElementById(productLinkId);
      redirect.click();
    }
  }

  const addToCart = e => {
    console.log(`${productLinkId} add to cart`);
  }

  return (
    <Card className={classes.card} onClick={showProduct}>
      <CardMedia
        className={classes.media}
        image="https://jardinage.lemonde.fr/images/dossiers/2017-12/pic-epeiche-1-135005.jpg"
        title="Bird"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h2">
          Price: {price}$
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton id="add-to-cart" aria-label="Add to cart" onClick={addToCart}>
          <ShoppingCartIcon id="add-to-cart"/>
        </IconButton>
      </CardActions>
      <Link id={productLinkId} to={productLink}/>
    </Card>
  );
}
