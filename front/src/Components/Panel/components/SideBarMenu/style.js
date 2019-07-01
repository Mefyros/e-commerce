import styled from '@emotion/styled';
import Color from '../../../Color';

export const Container = styled.div`
  position: fixed;
  z-index: 9999;
  top: 150px;
  left: 0;
  background-color: ${Color.white};
  min-width: 100px;

  @media (max-width: 768px) {
    top: 0;
    padding-top: 0;
    position: relative;
  }
`;
