import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { css }  from 'emotion';
import { header, button } from './style';

export default class Navbar extends React.Component {

  render() {
    return (
      <AppBar className={css(header)} position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <Button className={css(button)} component={Link} color="inherit" to="/">Home</Button>
          </Typography>
          <Typography variant="h6" color="inherit">
            <Button className={css(button)} component={Link} color="inherit" to="/panel">Panel</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
  }