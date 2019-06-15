import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { css } from 'emotion';
import style from './style';
import ProductsService from '../../Service/ProductService';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount = async () => {
    const product = await ProductsService.getById(this.props.match.params.id);
    this.setState({ 
      ...product.data.data,
      photos: JSON.parse(product.data.data.photos),
      specs: JSON.parse(product.data.data.specs),
    });
  }

  render() {
    const { name, photos, price, quantity, specs, description } = this.state;

    return(
      <Container maxWidth="lg">
        <div className={css(style.root)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>

              <Paper className={css(style.paper)}>
                {
                  photos !== undefined ? (
                    <img className={css(style.zozio)} src={photos[0]} alt={name}/>
                  ) : (
                    null
                  )
                }
              </Paper>

              <Paper className={css(style.paperpay)}>
                <h6 className={css(style.price)}>{price}€</h6>
                <Button variant="contained" color="primary" className={css(style.button)}>
                  <ShoppingCartIcon id="add-to-cart"/>
                </Button>
              </Paper>

              <Paper className={css(style.paperprice)}>
                {
                  quantity < 1 ? (
                    <h3 className={css(style.notInStock)}>Product not available</h3>
                  ) : quantity > 1 ? (
                    <h3 className={css(style.inStock)}>{quantity} products available</h3>
                  ) : (
                    <h3 className={css(style.inStock)}>{quantity} product available</h3>
                  )
                }
              </Paper>

            </Grid>

            <Grid item xs={12} md={8}>
              <Paper className={css(style.paper)}>{name}</Paper>
  
              <Paper className={css(style.paperdesc)}>{description}</Paper>
            </Grid>

          </Grid>
        </div>
      </Container>
    );
  }
}