import React, {Component} from 'react';
import CustomCard from './components/card'
import Container from '@material-ui/core/Container';
import SearchService from '../../Service/SearchService'
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import SliderRange from './components/SliderRange';
import { css } from 'emotion';
import { filter, filterContent, filterTitle, filterPrice } from './style';



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
                        <div className={css(filterContent)}>
                            <h3 className={css(filterTitle)}>FILTER BY PRICE </h3>
                            <div className={css(filterPrice)}>
                            <SliderRange/>
                            </div>
                        </div>
                        <div className={css(filterContent)}>
                            <h3 className={css(filterTitle)}>FILTER BY CATEGORY</h3>
                            <div>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{
                                        'aria-label': 'uncontrolled-checkbox',
                                    }}
                                /> Watercooling
                            </div>
                            <hr/>
                            <div>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{
                                        'aria-label': 'uncontrolled-checkbox',
                                    }}
                                /> Accessories
                            </div>
                            <hr/>
                            <div>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{
                                        'aria-label': 'uncontrolled-checkbox',
                                    }}
                                /> Motherboard
                            </div>
                            <hr/>
                            <div>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{
                                        'aria-label': 'uncontrolled-checkbox',
                                    }}
                                /> Processor
                            </div>
                            <hr/>
                            <div>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{
                                        'aria-label': 'uncontrolled-checkbox',
                                    }}
                                /> Graphic Card
                            </div>
                            <hr/>
                        </div>
                        <div className={css(filterContent)}>
                            <h3 className={css(filterTitle)}>FILTER BY BRAND</h3>
                            <div>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{
                                        'aria-label': 'uncontrolled-checkbox',
                                    }}
                                /> SAMSUNG
                            </div>
                            <hr/>
                            <div>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{
                                        'aria-label': 'uncontrolled-checkbox',
                                    }}
                                /> ASUS
                            </div>
                            <hr/>
                            <div>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{
                                        'aria-label': 'uncontrolled-checkbox',
                                    }}
                                /> Acer
                            </div>
                            <hr/>
                            <div>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{
                                        'aria-label': 'uncontrolled-checkbox',
                                    }}
                                /> MSI
                            </div>
                            <hr/>
                            <div>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{
                                        'aria-label': 'uncontrolled-checkbox',
                                    }}
                                /> Intel
                            </div>
                            <hr/>
                            <div>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{
                                        'aria-label': 'uncontrolled-checkbox',
                                    }}
                                /> NVIDIA
                            </div>
                            <hr/>
                        </div>

                        <div className={css(filterContent)}>
                            <h3 className={css(filterTitle)}>SPECIAL SPEC</h3>
                            <div>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{
                                        'aria-label': 'uncontrolled-checkbox',
                                    }}
                                /> MADE IN FRANCE
                            </div>
                            <hr/>
                            <div>
                                <Checkbox
                                    value="checkedC"
                                    inputProps={{
                                        'aria-label': 'uncontrolled-checkbox',
                                    }}
                                /> Green Power
                            </div>
                            <hr/>
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