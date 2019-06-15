import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import style from './style';

export default (props) => {
  const url = `/product/${props.productId}/edit`;

  return(
      <>
        <Typography className={css(style.buttonBox)}>
            <Button className={css(style.editButton)} component={Link} to={url}>Edit</Button>
        </Typography>
      </>
  );
}