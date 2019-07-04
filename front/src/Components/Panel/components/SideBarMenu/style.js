import styled from '@emotion/styled';
import Color from '../../../Color';

export const Container = styled.div`
  position: fixed;
  z-index: 9999;
  top: 150px;
  left: 0;

  @media (max-width: 768px) {
    top: 0;
    padding-top: 0;
    position: relative;
  }
`;

export const ShowButton = styled.i`
  color: ${Color.white};
  background-color: ${Color.ecoGreen};
  padding: 1em 1em;
  box-shadow: ${Color.hoverShadow};

  &.show {
    background-color: ${Color.ecoBrownHover};
  }

  &:hover {
    cursor: pointer;
    background-color: ${Color.ecoGreenHover};
  }
`;

export const TabsContainer = styled.div`
  box-shadow: ${Color.hoverShadow};
`;