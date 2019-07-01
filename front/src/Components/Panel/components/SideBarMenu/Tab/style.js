import styled from '@emotion/styled';
import Color from '../../../../Color';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em 2em;

  &:hover {
    cursor: pointer;
    background-color: ${Color.ecoBrownHover}33;
  }
`;

export const Label = styled.p`
  margin: 0;
  margin-right: 1em;
  font-size: 1em;
`;

export const IconLeft = styled.i`
  font-size: 1em;
  margin-right: 1em;
`;

export const IconRight = styled.i`
  position: absolute;
  right: 1em;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconDown = styled.i`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1em;
  }
`;