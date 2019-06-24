import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Divider from '@material-ui/core/Divider';

import CheckoutService from '../../Service/CheckoutService';

export default class Info_delivery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fournisseur: [],
    };
  }

  dataDelivery(){
    var snipcart = JSON.parse(localStorage.getItem('cart'));
    var info_user_adress = JSON.parse(localStorage.getItem('eUser_adress'));
    var object = {
      cart: snipcart,
      credential: {
        pays: info_user_adress.pays,
        departement: info_user_adress.departement,
        ville: info_user_adress.ville,
        etc: {cpostal: info_user_adress.cpostal, number: info_user_adress.number, rue: info_user_adress.rue},
      },
      };
    return JSON.stringify(object);
  }

  async componentDidMount(){
    var temp = [];
    var deliveryOption = await CheckoutService.getDelivery(this.dataDelivery());
    for (var i = 0; i < deliveryOption.length; i++) {
      if (deliveryOption[i].disponibility !== "indisponible") {
        temp.push(deliveryOption[i]);
      }
    }
    await this.setState({fournisseur: temp});
    console.log(this.state);
  }

  selectFurnissor(e){
    console.log(e);
  }

  render(){
    return(
      <div>
      <Grid container direction="row" justify='space-around'>
      {this.state.fournisseur.map((item, i) =>
        <Card raised={true} style={style.card} id={i} onClick={() => this.selectFurnissor(this)}>
         <CardActionArea>
          <CardContent>
          <h3>{item.name}</h3>
          <Grid container direction="row" justify='center'>
          <h5>Livrer en {item.delivery_delay}H</h5>
          </Grid>
          <Grid container direction="row" justify='center'>
          <h6>{item.price} EUR</h6>
          </Grid>
          </CardContent>
          </CardActionArea>
        </Card>
      )}

      </Grid>
      </div>
    );
  }
}

const style = {
  card:{
      border: 'solid',
      borderColor: 'red'
  }
}
