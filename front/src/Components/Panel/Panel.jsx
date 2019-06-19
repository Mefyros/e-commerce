import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import AddButton from './components/button/AddButton';
import ProductCard from './components/Product/Card';
import CategorieManager from './components/CategorieManager/CategorieManager';
import { css } from 'emotion';
import style from './style';
import ProductService from '../../Service/ProductService';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchProduct: '',
      products: [],
    };
  }

  componentDidMount = () => {
    this.getProducts();
  }

  handleChangeSearchBar = e => {
    this.setState({ searchProduct: e.target.value });
  }

  getProducts = async () => {
    this.setState({ products: await ProductService.getAll() });
  } 

  render() {
    const { products, searchProduct } = this.state;

    return(
        <Container maxWidth="lg">
          <CssBaseline />
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Container maxWidth="lg" className={css(style.navContainer)}>
                <AddButton />
                <FormControl>
                  <InputLabel htmlFor="search-bar">Search product</InputLabel>
                  <Input
                    id="search-bar"
                    type="text"
                    value={searchProduct}
                    onChange={this.handleChangeSearchBar}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Container>
              <Container maxWidth="lg">
                {
                  products.map((product, key) => <ProductCard key={key} product={product}/>)
                }
              </Container>
            </Grid>
            <Grid item xs={12} md={5} className={css(style.categorieContainer)}>
              <CategorieManager />
            </Grid>
          </Grid>
        </Container>
    );
  }
}