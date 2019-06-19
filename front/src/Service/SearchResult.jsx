import React, {Component} from 'react';
import CustomCard from '../Home/components/Card/Card'

import SearchService from '../../Service/SearchService'
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { css } from 'emotion';
import Container from '@material-ui/core/Container';

export default class SearchResult extends Component{
    constructor(props){
        super(props)
        this.state = {
            result: []
        }
    }
    componentDidMount = async () => {
        let params = this.props.match.params, result
        console.log(params);
        if(params.categorie){
            result = await SearchService.searchByCategory({
                categorie_id: params.categorie,
                keyword: params.keyword
            })
        } else {
            result = await SearchService.search(params.keyword)
        }
        console.log(result.data)
        this.setState({
            result: result.data.data
        })
    }
    render(){
        // console.log(this.state.result)
        return(
            <Container>
                <Grid  container item xs={12} spacing={3} justify='center'>
                    {this.state.result.map(res => {
                        return (
                            <Grid  item xs={3}>
                                <CustomCard product={res}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        )
    }
}