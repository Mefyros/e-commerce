import React from 'react';
import BasketMenu from './components/CartMenu';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BasketTotal from './components/CartTotal/CartTotal';
import { css } from 'emotion';
import style, { 
  Title,
} from "./style";

export default class FullCard extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>

          <Title>My Cart</Title>
          
          <Grid item xs={12} md={8}>
            <BasketMenu />
          </Grid>
          
          <Grid item xs={12} md={1} />

          <Grid item xs={12} md={3}>
            <BasketTotal />
          </Grid>

        </Grid>
      </Container>
    );
  }
}
