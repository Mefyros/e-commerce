import React from 'react';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class CreditCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        <h1>Credit Card</h1>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>N°</TableCell>
              <TableCell>CB Numero</TableCell>
              <TableCell>Pin</TableCell>
              <TableCell>Proprietaire</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>1234*************</TableCell>
              <TableCell>***</TableCell>
              <TableCell>John Doe</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </div>
    );
  }
}
