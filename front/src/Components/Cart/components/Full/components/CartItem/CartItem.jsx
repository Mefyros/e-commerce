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

  handleTrashClick = e => {
    const { cartItem, deleteItem} = this.props;
    deleteItem(cartItem);
  }

  handleChangeQuantity = e => {
    const { cartItem, updateQuantity } = this.props;
    updateQuantity({
      old: cartItem,
      new: { ...cartItem, quantity: parseInt(e.target.value) }
    });
  }

  render() {
    const { id, name, price, quantity } = this.props.cartItem;

    const fakePic = 'http://www.eldiariodecoahuila.com.mx/u/fotografias/fotosnoticias/2018/10/15/695930.jpg';

    return (
      this.props.number === 0 ? (
        <ContainerFirst>
          <TitleContainer>
            <TitleImg src={fakePic} alt={name}/>
            <TitleText href={`/product/${id}`}>{name}</TitleText>
          </TitleContainer>
          <Price>{price} $</Price>
          <Quantity>
            <QuantityInput 
              type="number" 
              min="1"
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
            <TitleImg src={fakePic} alt={name}/>
            <TitleText href={`/product/${id}`}>{name}</TitleText>
          </TitleContainer>
          <Price>{price} $</Price>
          <Quantity>
            <QuantityInput 
              type="number" 
              min="1" 
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