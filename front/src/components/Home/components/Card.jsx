import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CartIcon from '@material-ui/icons/CardTravel';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title="Petit oisal"
      />
      <CardMedia
        className={classes.media}
        image="https://jardinage.lemonde.fr/images/dossiers/2017-12/pic-epeiche-1-135005.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
