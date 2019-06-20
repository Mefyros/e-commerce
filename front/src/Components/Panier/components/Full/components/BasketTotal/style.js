import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Color from '../../../../../Color';

export default {

};

export const Container = styled.div`
  width: 100%;
  padding: 2em 0;
  border: 1px solid ${Color.lightGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${Color.shadow};
`;

export const CheckoutBtn = styled.button`
  margin: 0;
  margin-top: 1em;
  border: 1px solid ${Color.orange};
  background-color: ${Color.madForMango};
  padding: .5em 1em;
  transition-duration: 200ms;
  box-shadow: ${Color.shadow};
  user-select: none;

  &:hover {
    box-shadow: ${Color.hoverShadow};
    background-color: ${Color.madForMangoHover};
  }

  &:focus {
    outline: none;
  }
`;

export const Title = styled.h4`
  user-select: none;
`;

export const Price = styled.h6`
  margin: 1em 0;
  user-select: none;
`;

export const Quantity = styled.p`

`;