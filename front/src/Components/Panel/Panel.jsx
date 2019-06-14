import React from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import AddButton from './components/button/AddButton';
import ProductCard from './components/Product/Card';
import { css } from 'emotion';
import { tempSpace } from './style';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchProduct: '',
      products: [],
    };
  }

  handleChangeSearchBar = e => {
    this.setState({ searchProduct: e.target.value });
  }

  componentDidMount () {
    axios.get(`http://127.0.0.1:8000/api/products`)
    .then(res => {
      this.setState({
        products: res.data,
        isReady: true,
      });
    })
  }

  render() {
    const { products, searchProduct } = this.state;

    return(
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className={css(tempSpace)}>
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
        <Container maxWidth="lg" className={css(tempSpace)}>
          {
            products.map((product, key) => <ProductCard key={key} name={product.name} productId={product.id}/>)
          }
        </Container>
      </React.Fragment>
    );
  }
}