import React from 'react';
import Axios from 'axios';
import Card from './components/Card/Card';
import CarouselPage from './components/Carousel/Banner';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { css } from 'emotion';
import { container, containerPopu, popTitle } from './style';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      products: [],
    }
  }

  componentDidMount = () => {
    Axios.get("http://127.0.0.1:8000/api/products")
      .then(res => {
        this.setState({
          isReady: true,
          products: res.data, 
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { isReady, products } = this.state;

    if (!isReady) {
      return(
        <>
        
        </>
      );
    }

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