import React from 'react';
import BasketMenu from './components/BasketMenu';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
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
          
          <Grid item xs={12} md={4}>
            
          </Grid>

        </Grid>
      </Container>
    );
  }
}
