import React from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { css } from 'emotion';
import style from './style';

export default class Snipcart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wish_list: [
                {
                    product: {
                        id: 1,
                        name: 'Iphone 6',
                        photos: 'https://...'
                    },
                    quantity: 1,
                    price: 699
                },
                {
                    product: {
                        id: 2,
                        name: 'Television Samsung 4K 34938',
                        photos: 'https://...'
                    },
                    quantity: 1,
                    price: 799
                },
                {
                    product: {
                        id: 2,
                        name: 'Clopinette',
                        photos: 'https://...'
                    },
                    quantity: 2,
                    price: 42
                },
                {
                    product: {
                        id: 2,
                        name: 'Playstation 4',
                        photos: 'https://...'
                    },
                    quantity: 5,
                    price: 400
                },
                {
                    product: {
                        id: 2,
                        name: 'MacBook air',
                        photos: 'https://...'
                    },
                    quantity: 3,
                    price: 1200
                },
            ]
        }
    }

    ListItem () {
        if (this.state.wish_list.length <= 0) {
            return <List><h5>Votre panier est vide</h5></List>
        }else {
             return(
              <List>
              <ListItem>
                 <ListItemText><h6>Product / Quantity</h6></ListItemText>
                 <ListItemSecondaryAction><h6>Price</h6></ListItemSecondaryAction>
              </ListItem>
              <Divider/>
             {
                this.state.wish_list.map((item) =>
                <ListItem style={{marginRight: 30}} button>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText style={{marginRight: 30}} secondary={'x'+item.quantity}>{item.product.name}</ListItemText>
                    <ListItemSecondaryAction>
                        <p>{item.price*item.quantity} €</p>
                    </ListItemSecondaryAction>
                </ListItem>)
             }
             </List>);
        }
    }

    totalPrice(){
      var snip = this.state.wish_list;
      var total = null;
      for (var i = 0; i < snip.length; i++) {
          total += snip[i].price * snip[i].quantity;
      }
      return total;
    }

    render(){
        return(
            <div>
            <Container style={{marginTop: 20}} fixed>
                <Grid container direction='row' justify='center'>
                <h4>SnipCart</h4>
                </Grid>
            </Container>
            <Container fixed>
                    {this.ListItem()}
            </Container>
            <Container style={{marginTop: 10, marginBottom: 10}} fixed>
                <Grid container direction='row' justify='center'>
                <h4>Total {this.totalPrice()} €</h4>
                </Grid>
            </Container>
            <Divider/>
            <Container fixed>
            <Grid style={{marginTop: 10}} container direction="row" justify='space-around'>
                <Button component={Link} color="inherit" to="/cart">Modifier mon panier</Button>
                <Button>checkout</Button>
            </Grid>
            </Container>
            </div>
        );
    }
}
