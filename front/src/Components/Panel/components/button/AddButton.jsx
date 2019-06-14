import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import { box, button } from './style';

export default (props) => {
  return(
      <>
        <Typography className={css(box)} variant="p">
            <Button className={css(button)} component={Link} to="/new/product">Add new product</Button>
        </Typography>
      </>
  );
}