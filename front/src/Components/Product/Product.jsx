import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { css } from 'emotion';
import style from './style';
import ProductsService from '../../Service/ProductService';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import AddToCartBtn from './components/AddToCartBtn/AddToCartBtn';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = async () => {
    const product = await ProductsService.getById(this.props.match.params.id);

    if (typeof product === 'object') {
      const classe = product.parent.parent.parent;
      const categorie = product.parent.parent;
      const subCategorie = product.parent;

      this.setState({ 
        ...product,
        photos: JSON.parse(product.photos),
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
  }

  render() {
    const { id, name, photos, price, quantity, description, categorie, classe, subCategorie } = this.state;
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
                    <AddToCartBtn product={{id, name, price, image: photos[0]}}/>
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