import React from 'react';
import useStyles from './style';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default (props) => {
  const classes = useStyles();
  const url = `/product/${props.productId}/edit`;

  return(
      <>
        <Typography className={classes.box} variant="p">
            <Button className={classes.buttonSmall} component={Link} to={url}>Edit</Button>
        </Typography>
      </>
  );
}