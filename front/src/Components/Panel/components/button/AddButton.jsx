import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import style from './style';

export default (props) => {
  return(
      <>
        <Typography className={css(style.buttonBox)}>
            <Button className={css(style.addButton)} component={Link} to="/new/product">Add new product</Button>
        </Typography>
      </>
  );
}