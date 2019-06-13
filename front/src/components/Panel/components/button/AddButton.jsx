import React from 'react';
import useStyles from './style';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default (props) => {
  const classes = useStyles();

  return(
      <>
        <Typography className={classes.box} variant="p">
            <Button className={classes.button} component={Link} to="/product/create">Add new product</Button>
        </Typography>
      </>
  );
}