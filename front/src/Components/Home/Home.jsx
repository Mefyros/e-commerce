import React from 'react';
import Card from './components/Card/Card';
import CarouselPage from './components/Carousel/Banner';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { css } from 'emotion';
import { container, containerPopu, popTitle } from './style';
import ProductService from '../../Service/ProductService';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  componentDidMount = async () => {
    const products = await ProductService.getByPopularity();
    this.setState({ products: Array.isArray(products) ? products : [] });
  };

  render() {
    const { products } = this.state;

    return(
      <>
        <React.Fragment>
          <CssBaseline />
            <CarouselPage/>
          <Container maxWidth='lg'  className={css(containerPopu)}>
            <h1 className={css(popTitle)}>
              Popular Items
            </h1>
          </Container>
          <Container maxWidth="lg" className={css(container)}>
            {
              products.map((product, key) => <Card key={key} product={product}/>)
            }
          </Container>
        </React.Fragment>
      </>
    );
  }
}