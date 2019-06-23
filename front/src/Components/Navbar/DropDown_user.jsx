import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import UserPanelDropdown from './User_panel_dropdown';

import Icon from '@material-ui/core/Icon';

import AuthService from '../../Service/AuthService.js';
// import LoginRegisterService from '../../Service/LoginRegisterService.js';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  async function getUser(){
    await AuthService.getUser(localStorage.getItem('eToken'))
    .then(function(res){
      return res.user;
    });
  }



  return (
    <div style={{marginRight: 20}}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>

      <Grid container direction='column' justify='center'>
        <Grid container direction='row' justify='center'>
          <Icon>account_circle</Icon>
        </Grid>
        <Grid container direction='row' justify='center'>
          <p>Compte</p>
        </Grid>
      </Grid>
      
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <UserPanelDropdown user={getUser()}/>
      </Menu>
    </div>
  );
}
