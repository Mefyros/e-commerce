import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import style from './style';

export default (props) => {
  return(
      <>
        <Typography className={css(style.buttonBox)}>
            <Button 
              className={css(style.editButton)} 
              component={Link} 
              to={`/product/${props.productId}/edit`}
            >
              Edit
            </Button>
        </Typography>
      </>
  );
}