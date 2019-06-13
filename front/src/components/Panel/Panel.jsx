import React from 'react';
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
import {
  TempSpace,
} from './style';

const fakeList = [
  {
    id: 1,
    name: 'test comp'
  },
  {
    id: 2,
    name: 'test comp'
  },
  {
    id: 3,
    name: 'test comp'
  },
  {
    id: 4,
    name: 'test comp'
  },
  {
    id: 5,
    name: 'test comp'
  },
  {
    id: 6,
    name: 'test comp'
  },
  {
    id: 7,
    name: 'test comp'
  },
  {
    id: 8,
    name: 'test comp'
  },
  {
    id: 9,
    name: 'test comp'
  },
  {
    id: 10,
    name: 'test comp'
  }
];

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchProduct: '',
      products: [...fakeList],
    };
  }

  handleChangeSearchBar = e => {
    this.setState({ searchProduct: e.target.value });
  }

  render() {
    const { products } = this.state;

    return(
      <React.Fragment>
        <CssBaseline />
        <TempSpace />
        <Container maxWidth="lg">
          <AddButton />
          <FormControl>
            <InputLabel htmlFor="search-bar">Search product</InputLabel>
            <Input
              id="search-bar"
              type="text"
              value={this.state.searchProduct}
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
        <TempSpace />
        <Container maxWidth="lg">
          {
            products.map((product, key) => <ProductCard key={key} name={product.name} productId={product.id}/>)
          }
        </Container>
      </React.Fragment>
    );
  }
}