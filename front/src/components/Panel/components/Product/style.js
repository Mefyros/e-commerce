import styled from 'styled-components';
import Color from '../../../Color';

export const Container = styled.div`
  width: 100%;
  margin: 1em 0;
  display: flex;
  flex-direction: row;
  box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.05);
  border: 1px solid ${Color.lightGrey}; 
  border-radius: 3px;
`;

export const Title = styled.p`

`;