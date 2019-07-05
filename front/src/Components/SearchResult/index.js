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
            result: [],
            cat: [],
            subCat: [],
            brand: [],
            maxPrice: 2,
        }
    }


    componentDidMount = async () => {
        let params = this.props.match.params, result
        // console.log(params);
        if(params.categorie){
            result = await SearchService.searchByCategory({
                categorie_id: params.categorie,
                keyword: params.keyword
            })
        } else {
            result = await SearchService.search(params.keyword)
        }
        let arrayCat = [];
        let arraySub = [];
        let arrayBrand = [];
        let maxPrice = 2;

        for (let i = 0; i < result.data.length; i++)
        {
            if (!arrayCat.includes(result.data[i].categorie.name))
                arrayCat.push(result.data[i].categorie.name);

            if (!arraySub.includes(result.data[i].sub_categorie.name))
                arraySub.push(result.data[i].sub_categorie.name);

            if (!arrayBrand.includes(result.data[i].marque))
                arrayBrand.push(result.data[i].marque);

            if (maxPrice < result.data[i].price)
                maxPrice = result.data[i].price;
        }

        console.log(result.data)

        this.setState({
            result: result.data,
            cat: arrayCat,
            subCat: arraySub,
            brand: arrayBrand,
            maxPrice,
        })


    }
    render(){
        const {maxPrice} = this.state;
        // console.log(this.state.result)
        return(
            <Container>
                <Grid  container item xs={12} spacing={3} justify='center'>
                    <Grid item xs={4} className={css(filter)}>
                        <div className={css(filterContent)}>
                            <h3 className={css(filterTitle)}>FILTER BY PRICE </h3>
                            <div className={css(filterPrice)}>
                            <SliderRange max={maxPrice} />
                            </div>
                        </div>
                        <div className={css(filterContent)}>
                            <h3 className={css(filterTitle)}>FILTER BY CATEGORY</h3>
                            <div>
                                 {this.state.cat.map(rescat => {
                                     // console.log(rescat)
                                     return (
                                         <>
                                             <div>
                                                <Checkbox
                                                value="checked"
                                                inputProps={{
                                                    'aria-label': 'uncontrolled-checkbox',
                                                    }}
                                                />
                                                 {rescat}
                                            </div>
                                         <hr/>
                                         </>
                                     )
                                 })}
                        </div>
                        </div>

                            <div className={css(filterContent)}>
                                <h3 className={css(filterTitle)}>FILTER BY SUB-CATEGORY</h3>
                                <div>
                                    {this.state.subCat.map(resSubcat => {
                                        return (
                                            <>
                                                <div>
                                                    <Checkbox
                                                        value="checked"
                                                        inputProps={{
                                                            'aria-label': 'uncontrolled-checkbox',
                                                        }}
                                                    />
                                                    {resSubcat}
                                                </div>
                                                <hr/>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>

                        <div className={css(filterContent)}>
                            <h3 className={css(filterTitle)}>FILTER BY BRAND</h3>
                            <div>
                                {this.state.brand.map(resBrand => {
                                    return (
                                        <>
                                            <div>
                                                <Checkbox
                                                    value="checked"
                                                    inputProps={{
                                                        'aria-label': 'uncontrolled-checkbox',
                                                    }}
                                                />
                                                {resBrand}
                                            </div>
                                            <hr/>
                                        </>
                                    )
                                })}
                            </div>
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