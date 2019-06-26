import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { css } from 'emotion';
import ProductsService from '../../Service/ProductService';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Button from '../DefaultComponent/Button';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Action/CartAction';
import Color from '../Color';
import {
  ContainerProduct,
  CarouselContainer,
  ProductInfoContainer,
  ProductName,
  ReviewContainer,
  ReviewStars,
  ReviewText,
  ProductPrice,
  ProductDesc,
  QuantityContainer,
  QuantityInputContainer,
  QuantityInputText,
  QuantityInput,
  InStock,
  AddToCart,
} from './style';

const mapStateToProps = state => {
  return { products: state.cart };
}

const mapDispatchToProps = dispatch => ({
  addToCart: payload => dispatch(addToCart(payload)),
});

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputQuantity: 1,
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

  handleAddToCart = () => {
    console.log('add to cart');
    const { addToCart } = this.props;
    const { id, name, price, photos } = this.state;
    addToCart({ id, name,price, image: photos[0] });
  }

  quantityChange = e => {
    const { quantity } = this.state;
    let inputQuantity = parseInt(e.target.value);

    if (inputQuantity > quantity)
      inputQuantity = quantity;

    if (inputQuantity > 25)
      inputQuantity = 25;
      
    this.setState({ inputQuantity });
  }

  render() {
    const { id, name, photos, price, quantity, description, categorie, classe, subCategorie, inputQuantity } = this.state;
    const links = classe && categorie && subCategorie ? [classe, categorie, subCategorie, { id, name, url:`/product/${id}` }] : [];
    const maxQuantity = quantity > 25 ? 25 : quantity;

    const fakePics = [
      "https://www.murrayayson.com/images/251/large/In-the-Eglinton-Valley.JPG",
      "https://www.tom-archer.com/wp-content/uploads/2018/06/milford-sound-night-fine-art-photography-new-zealand.jpg",
      "https://d36tnp772eyphs.cloudfront.net/blogs/1/2015/04/waiotapu2-940x624.jpg",
    ];

    return(
      <Container maxWidth="lg">
        <Breadcrumbs links={links}/>
          <Grid container>
            <ContainerProduct>

              <Grid container spacing={2}>
                <Grid  item xs={12} md={6}>
                  <CarouselContainer>
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                        {
                          fakePics.map((img, key) => <li key={key} data-target="#carouselExampleIndicators" data-slide-to={key}></li>)
                        }
                      </ol>
                      <div class="carousel-inner">
                        {
                          fakePics.map((img, key) => {
                            if (key === 0) {
                              return (
                                <div class="carousel-item active" data-interval="999999999">
                                  <img key={key} src={img} class="d-block w-100" alt={name} />
                                </div>
                              )
                            } else {
                              return (
                                <div class="carousel-item" data-interval="999999999">
                                  <img key={key} src={img} class="d-block w-100" alt={name} />
                                </div>
                              )
                            }
                        })
                        }
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                  </CarouselContainer>
                </Grid>

                <Grid  item xs={12} md={6}>
                  <ProductInfoContainer>
                    <ProductName>{name}</ProductName>
                    <ReviewContainer>
                      <ReviewStars>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                      </ReviewStars>
                      <ReviewText>3.5/5 (3 reviews)</ReviewText>
                    </ReviewContainer>
                    <ProductPrice>$ {price}</ProductPrice>
                    <ProductDesc>{description}</ProductDesc>
                    <QuantityContainer>
                      {
                        quantity > 1 
                          ? (<InStock>In stock: {quantity} products</InStock>)
                          : quantity === 0 
                            ? (<InStock>In stock: {quantity} products</InStock>)
                            : (<InStock>Not available</InStock>)
                      }
                      <QuantityInputContainer>
                        <QuantityInputText>Qty:</QuantityInputText>
                        <QuantityInput 
                          type="number"
                          min="1"
                          max={maxQuantity}
                          value={inputQuantity}
                          onChange={this.quantityChange}
                        />
                      </QuantityInputContainer>
                    </QuantityContainer>
                    <AddToCart>
                      <Button 
                        text="Add to Cart"
                        icon={<i class="fas fa-cart-plus"></i>}
                        onClick={this.handleAddToCart}
                        left
                        color={Color.lightBlue}
                      />
                    </AddToCart>
                  </ProductInfoContainer>

                </Grid>
              </Grid>

            </ContainerProduct>
            
          </Grid>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);