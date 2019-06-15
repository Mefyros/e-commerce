import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import style from './style';
import ProductService from '../../../../Service/ProductService';

export default (props) => {
  const deleteProduct = () => {
    ProductService.delete(props.productId);
  }

  return(
      <>
        <Typography className={css(style.buttonBox)}>
            <Button className={css(style.deleteButton)} onClick={() => deleteProduct()}>Delete</Button>
        </Typography>
      </>
  );
}