import { css } from '@emotion/core';
import Color from '../../../Color';

export const container = css`
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

export const buttonContainer = css`
  display: flex;
`;

export const title = css`
  margin: 0;
  margin-left: 1.5em;
`;