import React from 'react';
import { 
    ContainerFirst,
    ContainerSeconde,
    TitleContainer,
    TitleImg,
    TitleText,
    Price,
    Total,
    Quantity,
    QuantityInput,
    Action,
} from "./style";
import { updateQuantity, deleteItem } from '../../../../../../Redux/Action/CartAction';
import { connect } from 'react-redux';
import ProductService from '../../../../../../Service/ProductService';

const mapStateToProps = (state, ownProps) => {
  return {
    cartItem: state.cart.find(item => item.id === ownProps.id),
  }
}

const mapDispatchToProps = dispatch => ({
  updateQuantity: payload => dispatch(updateQuantity(payload)),
  deleteItem: payload => dispatch(deleteItem(payload)),
});

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxQuantity: 0,
    }
  }

  componentDidMount = async () => {
    const itemFromDb = await ProductService.getById(this.props.cartItem.id);
    this.setState({ maxQuantity: itemFromDb.quantity });
  }

  handleTrashClick = e => {
    const { cartItem, deleteItem} = this.props;
    deleteItem(cartItem);
  }

  handleChangeQuantity = e => {
    const { cartItem, updateQuantity } = this.props;
    const { maxQuantity } = this.state;
    let quantity = 0;

    if (parseInt(e.target.value) > maxQuantity)
      quantity = maxQuantity;
    else if (parseInt(e.target.value) < 1)
      quantity = 1;
    else
      quantity = parseInt(e.target.value);

    updateQuantity({
      old: cartItem,
      new: { ...cartItem, quantity, }
    });
  }

  render() {
    const { id, name, price, quantity, image } = this.props.cartItem;
    const { maxQuantity } = this.state;

    // const fakePic = 'http://www.eldiariodecoahuila.com.mx/u/fotografias/fotosnoticias/2018/10/15/695930.jpg';

    return (
      this.props.number === 0 ? (
        <ContainerFirst>
          <TitleContainer>
            <TitleImg src={image} alt={name}/>
            <TitleText href={`/product/${id}`}>{name}</TitleText>
          </TitleContainer>
          <Price>{price} $</Price>
          <Quantity>
            <QuantityInput 
              type="number" 
              min="1"
              max={maxQuantity}
              onChange={this.handleChangeQuantity} 
              value={quantity}
            />
          </Quantity>
          <Total>{quantity * price} $</Total>
          <Action><i className="fas fa-times" id={id} onClick={this.handleTrashClick}></i></Action>
        </ContainerFirst>
      ) : (
        <ContainerSeconde>
          <TitleContainer>
            <TitleImg src={image} alt={name}/>
            <TitleText href={`/product/${id}`}>{name}</TitleText>
          </TitleContainer>
          <Price>{price} $</Price>
          <Quantity>
            <QuantityInput 
              type="number" 
              min="1"
              max={maxQuantity}
              onChange={this.handleChangeQuantity} 
              value={quantity}
            />
          </Quantity>
          <Total>{quantity * price} $</Total>
          <Action><i className="fas fa-times" id={id} onClick={this.handleTrashClick}></i></Action>
        </ContainerSeconde>
      )
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);