import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CartIcon from '@material-ui/icons/CardTravel';

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    margin: '2vh',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const product = {
    price: 42,
    name: "Petit oisal",
}

export default (props) => {
  const classes = useStyles();
  const { price, name } = product;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://jardinage.lemonde.fr/images/dossiers/2017-12/pic-epeiche-1-135005.jpg"
        title="Paella dish"
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
        <IconButton aria-label="Add to cart">
          <CartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
