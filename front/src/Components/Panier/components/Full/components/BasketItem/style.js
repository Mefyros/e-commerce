import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Color from '../../../../../Color';

const containerBase = css`
  width: 100%;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
`;

const baseText = css`
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: 400;
  user-select: none;
`;

export const ContainerFirst = styled.div`
  ${containerBase};
`;

export const ContainerSeconde = styled.div`
  ${containerBase};
  border-top: 1px solid ${Color.grey};
`;

export const TitleContainer = styled.div`
  ${containerBase};
  flex: 6;
`;

export const TitleImg = styled.img`
  height: 80%;
  margin: 0 8px;
`;

export const TitleText = styled.a`
  ${baseText};
  margin-left: .5em;
  text-transform: capitalize;
  color: ${Color.darkGrey};
  transition-duration: 100ms;

  &:hover {
    color: ${Color.red};
    text-decoration: underline;
  }
`;

export const Price = styled.p`
  ${baseText};
  flex: 2;
  border-left: 1px solid ${Color.grey};
  border-right: 1px solid ${Color.grey};
`;

export const Total = styled.p`
  ${baseText};
  border-right: 1px solid ${Color.grey};
  flex: 2;
`;

export const Quantity = styled.div`
  flex: 2;
  border-right: 1px solid ${Color.grey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuantityInput = styled.input`
  width: 60%;
  text-align: center;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${Color.grey};
  margin: 0;
  padding: .2em 0;
  transition-duration: 250ms;

  &:hover {
    border-bottom: 2px solid ${Color.grey};
  }

  &:focus {
    outline: none;
  }
`;

export const Action = styled.p`
  ${baseText};
  flex: 1;
  font-size: 1.4em;

  i {
    &:hover {
      cursor: pointer;
      color: ${Color.lightRed};
    }
  }
`;