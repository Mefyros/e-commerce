import React from 'react';
import BasketMenu from './components/BasketMenu';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BasketTotal from './components/BasketTotal/BasketTotal';
import { css } from 'emotion';
import style, { 
  Title,
} from "./style";

export default class FullCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products
    }
  }

  render() {

    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>

          <Title>My Cart</Title>
          
          <Grid item xs={12} md={8}>
            <BasketMenu products={this.props.products}/>
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
