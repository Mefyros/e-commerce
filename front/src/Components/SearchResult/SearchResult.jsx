import React, {Component} from 'react';
import CustomCard from './components/card/Card'
import Container from '@material-ui/core/Container';
import SearchService from '../../Service/SearchService'
import Grid from '@material-ui/core/Grid';
import { css } from 'emotion';
import { filter } from './style';

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
                    <Grid item xs={4} className={css(filter)}>
                        <div>
                            <h3>FILTER BY PRICE </h3>
                        </div>
                        <div>
                            <h3>FILTER BY CATEGORY</h3>
                        </div>
                        <div>
                            <h3>FILTER BY BRAND</h3>
                        </div>
                        <div>
                            <h3>SPECIAL SPEC</h3>
                        </div>
                    </Grid>
                    <Grid  item xs={8}>
                    {this.state.result.map(res => {
                        return (
                                <CustomCard product={res}/>
                        )
                    })}
                    </Grid>
                </Grid>
            </Container>
        )
    }
}