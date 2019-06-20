import React from 'react';
import { css } from 'emotion';
import style, { 
  Container,
  BasketContent,
} from "./style";
import BasketHeader from './BasketHeader/BasketHeader';
import BasketItem from './BasketItem/BasketItem';


export default class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
    }
  }

  render() {
    const { products } = this.state;
    
    return (
      <Container>
        
        <BasketHeader />

        <BasketContent>
          {
            products.map((product, key) => <BasketItem key={key} product={product} index={key}/>)
          }
        </BasketContent>
      </Container>
    );
  }
}