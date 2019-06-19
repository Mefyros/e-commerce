import React from 'react';
import style, { 
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
import { css } from 'emotion';
import CartService from '../../../../../../Service/CartService';


export default class BasketItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.product,
    }
  }

  handleTrashClick = e => {
    // CartService.deleteCartItem(e.target.id);
    console.log(`del cart item id: ${e.target.id}`);
  }

  handleChangeQuantity = e => {
    this.setState({ quantity: parseInt(e.target.value) });
    CartService.setNewQuantity(this.state.id, parseInt(e.target.value));
  }

  render() {
    const { id, name, price, image, quantity } = this.state;
    const { index } = this.props;

    const fakePic = 'http://www.eldiariodecoahuila.com.mx/u/fotografias/fotosnoticias/2018/10/15/695930.jpg';

    return (
      index === 0 ? (
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