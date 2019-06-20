import React from 'react';
import DeleteButton from '../button/DeleteButton';
import EditButton from '../button/EditButton';
import StockButton from '../button/StockButton';
import { Link } from "react-router-dom";
import { Container, ButtonContainer, Title } from './style';

export default class Crad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.product,
    };
  }

  handleTitleClick = () => {
    const link = document.getElementById(`product${this.state.id}`);
    link.click();
  }

  render() {
    const { name, id, quantity } = this.state;

    return(
      <Container>
        <Title onClick={this.handleTitleClick}>{name}</Title>
        <ButtonContainer>
          <DeleteButton productId={id}/>
          <EditButton productId={id}/>
          <StockButton id={id} quantity={quantity}/>
          <Link id={`product${id}`} to={`/product/${id}`}/>
        </ButtonContainer>
      </Container>
    );
  }
}