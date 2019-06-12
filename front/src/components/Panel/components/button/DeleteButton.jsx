import React from 'react';
import Axios from 'axios';
import useStyles from './style';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default (props) => {
  const classes = useStyles();

  const deleteProduct = productId => {
    const url = `127.0.0.1:8000/product/${productId}`;
    // Axios.delete(url);
  }

  return(
      <>
        <Typography className={classes.box} variant="p">
            <Button className={classes.buttonSmall} onClick={() => deleteProduct(props.productId)}>Delete</Button>
        </Typography>
      </>
  );
}