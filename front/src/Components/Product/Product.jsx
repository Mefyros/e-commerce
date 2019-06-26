import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
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
  TabsContainer,
  TabView,
  Description,
} from './style';
import Tabs from './components/Tabs/Tabs';
import TabsItem from './components/Tabs/TabItem';
import Specs from './components/Specs';

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
      tabsToShow: 1,
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

  createOptions = (quantity = 0) => {
    const options = [];
    for (let i = 0; i < quantity; i++) {
      options.push(<option key={i} value={i + 1}>{i + 1}</option>);
    }
    return options;
  }

  tabsSwicth = (tabsToShow) => {
    this.setState({ tabsToShow });
  }

  render() {
    const { id, name, photos, price, quantity, description, categorie, classe, 
      subCategorie, inputQuantity, tabsToShow, specs } = this.state;
    const links = classe && categorie && subCategorie ? [classe, categorie, subCategorie, { id, name, url:`/product/${id}` }] : [];
    const options = this.createOptions(quantity > 25 ? 25 : quantity);

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
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        {
                          fakePics.map((img, key) => <li key={key} data-target="#carouselExampleIndicators" data-slide-to={key}></li>)
                        }
                      </ol>
                      <div className="carousel-inner">
                        {
                          fakePics.map((img, key) => {
                            if (key === 0) {
                              return (
                                <div key={key} className="carousel-item active" data-interval="999999999">
                                  <img src={img} className="d-block w-100" alt={name} />
                                </div>
                              )
                            } else {
                              return (
                                <div key={key} className="carousel-item" data-interval="999999999">
                                  <img src={img} className="d-block w-100" alt={name} />
                                </div>
                              )
                            }
                        })
                        }
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </CarouselContainer>
                </Grid>

                <Grid  item xs={12} md={6}>
                  <ProductInfoContainer>
                    <ProductName>{name}</ProductName>
                    <ReviewContainer>
                      <ReviewStars>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i>
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
                        <QuantityInput value={inputQuantity} onChange={this.quantityChange}>
                          {
                            options.map((Option, key) => Option)
                          }
                        </QuantityInput>
                      </QuantityInputContainer>
                    </QuantityContainer>
                    <AddToCart>
                      <Button 
                        text="Add to Cart"
                        icon={<i className="fas fa-cart-plus"></i>}
                        onClick={this.handleAddToCart}
                        left
                        color={Color.lightBlue}
                      />
                    </AddToCart>
                  </ProductInfoContainer>

                </Grid>
              </Grid>

              <Grid container>
                <TabsContainer>
                  <Tabs onChange={this.tabsSwicth} defaultTab={tabsToShow}>
                    {
                      tabsToShow === 1
                        ? (<TabsItem active label="Description" onClick={() => this.tabsSwicth(1)}/>)
                        : (<TabsItem label="Description" onClick={() => this.tabsSwicth(1)}/>)
                    }
                    {
                      tabsToShow === 2
                        ? (<TabsItem active label="Details" onClick={() => this.tabsSwicth(2)}/>)
                        : (<TabsItem label="Details" onClick={() => this.tabsSwicth(2)}/>)
                    }
                    {
                      tabsToShow === 3
                        ? (<TabsItem active label="Reviews" onClick={() => this.tabsSwicth(3)}/>)
                        : (<TabsItem label="Reviews" onClick={() => this.tabsSwicth(3)}/>)
                    }
                  </Tabs>
                  <TabView>
                    { tabsToShow === 1 && <Description>{description}</Description> }
                    { tabsToShow === 2 && <Specs specs={specs}/> }
                    { tabsToShow === 3 && <p>Reviews Tab</p> }
                  </TabView>
                </TabsContainer>
              </Grid>

            </ContainerProduct>
            
          </Grid>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);