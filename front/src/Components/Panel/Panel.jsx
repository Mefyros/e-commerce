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

const fakeProduct = [
  {
    id: 1,
    name: "test"
  },
  {
    id: 2,
    name: "ceci est un telephone" 
  },
  {
    id: 3,
    name: "Pc Portable"
  },
  {
    id: 4,
    name: "disque dur"
  },
  {
    id: 5,
    name: "blabla"
  }
];

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchProduct: '',
      products: [...fakeProduct, ...fakeProduct],
    };
  }

  handleChangeSearchBar = e => {
    this.setState({ searchProduct: e.target.value });
  }

  componentDidMount () {
    // axios.get(`http://127.0.0.1:8000/api/products`)
    // .then(res => {
    //   this.setState({
    //     products: res.data,
    //   });
    // });
  }

  render() {
    const { products, searchProduct } = this.state;



    return(
      <Container maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Container maxWidth="lg" className={css(style.tempSpace)}>
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
            <Container maxWidth="lg" className={css(style.tempSpace)}>
              {
                products.map((product, key) => <ProductCard key={key} name={product.name} productId={product.id}/>)
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