import styled from 'styled-components';
import Color from '../../../Color';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  margin: .4em 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 10px 1px rgba(0,0,0,.05);
  border: 1px solid ${Color.lightGrey}; 
  border-radius: 2px;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Title = styled.p`
  margin: 0;
  margin-left: 1.5em;
`;