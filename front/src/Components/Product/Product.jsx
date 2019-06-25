import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { css } from 'emotion';
import style from './style';
import ProductsService from '../../Service/ProductService';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import AddToCartBtn from './components/AddToCartBtn/AddToCartBtn';
import Button from '../DefaultComponent/Button/Button';

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
        <Breadcrumbs links={links}/>
        {/* <AddToCartBtn product={{id, name, price, image: photos[0]}}/> */}
        <div className={css(style.root)}>
          <Grid container>

            <Button text="Add to Cart"  icon={<i class="fas fa-cart-plus"></i>} left/>
          
          </Grid>
        </div>
      </Container>
    );
  }
}