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
            products: [],
            cat: [],
            subCat: [],
            brand: [],
            maxPrice: 2,
            filters: [],
        }
    }

    handleChange = (name, key, event) => {
        console.log(name);
        const filters = [...this.state.filters];

        if (!event.target.checked) {
            // filters.pop();
            filters.filter((filter) => {
                if (filter !== name) return filter;
            });
        }
        else {
            if (!filters.includes(name))
                filters.push(name);
        }
        this.setState({filters}, () => console.log(this.state));
    };

    componentDidMount = async () => {
        let params = this.props.match.params;
        let products;
        if(params.categorie){
            products = await SearchService.searchByCategory({
                categorie_id: params.categorie,
                keyword: params.keyword
            })
        } else {
            products = await SearchService.search(params.keyword)
        }
        let arrayCat = [];
        let arraySub = [];
        let arrayBrand = [];
        let maxPrice = 2;
        const PRODUCTS = products.data;

        for (let i = 0; i < PRODUCTS.length; i++)
        {
            if (!arrayCat.includes(PRODUCTS[i].categorie.name))
                arrayCat.push(PRODUCTS[i].categorie.name);

            if (!arraySub.includes(PRODUCTS[i].sub_categorie.name))
                arraySub.push(PRODUCTS[i].sub_categorie.name);

            if (!arrayBrand.includes(PRODUCTS[i].marque))
                arrayBrand.push(PRODUCTS[i].marque);

            if (maxPrice < PRODUCTS[i].price)
                maxPrice = PRODUCTS[i].price;
        }

        this.setState({
            products: PRODUCTS,
            cat: arrayCat,
            subCat: arraySub,
            brand: arrayBrand,
            maxPrice,
        })


    }

    getProducts = () => {
        const {products, filters} = this.state;
        let flag = true;
        let result = [];
        
        for (let p = 0; p<products.length; p++)
        {
            for(let f = 0; f<filters.length; f++)
            {
              console.log(products[p]);
              console.log(filters[f]);

            }
            if (flag)
            {
                // console.log('push');
                result.push(products[p])
            }
            flag = true;
        }
       // console.log(result);
        return result;
    };

    render(){
        const {maxPrice, cat, subCat, brand} = this.state;
        const result = this.getProducts() || [];
        // console.log(result);

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
                                 {cat.map(rescat => {

                                     return (
                                         <>
                                             <div>
                                                <Checkbox
                                                value= {rescat}
                                                onChange={(event => this.handleChange(rescat, 'categorie', event))}
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
                                    {subCat.map(resSubcat => {
                                        return (
                                            <>
                                                <div>
                                                    <Checkbox
                                                        value={resSubcat}
                                                        onChange={(event => this.handleChange(resSubcat, 'sub-categorie',event))}
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
                                {brand.map(resBrand => {
                                    return (
                                        <>
                                            <div>
                                                <Checkbox
                                                    value={resBrand}
                                                    onChange={(event => this.handleChange(resBrand, 'marque',event))}
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

                        {/*<div className={css(filterContent)}>*/}
                        {/*    <h3 className={css(filterTitle)}>SPECIAL SPEC</h3>*/}
                        {/*    <div>*/}
                        {/*        <Checkbox*/}
                        {/*            value="checkedC"*/}
                        {/*            inputProps={{*/}
                        {/*                'aria-label': 'uncontrolled-checkbox',*/}
                        {/*            }}*/}
                        {/*        /> MADE IN FRANCE*/}
                        {/*    </div>*/}
                        {/*    <hr/>*/}
                        {/*    <div>*/}
                        {/*        <Checkbox*/}
                        {/*            value="checkedC"*/}
                        {/*            inputProps={{*/}
                        {/*                'aria-label': 'uncontrolled-checkbox',*/}
                        {/*            }}*/}
                        {/*        /> Green Power*/}
                        {/*    </div>*/}
                        {/*    <hr/>*/}
                        {/*</div>*/}

                    </Grid>
                    <Grid  item xs={8}>
                    {result.map(res => {
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