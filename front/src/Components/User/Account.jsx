import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import General from './Components/General';
import CreditCard from './Components/CreditCard';
import Commands from './Components/Commands';

import TicketService from '../../Service/TicketService.js';
import AuthService from '../../Service/AuthService.js';

import { css }  from 'emotion';

import { principal_grid, itemMenuList, menuList, panelView } from './style';

export default class Account extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      onglet_choice: 'General'
    }
  }

  OngletList = () => {
   return(
     <List className={css(menuList)}>
     <Grid style={{height: 400, padding: 15}} container direction='column' justify='center'>
       <ListItem className={css(itemMenuList)}>
         <a onClick={() => this.setState({onglet_choice: 'General'})}><h5><i style={{marginRight: 10, fontSize: 20}} class="fas fa-wrench"></i>Paramètres généraux</h5></a>
       </ListItem>
       <ListItem className={css(itemMenuList)}>
          <a onClick={() => this.setState({onglet_choice: 'Commands'})}><h5><i style={{marginRight: 10}} class="fas fa-cube"></i>Mes commandes</h5></a>
       </ListItem>
       <ListItem className={css(itemMenuList)}>
         <a onClick={() => this.setState({onglet_choice: 'CreditCard'})}><h5><i style={{marginRight: 10}} class="fas fa-credit-card"></i>Mon moyen de paiement</h5></a>
       </ListItem>
      </Grid>
     </List>
   );
 }

 async componentDidMount(){
   var order = await TicketService.getAllByUser(localStorage.getItem('eToken'));
   await this.setState({order: order});
 }

  render(){
    return(
      <div>
        <div className={css(principal_grid)}>
          <this.OngletList />
          <OngletChoice user={this.state.user} state={this.state} choice={this.state.onglet_choice} />
        </div>
      </div>
    );
  }
}

function OngletChoice(props){
  switch (props.choice) {
    case 'General':
        return (<div className={css(panelView)}><General/></div>);
      break;
    case 'CreditCard':
        return (<div className={css(panelView)}><CreditCard/></div>);
      break;
    case 'Commands':
        return (<div className={css(panelView)}><Commands order={props.state.order}/></div>);
      break;
    default: return (<div className={css(panelView)}><General user={props.user}/></div>);

  }
}
