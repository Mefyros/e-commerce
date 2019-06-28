import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Snipcart from '../../../SnipCart/Snipcart';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { css }  from 'emotion';
import style, {
  Container,
} from './style';


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Container>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <Grid container direction='column' justify='center'>
        <Grid container direction='row' justify='center'>
          <Icon> shopping_cart </Icon>
        </Grid>
        <Grid container direction='row' justify='center'>
          <p>Panier</p>
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
        <Snipcart/>
      </Menu>
    </Container>
  );
}