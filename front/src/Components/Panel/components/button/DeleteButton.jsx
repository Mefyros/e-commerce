import React from 'react';
import Axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import { box, buttonSmall } from './style';

export default (props) => {
  const deleteProduct = productId => {
    const url = `127.0.0.1:8000/product/${productId}`;
    // Axios.delete(url);
  }

  return(
      <>
        <Typography className={css(box)}>
            <Button className={css(buttonSmall)} onClick={() => deleteProduct(props.productId)}>Delete</Button>
        </Typography>
      </>
  );
}