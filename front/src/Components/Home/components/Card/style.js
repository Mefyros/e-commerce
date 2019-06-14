import { css } from '@emotion/core';
import Color from '../../../Color';

export const cardStyle = css`
  width: 250px;
  border-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin: 1.5vh;
  box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.05);

  &:hover {
    cursor: pointer;
    transform: scale(1.005);
    box-shadow: -1px -1px 5px 1px rgba(0,0,0,.1), 1px 1px 5px 1px rgba(0,0,0,.1);
  }
`;

export const media = css`
  height: 0;
  padding-top: 56.25%; /* 16:9 */
`;
