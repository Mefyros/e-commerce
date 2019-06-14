import { css } from '@emotion/core';
import Color from '../Color';

export const header = css`
  flex-grow: 1;
  position: fixed;
  box-shadow: -1px 1px 5px 1px rgba(0,0,0,.25);
`;

export const button = css`
  border-radius: 0;

  &:hover {
    background-color: transparent;
    transform: scale(1.05);
    text-decoration: underline;
    cursor: pointer;
  }
`;