import React from 'react';
import { 
    Container,
    TitleContainer,
    TitleImg,
    TitleText,
    Price,
    Total,
    Quantity,
    QuantityInput,
    Action,
    ActionContainer,
    ActionText,
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
    let maxQuantity = itemFromDb.quantity > 25 ? 25 : itemFromDb.quantity;
    this.setState({ maxQuantity });
  }

  handleTrashClick = e => {
    const { cartItem, deleteItem} = this.props;
    if (!this.props.inputDisable) {
      deleteItem(cartItem);
    }
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
    const { cartItem, inputDisable } = this.props;
    const { id, name, price, quantity, image } = cartItem;
    const { maxQuantity } = this.state;

    return (
      <Container>
        <TitleContainer>
          <TitleImg src={image} alt={name}/>
          <TitleText href={`/product/${id}`}>{name}</TitleText>
        </TitleContainer>
        <Price>{price} $</Price>
        <Quantity>
          {
            inputDisable 
              ? (<QuantityInput 
                  type="number" 
                  min="1"
                  max={maxQuantity}
                  onChange={this.handleChangeQuantity} 
                  value={quantity}
                  disabled
                />)
              : (<QuantityInput 
                type="number" 
                min="1"
                max={maxQuantity}
                onChange={this.handleChangeQuantity} 
                value={quantity}
              />)
            }
        </Quantity>
        <Total>{quantity * price} $</Total>
        <Action>
          <ActionContainer onClick={this.handleTrashClick}>
            <i className="fas fa-times" id={id}></i>
            <ActionText>Remove</ActionText>
          </ActionContainer>
        </Action>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);