import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Tableau from './Component/Tableau';
import Stepper from './Component/Stepper';

import TicketService from '../../Service/TicketService'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default class Order extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id_command: this.props.match.params.id,
      exist: false
    }
  }

  async componentDidMount(){
    var order = await TicketService.getById(this.state.id_command);
    if (order.id) {
      await this.setState({order: order, exist: true});
    }
    console.log(this.state.order);
  }

  render(){
    if (this.state.exist) {
      return(
        <div style={{backgroundColor: 'white', paddingTop: 30, paddingBottom: 30}}>
        <Container>
        <Grid style={{borderBottom: '2px solid #8ed5a4'}} container direction='row' justify="space-between" alignItems="baseline">
        <h3 style={{fontWeight: 'normal'}}>Order N° <span style={{fontWeight: 'bold'}}>{this.props.match.params.id}</span></h3>
        <h4>Commande effectue le {this.state.order.created_at.split(' ')[0]}</h4>
        </Grid>
        <Grid container direction='row' justify="center">
        <Stepper step={this.state.order.step} />
        </Grid>
        <Grid style={{marginTop: 30}} container direction='row' justify='center'>
          <h3 style={{fontWeight: 'bold'}}>Contenu de ma commande</h3>
        </Grid>
        <Grid container direction='row' justify='center'>
        <Tableau style={{border: '1px solid'}} cart={this.state.order.cart} />
        </Grid>
        </Container>
        </div>
      );
    }else {
      return(
        <h1>Command not found</h1>
      );
    }
  }
}
