import React from 'react';
import DeleteButton from '../button/DeleteButton';
import EditButton from '../button/EditButton';
import { 
  Container,
  Title, 
  ButtonContainer,
} from './style';

export default (props) => {
  return(
    <Container>
      <Title>{props.name}</Title>
      <ButtonContainer>
        <DeleteButton productId={props.productId}/>
        <EditButton productId={props.productId}/>
      </ButtonContainer>
    </Container>
  );
}