import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
export default class Header extends React.Component {
  render() {
    return (
      <div className={useStyles.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <Button component={Link} color="inherit" to="/">Home</Button>
          </Typography>
          <Typography variant="h6" color="inherit">
            <Button component={Link} color="inherit" to="/panel">Panel</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}