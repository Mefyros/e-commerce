import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { css } from 'emotion';
import style from './style';
import ProductsService from '../../Service/ProductService';
import CartService from '../../Service/CartService';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount = async () => {
    const product = await ProductsService.getById(this.props.match.params.id);
    const classe = product.parent.parent.parent;
    const categorie = product.parent.parent;
    const subCategorie = product.parent;

    this.setState({ 
      ...product,
      photos: JSON.parse(product.photos),
      specs: JSON.parse(product.specs),
      classe: {
        id: classe.id,
        name: classe.name,
        url: `/c/${classe.id}`
      },
      categorie: {
        id: categorie.id,
        name: categorie.name,
        url: `/c/${classe.id}/${categorie.id}`
      },
      subCategorie: {
        id: subCategorie.id,
        name: subCategorie.name,
        url: `/c/${classe.id}/${categorie.id}/${subCategorie.id}`
      }
    });
  }

  handleAddToCart = () => {
    const { id, name, price, photos } = this.state;
    CartService.addToCart({
      id,
      name,
      price,
      image: photos[0],
    });
  }

  render() {
    const { id, name, photos, price, quantity, specs, description, categorie, classe, subCategorie } = this.state;
    const links = classe && categorie && subCategorie ? [classe, categorie, subCategorie, { id, name, url:`/product/${id}` }] : [];

    return(
      <Container maxWidth="lg">
        <div className={css(style.root)}>
          <Breadcrumbs links={links}/>
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
                {
                  quantity > 0 ? (
                    <Button 
                      variant="contained" 
                      color="primary" 
                      className={css(style.button)}
                      onClick={this.handleAddToCart}
                    >
                      <ShoppingCartIcon id="add-to-cart"/>
                    </Button>
                  ) : ( null )
                }
                
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