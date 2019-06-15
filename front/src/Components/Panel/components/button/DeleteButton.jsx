import React from 'react';
import Axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import style from './style';

export default (props) => {
  const deleteProduct = productId => {
    const url = `127.0.0.1:8000/product/${productId}`;
    // Axios.delete(url);
  }

  return(
      <>
        <Typography className={css(style.buttonBox)}>
            <Button className={css(style.deleteButton)} onClick={() => deleteProduct(props.productId)}>Delete</Button>
        </Typography>
      </>
  );
}