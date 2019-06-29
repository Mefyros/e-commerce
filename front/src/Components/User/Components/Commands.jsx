import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import TicketService from '../../../Service/TicketService.js';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class Commands extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      order: [],
    }
  }

  async componentDidMount(){
    await this.setState({order: this.props.order})
  }

  render(){
    return(
      <div>
      <Grid container direction='row' justify='center'>
      <Container>
       <h2>Tableau de mes commandes</h2>
       <h6>Gerer facilement vos commande passee ou en cours avec ce jolie tableau</h6>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Ordered</TableCell>
              <TableCell>Step</TableCell>
              <TableCell>Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            this.state.order.map((item) =>
              <TableRow>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.ordered.split('T')[0]} [{item.ordered.split('T')[1].split('.000000Z')[0]}]</TableCell>
                <TableCell>{item.step}</TableCell>
                <TableCell>Pas de detail</TableCell>
              </TableRow>
            )
          }

          </TableBody>
        </Table>
      </Container>
      </Grid>
      </div>
    );
  }
}
