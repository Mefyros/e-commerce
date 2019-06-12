import React from 'react';
import DeleteButton from '../button/DeleteButton';
import EditButton from '../button/EditButton';
import { 
  Container,
  Title, 
} from './style';

export default (props) => {
  return(
    <Container>
      <Title>{props.name}</Title>
      <DeleteButton />
      <EditButton />
    </Container>
  );
}