import styled from '@emotion/styled';
import Color from '../../../../../Color';

export const Container = styled.div`
  width: 100%;
  padding: 2em 0;
  border: 1px solid ${Color.ecoBrown};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${Color.shadow};
`;

export const CheckoutBtn = styled.button`
  margin: 0;
  margin-top: 1em;
  border: 1px solid ${Color.green};
  background-color: ${Color.ecoGreen};
  padding: .5em 1em;
  transition-duration: 200ms;
  box-shadow: ${Color.shadow};
  user-select: none;

  &:hover {
    box-shadow: ${Color.hoverShadow};
    background-color: ${Color.ecoGreenHover};
  }

  &:focus {
    outline: none;
  }
`;

export const Title = styled.h4`
  user-select: none;
`;

export const Price = styled.h3`
  margin: .7em 0;
  user-select: none;
`;

export const ColorNumber = styled.span`
  color: ${Color.ecoGreen};
`;

export const Quantity = styled.p`

`;