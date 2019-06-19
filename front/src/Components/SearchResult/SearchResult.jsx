import React, {Component} from 'react';
import CustomCard from '../Home/components/Card/Card'

import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { css } from 'emotion';
import Container from '@material-ui/core/Container';

export default class SearchResult extends Component{
    render(){
        return(
            <Container>
            {this.props.result.data.map(res => {
                return (
                    <CustomCard result={res}/>
                )
            })}
            </Container>
        )
    }
}