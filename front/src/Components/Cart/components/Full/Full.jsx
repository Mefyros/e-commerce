import React from 'react';
import BasketMenu from './components/CartMenu';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BasketTotal from './components/CartTotal/CartTotal';
import { Title } from "./style";

export default class FullCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDisable: false,
    };
  }

  changeInputStatus = () => {
    this.setState({ inputDisable: true });
  }

  render() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>

          <Title>My Cart</Title>
          
          <Grid item xs={12} md={8}>
            <BasketMenu inputDisable={this.state.inputDisable}/>
          </Grid>

          <Grid item xs={12} md={1} />

          <Grid item xs={12} md={3}>
            <BasketTotal changeInputStatus={this.changeInputStatus}/>
          </Grid>

        </Grid>
      </Container>
    );
  }
}
